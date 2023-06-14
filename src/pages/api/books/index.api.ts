import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const category = req.query.category as string

  const books = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          categoryId: category,
        },
      },
    },
    include: {
      ratings: true,
    },
  })

  const booksAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    _avg: {
      rate: true,
    },
  })

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  )

  let userBooksIds: string[] = []

  if (session) {
    const booksAlreadyRead = await prisma.book.findMany({
      where: {
        ratings: {
          some: {
            user_id: String(session?.user.id),
          },
        },
      },
    })

    userBooksIds = booksAlreadyRead.map((book) => book.id)
  }

  const bookWithAvgRating = books.map((book) => {
    const bookWithAvg = booksAvgRating.find(
      (bookWithAvg) => bookWithAvg.book_id === book.id
    )
    const { ratings, ...bookInfo } = book

    return {
      ...bookInfo,
      avgRating: bookWithAvg?._avg.rate,
      alreadyRead: userBooksIds.includes(book.id),
    }
  })

  res.status(200).json({ books: bookWithAvgRating })
}

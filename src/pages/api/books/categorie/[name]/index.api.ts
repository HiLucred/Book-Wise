/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(400)
  }

  const category = req.query.name as string

  const categories = await prisma.category.findUnique({
    where: {
      name: category,
    },
  })

  const categoriesOnBooks = await prisma.categoriesOnBooks.findMany({
    where: {
      categoryId: categories?.id,
    },
    include: {
      book: {
        include: {
          ratings: true,
        },
      },
    },
  })

  const booksWithAvg = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: {
        in: categoriesOnBooks.map((book) => book.book_id),
      },
    },
    _avg: {
      rate: true,
    },
  })

  const categoriesOnBooksWithAvg = categoriesOnBooks.map((book) => {
    const bookWithAvg = booksWithAvg.find(
      (bookWithAvg) => bookWithAvg.book_id === book.book_id,
    )
    const { ratings, ...bookInfo } = book.book

    return {
      ...bookInfo,
      avgRating: bookWithAvg?._avg.rate,
    }
  })

  res.status(200).json({ categoriesOnBooksWithAvg })
}

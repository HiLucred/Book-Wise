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

  const popularBooks = await prisma.book.findMany({
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    include: {
      ratings: true,
    },
    take: 4,
  })

  const booksAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: {
        in: popularBooks.map((book) => book.id),
      },
    },
    _avg: {
      rate: true,
    },
  })

  const booksWithAvgRating = popularBooks.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id,
    )
    const { ratings, ...bookInfo } = book

    return {
      ...bookInfo,
      avgRating: bookAvgRating?._avg.rate,
    }
  })

  res.status(200).json({ booksWithAvgRating })
}

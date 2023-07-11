import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const bookId = String(req.query.bookId)

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },

    include: {
      categories: {
        include: {
          category: true,
        },
      },
      ratings: {
        orderBy: {
          created_at: 'desc',
        },
        include: {
          user: true,
        },
      },
    },
  })

  res.status(200).json({ book })
}

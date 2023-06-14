import { useCategorieMostRead as CategoriesMostRead } from '@/hooks/useCategorieMostRead'
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const userId = String(req.query.id)

  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  const ratings = await prisma.rating.findMany({
    where: {
      user: {
        id: userId,
      },
    },
    include: {
      book: {
        include: { categories: { include: { category: true } } },
      },
    },
    orderBy: { created_at: 'desc' },
  })

  const pagesRead = ratings.reduce(
    (acc, rating) => rating.book.total_pages + acc,
    0
  )

  const authors = ratings?.map((rating) => rating.book.author)
  const authorsRead = authors?.filter((author, index) => {
    return authors.indexOf(author) === index
  })

  const categoriesRead = ratings
    ?.map((rating) => {
      return rating.book.categories.map((categorie) => categorie.category.name)
    })
    .flat()

  const categorieMostRead = CategoriesMostRead(categoriesRead)

  const analyticsFromUser = {
    data,
    ratings,
    pagesRead,
    booksRead: ratings.length,
    authorsRead: authorsRead.length,
    categorieMostRead,
  }

  res.status(200).json({ analyticsFromUser })
}

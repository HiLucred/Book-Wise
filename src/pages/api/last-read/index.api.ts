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

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  )

  const userId = session?.user.id as string

  const lastRead = await prisma.rating.findMany({
    where: {
      user_id: userId,
    },
    include: {
      book: true,
      user: true,
    },
    orderBy: {
      created_at: 'desc',
    },
    take: 1,
  })

  res.status(200).json({ lastRead })
}

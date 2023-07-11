import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'
import * as z from 'zod'

const NewCommentSchema = z.object({
  book_id: z.string(),
  rate: z.number().min(1).max(5),
  description: z.string().min(1).max(450),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(400)
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    res.status(401).end()
  }

  try {
    const { book_id, rate, description } = NewCommentSchema.parse(req.body)

    const alreadyRated = await prisma.rating.findFirst({
      where: {
        user_id: String(session?.user?.id!),
        book_id,
      },
    })

    if (alreadyRated) {
      return res.status(401).end()
    }

    await prisma.rating.create({
      data: {
        book_id,
        user_id: String(session?.user?.id!),
        description,
        rate,
      },
    })

    return res.status(201).end()
  } catch (err) {
    console.error(err)
    return res.status(400).end()
  }
}

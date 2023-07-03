// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type {KV} from '@prisma/client'
import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()
type Data = {
  key:string
}

export default async (req: NextApiRequest,res: NextApiResponse<any>) => {
  const kv = await client.kV.findUnique({
    where: {key:(req.body as Data).key}
  })
  if (kv !=undefined)res.json(JSON.parse(kv.value))
  else res.status(404).json({"message":"notFound"})
}
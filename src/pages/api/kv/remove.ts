// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()
type Data = {
    key:string
  }
  
export default async (req: NextApiRequest,res: NextApiResponse<any>) => {
    const result = await client.kV.delete({
        where: {
            key : (req.body as Data).key
        }
    })
    res.json({
        id: result.id
    })
}

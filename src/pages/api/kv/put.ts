// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'
const client = new PrismaClient()
type Data = {
    key:string
    value: any
}

export default async (req: NextApiRequest,res: NextApiResponse<any>) => {
    const body = (req.body as Data)
    console.log("json.stringify")
    console.log(JSON.stringify(body))
    console.log(body.key)
    console.log(body.value)
    const x = await client.kV.upsert({
        update: {
            value: JSON.stringify(body.value)
        },
        where: {
            key: body.key
        },
        create: {
            key: body.key,
            value: JSON.stringify(body.value)
        }
    })
    res.json({status: "success",id: x.id})

}
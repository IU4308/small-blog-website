// http://localhost:3000/api/revalidate?path=/&secret=1cf2b2e15c813c3aa0af815f3974216a

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }

    const path = req.query.path as string

    await res.revalidate(path)

    return res.json({ revalidated: true })
}
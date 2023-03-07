import zod from "zod"
import prisma from "@/util/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const slug = zod.string().parse(req.query.slug);

    switch (req.method) {
        case "GET": {
            const post = await prisma.post.findUnique({ where: { slug } });
            res.json({ views: post?.views || 0, })
            break;
        }

        case "POST": {
            // TODO: resolving the +2 views on page refresh
            const post = await prisma.post.upsert({
                where: { slug },
                create: { slug, views: 1 },
                update: {
                    views: { increment: 1 }
                }
            })
            res.json({ views: post?.views || 0, })
            break;
        }
    }
}
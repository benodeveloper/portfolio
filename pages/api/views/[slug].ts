import prisma from "@/util/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // TODO: validate slug
    const slug = req.query.slug?.toString();
    if (slug == undefined) return res.status(404);

    switch (req.method) {
        case "GET": {
            const post = await prisma.post.findUnique({ where: { slug } });
            res.json({ views: post?.views || 0, })
            break;
        }

        case "POST": {
            // TODO: resolving the +2 views on page refresh
            const post = await await prisma.post.upsert({
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
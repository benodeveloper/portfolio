import prisma from "@/util/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const slug = req.query.slug?.toString();

    if (slug == undefined) {
        res.status(404);
        return
    }


    switch (req.method) {
        case "GET": {
            const post = await prisma.post.findUnique({
                where: { slug }
            })
            res.json({
                likes: post?.likes || 0
            })
        }
            break

        case "POST": {
            const likes = req.body.likes;
            prisma.post.upsert({
                where: { slug },
                create: {
                    slug,
                    likes
                },
                update: {
                    likes: {
                        increment: likes
                    }
                }
            })
        }
    }


}
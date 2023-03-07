import prisma from "@/util/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const slug = req.query.slug?.toString();

    if (slug == undefined) return res.status(404);

    const clientIPAddress = req.headers["x-forwarded-for"] || "0.0.0.0";
    const sessionId = clientIPAddress + slug;

    switch (req.method) {
        case "GET": {
            const [post, session] = await Promise.all([
                prisma.post.findUnique({
                    where: { slug }
                })
                ,
                await prisma.session.findUnique({
                    where: { id: sessionId }
                })

            ])

            res.json({
                likes: post?.likes || 0,
                currentUserLikes: session?.likes || 0,
            })
            break;
        }

        case "POST": {
            const likes = req.body.likes;
            const [post, session] = await Promise.all([
                prisma.session.upsert({
                    where: { id: sessionId },
                    create: {
                        id: sessionId,
                        likes,
                    },
                    update: {
                        likes: {
                            increment: likes
                        }
                    }
                }),
                await prisma.post.upsert({
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
                })])

            res.json({
                likes: post?.likes || 0,
                currentUserLikes: session?.likes || 0,
            })
            break;
        }
    }
}
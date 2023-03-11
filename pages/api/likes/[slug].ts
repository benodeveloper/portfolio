import prisma from "@/util/prisma";
import zod from "zod"
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const slug = zod.string().parse(req.query.slug);

    const clientIPAddress = req.headers["x-forwarded-for"] || "0.0.0.0";
    const sessionId = await Base64.stringify(hmacSHA512(clientIPAddress + slug, process.env.APP_KEY || "zp1YUWcX"));

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
import type { DefaultSeoProps } from "next-seo"
import { generateOGImage } from "./ogImageGenerator"

const title = `Beno developer`
const description = `Tep into my digital oasis, where I share my experiences in shipping great products, honing my developer skills, and growing my career in the tech industry. Join me on a journey of continuous learning and discovery, as I share my insights and strategies for achieving success in this ever-evolving field.`
const domain = `portfolio-listoun.vercel.app`
const twitter = `@beno_developer`
const meta = `Full stack developer`

export const seo: DefaultSeoProps = {
    title: title + " | " + meta,
    description,
    openGraph: {
        title,
        type: "website",
        url: `https://${domain}`,
        site_name: title,
        images: [
            {
                url: generateOGImage(),
                width: 1600,
                height: 836,
                alt: title,
            },
        ],
    },
    twitter: {
        handle: twitter,
        cardType: "summary_large_image",
    },
}
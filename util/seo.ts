import type { DefaultSeoProps } from "next-seo"
import { generateOGImage } from "./ogImageGenerator"

const title = `Beno developer`
const description = `Hello there!  Welcome to my digital oasis, where I share my experience building amazing products and improving my coding and problem-solving skills.`
const domain = `benodeveloper.com`
const twitter = `@benodeveloper`
const meta = `Software developer`

export const seo: DefaultSeoProps = {
    title: title + " | " + meta,
    description,
    canonical: `https://${domain}`,
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
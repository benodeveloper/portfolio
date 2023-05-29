import type { ImageProps } from "next/image"
import Image from "next/image";
import React from "react"

export const BlurImage = (props: ImageProps) => {
    return (
        <div
            className={`relative flex overflow-hidden rounded-xl bg-white/[2%] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-xl after:border after:border-rose-200/10 after:content-['']`}
        >
            <Image

                {...props}
                className={`rounded-xl duration-700 ease-in-out scale-100 blur-0 grayscale-0`}
                // loading="lazy"
            />
        </div>
    )
}
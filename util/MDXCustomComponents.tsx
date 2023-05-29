import { BlurImage } from "@/components/BlurImage"
import { Notice } from "@/components/notice"
import { ImageProps } from "next/image"
import slugify from "slugify"

export const MDXComponents = {
    Notice,
    h1: (props: any) => (
        <h2
            className="mt-5 mb-6 text-[#111111] font-bold text-xl sm:text-3xl"
            {...props}
        />
    ),
    h2: (props: any) => {
        return <h3 id={slugify(props.children)}
            className="mt-5 mb-4 text-[#111111] font-bold text-xl sm:text-2xl"
            {...props}
        />
    }
    ,
    // h3: (props: any) => (
    //     <h4 className="text-xl font-medium" {...props} />
    // ),
    // h4: (props: any) => (
    //     <h5 className="text-lg font-medium" {...props} />
    // ),
    // hr: (props: any) => (
    //     <hr
    //         className="relative border-t-2 pt-9 sm:pt-10"
    //         {...props}
    //     />
    // ),
        a: ({ href = "", ...props }) => {
            return <a
                className="text-[#2165f4] text-sm"
                href={href}
                rel="noreferrer"
                target="_blank"
                {...props
                }
            />
        },

    p: (props: any) => {
        return <p className="font-light mb-6 mt-3" {...props} />
    },
    table: (props: any) => {
        return <div className="relative overflow-x-auto my-10"><table className="w-full text-sm text-left " {...props} /></div>
    },
    thead: (props: any) => {
        return <thead className="text-xs text-gray-700 uppercase bg-gray-50" {...props} />
    },
    th: (props: any) => {
        return <th className="px-6 py-3 border" {...props} />
    },
    tr: (props: any) => {
        return <tr className="bg-white border" {...props} />
    },
    td: (props: any) => {
        return <td className="px-6 py-4 border" {...props} />
    },
    // ul: (props: any) => (
    //     <ul
    //         className="space-y-3 [li>&]:mt-2 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-blue-100/20"
    //         {...props}
    //     />
    // ),
    ol: (props: any) => (
        <ol className="list-decimal pl-8 pr-3 text-sm font-extralight italic mt-4 mb-16 border py-4 rounded" {...props} />
    ),
    li: (props: any) => (
        <li className="mt-1" {...props} />
    ),
    strong: (props: any) => <strong className="font-semibold" {...props} />,
    // blockquote: (props: any) => (
    //     <blockquote
    //         className="border-l-2 border-blue-200/10 pl-4 text-xl italic xl:!col-start-2 xl:!col-end-3"
    //         {...props}
    //     />
    // ),
    // del: (props: any) => (
    //     <del className="dark:text-blue-100/70 text-neutral-500 line-through" {...props} />
    // ),
    Img: ({
        children,
        bleed,
        caption,
        ...props
    }: {
        children: React.ReactNode
        bleed?: boolean
        caption?: string
    } & ImageProps) => {
        return (
            <>
                <div
                    className="my-16"
                >
                    <BlurImage {...props} />
                </div>
                {caption ? (
                    <div className="mt-2 text-sm italic text-rose-100/60">{caption}</div>
                ) : null}
            </>
        )
    },

}
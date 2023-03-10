import { Notice } from "@/components/notice"

export const MDXComponents = {
    Notice,
    h1: (props: any) => (
        <h2
            className="relative mt-2 border-t-2 dark:border-neutral-800 pt-9 text-xl font-medium sm:text-3xl"
            {...props}
        />
    ),
    h2: (props: any) => (
        <h3
            className="relative mt-2 pt-9 border-t-2 dark:border-neutral-800 text-xl font-medium sm:text-2xl"
            {...props}
        />
    ),
    h3: (props: any) => (
        <h4 className="text-xl font-medium" {...props} />
    ),
    h4: (props: any) => (
        <h5 className="text-lg font-medium" {...props} />
    ),
    hr: (props: any) => (
        <hr
            className="relative border-t-2 dark:border-neutral-800 pt-9 sm:pt-10"
            {...props}
        />
    ),
    a: ({ href = "", ...props }) => {
        return <a
            className="underline underline-offset-2 transition-all text-indigo-500 dark:text-blue-400/80"
            href={href}
            rel="noreferrer"
            target="_blank"
            {...props
            }
        />
    },
    p: (props: any) => {
        return <p className="text-lg" {...props} />
    }
    ,
    ul: (props: any) => (
        <ul
            className="space-y-3 [li>&]:mt-2 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-blue-100/20"
            {...props}
        />
    ),
    ol: (props: any) => (
        <ol className="list-decimal space-y-3 pl-10" {...props} />
    ),
    strong: (props: any) => <strong className="font-semibold" {...props} />,
    blockquote: (props: any) => (
        <blockquote
            className="border-l-2 border-blue-200/10 pl-4 text-xl italic xl:!col-start-2 xl:!col-end-3"
            {...props}
        />
    ),
    del: (props: any) => (
        <del className="dark:text-blue-100/70 text-neutral-500 line-through" {...props} />
    ),
}
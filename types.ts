import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type BasePageLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement ) => ReactNode
}

export type BaseAppProps = AppProps & {
    Component: BasePageLayout
} 
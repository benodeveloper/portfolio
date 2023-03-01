import { ReactElement, ReactNode } from "react"
import { Footer } from "~/components/footer"
import { Navbar } from "~/components/navbar"


export const Layout = (page: ReactElement): ReactNode => {
    return <div className="text-[#E7E9EA] overlay">
            <div className="max-w-3xl mx-auto min-h-screen px-3">
                <Navbar />
                {page}
            </div>
            <Footer />
    </div>
}
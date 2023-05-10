import { ReactElement } from "react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"


const Layout = ({ children }: { children: ReactElement }) => {
    return <div className="text-neutral-200">
        <div className="max-w-6xl mx-auto min-h-screen px-7">
            <Navbar />
            {children}
        </div>
        <Footer />
    </div>
}

export default Layout;
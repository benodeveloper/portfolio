import { ReactElement } from "react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"


const Layout = ({ children }: { children: ReactElement }) => {
    return <>
        <div className="container mx-auto px-4">
            <Navbar />
            {children}
        </div>
        <Footer />
    </>
}

export default Layout;
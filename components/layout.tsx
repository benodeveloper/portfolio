import { ReactElement, ReactNode } from "react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"


const Layout = ({children}:{children: ReactElement}) => {
    return <div className="text-gray-100 overlay after:content-[''] after:-z-10 after:absolute after:inset-0 after:bg">
            <div className="max-w-3xl mx-auto min-h-screen px-7">
                <Navbar />
                {children}
            </div>
            <Footer />
    </div>
}

export default Layout;
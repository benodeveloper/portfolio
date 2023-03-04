import { ReactElement, ReactNode } from "react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"


const Layout = ({children}:{children: ReactElement}) => {
    return <div className="text-gray-200">
            <div className="max-w-3xl mx-auto min-h-screen px-7">
                <Navbar />
                {children}
            </div>
            <Footer />
    </div>
}

export default Layout;


export const Navbar = () => {
    return <>
        <nav className="h-20">
            <div className="flex justify-between py-5">
                <div>
                    <span className="text-3xl font-bold">Beno.</span>
                </div>
                <ul className="flex gap-5 text-base font-light">
                    <li  className="font-medium">Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    </>
}
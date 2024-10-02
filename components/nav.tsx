const Nav = ()=> {
    return <div className="flex fixed justify-between py-5  px-9 bg-black/0 text-white  w-full z-50">
        <div className="fixed font-medium text-2xl bg-[#1b42fe] h-24 w-24 shadow flex justify-center items-center top-12 z-50">
            <div>bend</div>
        </div>
        <div/>
        <ul className="mx-3 flex gap-24 mt-8 me-52">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Work</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
        </ul>
        <div className="fixed right-9 top-12 bg-white text-black py-4 px-5 text-sm shadow z-50">
            <a href="#">Contact</a>
        </div>
    </div>
}

export default Nav;
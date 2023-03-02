
export const SingleBlog = () => {
    return <div className="my-7 p-4 bg-[#0F172A]/[.9] border-2 border-[#20283C] rounded-md">
        <h3 className="text-2xl font-bold">How to quickly deploy a static website</h3>
        <p className="text-gray-400 text-[15px] my-5">
        Static websites are now used to bootstrap lots of websites and are becoming 
        the basis for a variety of tools that even influence both web designers and 
        developers influence both web designers and developers.
        </p>
        <div className="flex  justify-between max-w-sm">
            <div className="flex items-center">
                <svg width={13} height={13} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.643 1.393C4.643.623 5.267 0 6.036 0h.928c.77 0 1.393.624 1.393 1.393v10.214c0 .77-.624 1.393-1.393 1.393h-.928a1.393 1.393 0 0 1-1.393-1.393V1.393ZM0 6.964c0-.769.624-1.393 1.393-1.393h.928c.77 0 1.393.624 1.393 1.393v4.643c0 .77-.624 1.393-1.393 1.393h-.928A1.393 1.393 0 0 1 0 11.607V6.964Zm10.679-5.107h.928c.77 0 1.393.624 1.393 1.393v8.357c0 .77-.624 1.393-1.393 1.393h-.928a1.393 1.393 0 0 1-1.393-1.393V3.25c0-.769.624-1.393 1.393-1.393Z" fill="#E0D7D7"/>
                </svg>
                <span className="text-[10px] text-gray-400 font-light ml-3">15 reads</span>    
            </div>
            <div className="flex items-center">
                <svg width={16} height={13} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m7.245 1.242.33.357.355-.356A4.32 4.32 0 0 1 11.657.058a4.243 4.243 0 0 1 3.545 4.186v.172c0 1.233-.511 2.411-1.414 3.252l-5.365 5.008a1.205 1.205 0 0 1-1.645 0L1.413 7.668A4.446 4.446 0 0 1 0 4.416v-.172C0 2.17 1.5.4 3.545.058a4.268 4.268 0 0 1 3.7 1.184Z" fill="#E0D7D7"/>
                </svg>
                <span className="text-[10px] text-gray-400 font-light ml-3">15 Likes</span>    
            </div>
            <div className="flex items-center">
                <svg width={15} height={13} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.908.082a.93.93 0 0 0-.551.847v1.857h-3.25A5.107 5.107 0 0 0 0 7.893a5.69 5.69 0 0 0 2.907 5.052c.073.04.154.055.235.055a.573.573 0 0 0 .572-.572c0-.217-.125-.418-.284-.565-.273-.259-.644-.766-.644-1.649A2.786 2.786 0 0 1 5.57 7.43h2.786v1.857c0 .365.214.7.551.847a.932.932 0 0 0 .998-.157l4.643-4.178a.934.934 0 0 0 .308-.69.924.924 0 0 0-.308-.691L9.906.239a.922.922 0 0 0-.998-.157Z" fill="#E0D7D7"/>
                </svg>
                <span className="text-[10px] text-gray-400 font-light ml-3">15 Likes</span>    
            </div>
        </div>
    </div>
}
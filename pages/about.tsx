import { SocialFollow } from "@/components/socialFollow";
import { hookVisit } from "@/util/slackHooks";
import { useEffect } from "react";

export default function About() {

    useEffect(() => {
        hookVisit("About");
    }, [])

    return <div className="container mx-auto px-4">
        <div className="xl:flex relative lg:pt-14 pt-16 lg:pb-16 pb-16 border-b border-b-[#14141423]">
            <div className="xl:w-1/3 relative">
                <h1 className="lg:text-[82px] md:text-6xl text-5xl lg:leading-[84px] font-bold xl:mb-0 mb-16">About</h1>
                <div className="absolute top-24 xl:block -left-52 hidden -z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="402" height="439" fill="none">
                        <path fill="#1F1F1F" d="M200.319 219.5H110.38C49.058 219.5 0 170.419 0 110.432 0 49.081 49.058 0 110.38 0h89.939v219.5h91.301c59.96 0 109.017 49.081 110.38 109.068C402 389.919 351.58 439 291.62 439h-91.301V219.5Z" />
                        <path fill="#1F1F1F" d="M241.2 42.264h54.508c36.794 0 66.773 29.994 66.773 68.168 0 36.81-29.979 66.804-66.773 66.804H241.2V42.264Z" />
                    </svg>
                </div>
            </div>
            <div className="xl:w-2/3 relative">
                <article className="lg:py-14 py-10">
                    <div className="relative font-light xl:max-w-4xl">
                        {/* <Image priority={true} className="z-50 w-full rounded-lg" title="Beno developer image" alt="hassan BENADARODOR"  src={image} /> */}
                        {/* <Link title="title" href="#"> */}
                        <h2 className="lg:text-5xl text-3xl font-bold mt-10 mb-3 text-jet-black">Hassan BENADARODOR</h2>
                        <h3 className="text-jet-black font-medium mb-10">Software developer at Doctori</h3>
                        {/* </Link> */}
                        <div className="mb-4">
                            <p className="text-base mb-3">
                                Hello there! I&lsquo;m glad you found your way to my digital oasis, a place where I share my personal
                                journey of building amazing products, improving my coding skills and staying abreast of
                                the ever-evolving tech industry.
                            </p>
                            <p className="text-base mb-3">
                                My name is <strong>BenAdardor Hassan</strong>, which is <i>&ldquo;difficult to pronounce 😅,&ldquo;</i> but you can
                                call me <strong>Ben</strong> for short 🤗.
                            </p>
                            <p className="text-base mb-3">
                                I am a self-taught developer who loves technology and learning new things.
                                I started coding in 2015 with PHP and Laravel, and since then I have expanded
                                my knowledge and experience to other tools and technologies.
                            </p>
                            <p className="text-base mb-3">
                                However, since 2018, I have shifted my focus to Java Spring Boot and ReactJS/nextjs.
                                I enjoy creating intuitive web applications that solve real-world problems and provide value to users.
                                While I&lsquo;m not coding, I enjoy cooking and am a cat lover 🐱; I have a cat named Sakura 🐈.
                                She is very cute 😍 and playful 😻.
                            </p>
                            <p className="text-base mb-3">
                                On this website, you will find my notes and tutorials on various topics related to web development. These are meant to help me remember what I learned and also to share my valuable insights with others who might be interested. I hope you find them useful and interesting.
                            </p>
                            <SocialFollow />
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
}

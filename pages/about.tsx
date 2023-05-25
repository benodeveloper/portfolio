import Image from "next/image";
import me from "@/assets/hassan-benadardor.png"
import { SocialFollow } from "@/components/socialFollow";

// const About = (): JSX.Element => {
//     return <div className="grid grid-cols-8 grid-rows-34x4 mt-11 dark:text-neutral-200 text-neutral-900">
//         <div className="row-span-4 col-span-1 md:col-span-2">
//             <Image title="Beno developer image" className="md:translate-y-3 md:max-w-[150px] max-w-[50px] translate-y-2" src={me} alt="hassan BENADARODOR" />
//         </div>
//         <div className="ml-4 col-span-7 md:col-span-6 md:row-span-1 md:flex">
//             <h1 className="text-2xl font-bold">Hassan BENADARDOR</h1>
//             <span className="text-ms md:ml-3 text-indigo-500 dark:text-blue-400/80">
//                 <a href="https://twitter.com/beno_developer" title="twitter" rel="noreferrer noopener nofollow" target="_blank">@beno_developer</a>
//             </span>
//         </div>
//         <h2 className="md:ml-4 mt-3 md:mt-0 text-lg md:col-span-6 col-span-8 md:row-span-1">
//             Full stack developer at <span className="text-indigo-500 dark:text-blue-400/80">
//                 <a href="https://doctori.ma" title="doctori" rel="noreferrer noopener nofollow" target="_blank">Doctori</a>
//             </span>.
//         </h2>

//         <div className="md:ml-4 md:mt-7 my-2 col-span-8 md:col-start-3 md:col-span-6 md:row-span-2">
//             <p className="text-base mb-3">
//                 Hello there! I&lsquo;m glad you found your way to my digital oasis, a place where I share my personal
//                 journey of building amazing products, improving my coding skills and staying abreast of
//                 the ever-evolving tech industry.
//             </p>
//             <p className="text-base mb-3">
//                 My name is <strong>BenAdardor Hassan</strong>, which is <i>&ldquo;difficult to pronounce 😅,&ldquo;</i> but you can
//                 call me <strong>Ben</strong> for short 🤗.
//             </p>
//             <p className="text-base mb-3">
//                 I am a self-taught developer who loves technology and learning new things.
//                 I started coding in 2017 with PHP and Laravel, and since then I have expanded
//                 my knowledge and experience to other tools and technologies.
//             </p>
//             <p className="text-base mb-3">
//                 However, since 2019, I have shifted my focus to Java Spring Boot and ReactJS/nextjs.
//                 I enjoy creating intuitive web applications that solve real-world problems and provide value to users.
//                 While I&lsquo;m not coding, I enjoy cooking and am a cat lover 🐱; I have a cat named Sakura 🐈.
//                 She is very cute 😍 and playful 😻.
//             </p>
//             <p className="text-base mb-3">
//                 On this website, you will find my notes and tutorials on various topics related to web development. These are meant to help me remember what I learned and also to share my valuable insights with others who might be interested. I hope you find them useful and interesting.
//             </p>
//             <SocialFollow />
//         </div>
//     </div>
// }

// export default About;

export default function About() {
    return <>
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
                    <div className="relative font-light xl:max-w-2xl">
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
                                I started coding in 2017 with PHP and Laravel, and since then I have expanded
                                my knowledge and experience to other tools and technologies.
                            </p>
                            <p className="text-base mb-3">
                                However, since 2019, I have shifted my focus to Java Spring Boot and ReactJS/nextjs.
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
    </>
}

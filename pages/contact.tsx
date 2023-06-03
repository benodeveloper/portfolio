import { SocialFollow } from "@/components/socialFollow";
import { hookVisit } from "@/util/slackHooks";
import { GetStaticProps } from "next";

export default function Contact() {


    return <div className="container mx-auto px-4">
        <div className="xl:flex relative lg:pt-14 pt-16 lg:pb-16 pb-16">
            <div className="xl:w-1/3 relative">
                <h1 className="lg:text-[82px] md:text-6xl text-5xl lg:leading-[84px] font-bold xl:mb-0 mb-16">Contact</h1>
                <div className="absolute top-24 xl:block -left-52 hidden -z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="402" height="439" fill="none">
                        <path fill="#1F1F1F" d="M200.319 219.5H110.38C49.058 219.5 0 170.419 0 110.432 0 49.081 49.058 0 110.38 0h89.939v219.5h91.301c59.96 0 109.017 49.081 110.38 109.068C402 389.919 351.58 439 291.62 439h-91.301V219.5Z" />
                        <path fill="#1F1F1F" d="M241.2 42.264h54.508c36.794 0 66.773 29.994 66.773 68.168 0 36.81-29.979 66.804-66.773 66.804H241.2V42.264Z" />
                    </svg>
                </div>
            </div>
            <div className="xl:w-2/3 relative">
                <article className="xl:py-44 py-10">
                    <div className="relative font-light">
                        <h2 className="lg:text-2xl text-3xl font-semibold mt-10 mb-3 text-jet-black">I don’t mind hearing from you. Whether you want to ask something or just say hello, I’ll try my best to respond! You can reach me on 👇</h2>
                        <div className="mb-4">
                            <SocialFollow />
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
}

export const getStaticProps: GetStaticProps = async () => {
    hookVisit("Contact");
    return {
        props: {},
    };
};
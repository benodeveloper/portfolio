import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import Image from "next/image";

export default function AboutSection() {
    return <section className="bg-white dark:bg-slate-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About me</h2>
            <p className="mb-4">
                My name is BenAdardor Hassan <br/>
                "hard to pronounce 😅", You can call me Listoun.
            </p>
            <p>
                Web Developer at Doctori based in Agadir, Morocco.
            </p>
            <p>
                I have been working as a developer for around three years with tech stack that includes @laravelphp,
                @JavaScript, @getbootstrap and one year with @reactjs.
            </p>
            <p className="mb-4">
                Multi-talented human, graduate of IT development. I have a background in tech support.
            </p>
            <p>
                I'm a self-motivated person who is always willing to learn new things and I'm always looking for new
                challenges to solve.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <Image className="w-full rounded-lg" 
            // width="312" height="433"
                src={image1}
                alt="office content 1"/>
            <Image className="mt-4 w-full lg:mt-10 rounded-lg" 
            // width="312" height="433"
                src={image2}
                alt="office content 2"/>
        </div>
    </div>
</section>
}
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import Image from "next/image";

export default function AboutSection() {
    return <section className="bg-white dark:bg-slate-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About me</h2>
                <p className="mb-4">
                    My name is El-hassan Benadardor, I am a Full-Stack Web Developer from Agadir, Morocco.
                    I am a self-taught developer with a passion for technology and an insatiable appetite for learning.
                    While I used to work with PHP a lot, these days I am focusing on Java and ReactJS.
                </p>
                <p className="mb-4">
                    I have experience with various tools and technologies, such as CSS preprocessors like SASS/SCSS,
                    task runners like Gulp, and visualization packages like Highcharts and D3.js.
                </p>
                <p className="mb-4">
                    I am also familiar with version control and configuration management tools like Git and GitHub,
                    and I have experience with CI/CD tools like Jenkins, Docker, and Kubernetes for regular deployment.
                </p>
                <p className="mb-4">
                    In my free time, I enjoy working on user flows, wireframes, and mock templates using software like Photoshop,
                    Illustrator, and XD.
                </p>
                <p className="mb-4">
                    If you're interested in working with me or just want to chat,
                    feel free to reach out to me.
                </p>
                <p className="mb-4">
                    Also, I really love the color blue!
                </p>
            </div>
            {/* <div className="grid grid-cols-2 gap-4 mt-8">
                <Image className="w-full rounded-lg"
                    // width="312" height="433"
                    src={image1}
                    alt="office content 1" />
                <Image className="mt-4 w-full lg:mt-10 rounded-lg"
                    // width="312" height="433"
                    src={image2}
                    alt="office content 2" />
            </div> */}
        </div>
    </section>
}
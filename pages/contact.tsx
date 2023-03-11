import { SocialFollow } from "@/components/socialFollow";

const Contact = () => {
    return <div className="h-max mt-60">
        <div>
            <h1 className="text-5xl mb-7 font-bold dark:text-neutral-100 text-neutral-900">Contact me</h1>
            <h2 className="dark:text-neutral-400 text-lg text-neutral-600">I don’t mind hearing from you. Whether you want to ask something or just say hello, I’ll try my best to respond! You can reach me on 👇</h2>
            <SocialFollow />
        </div>
    </div>
}

export default Contact;

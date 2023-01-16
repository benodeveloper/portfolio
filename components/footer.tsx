import Link from "next/link";
import SocialMedia from "./socialMedia";

export default function Footer() {
    return <footer className="footer footer-center p-10 dark:bg-slate-900 text-base-content rounded">
        <div className="grid grid-flow-col gap-4">
            <Link href="/about" className="link link-hover">About me</Link>
            <Link href="/blog" className="link link-hover">Blog</Link>
            <Link href="/contact" className="link link-hover">Contact</Link>
        </div>
        <div>
            <SocialMedia />
        </div>
        <div>
            <p>Copyright © 2023 - All right reserved by benodev.io</p>
        </div>
    </footer>
}
import { FormEvent, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
type ContactData = {
    email: string,
    subject: string,
    message: string,

}
export const ContactForm = () => {

    const recaptcha = useRef<ReCAPTCHA>(null);
    const [data, setData] = useState<ContactData>({
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit =async (event:FormEvent) => {
        event.preventDefault();
        
        const captchaValue = recaptcha?.current?.getValue();

        
        if(captchaValue) {
            console.log(data);
        const res = await fetch(`/api/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data })
        })
        } else {
            alert("Please verify the reCAPTCHA!");
        }
       
    

    }
    const handleChange = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        console.log(target.value, target.name);
        
        setData({...data,[target.name]: target.value});
    }

    return <form action="#" className="pt-8" onSubmit={handleSubmit} onChange={handleChange}>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 pb-1">Email</label>
                <input type="email" name="email" className="shadow-sm bg-[#fcfcfc] border border-gray-200 text-gray-900 text-sm rounded-[3px] block w-full p-2.5" placeholder="your@email.com"/>
            </div>
            <div className="mb-5">
                <label htmlFor="subject" className="block mb-2 text-sm text-gray-600 pb-1">Subject</label>
                <input type="text" name="subject" className="shadow-sm bg-[#fcfcfc] border border-gray-200 text-gray-900 text-sm rounded-[3px] block w-full p-2.5" placeholder="New project, New ideas,..."/>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm text-gray-600 pb-1">Your message</label>
                <textarea name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-[#fcfcfc] rounded-[3px] shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            
            <ReCAPTCHA ref={recaptcha} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''} />

            <button type="submit" className="mt-5 py-3 px-5 text-sm font-medium text-center text-white rounded-[3px] bg-jet-black hover:bg-[#2165f4]">Send message</button>
        </form>
}
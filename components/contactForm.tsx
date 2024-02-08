import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';
import * as Yup from 'yup';
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
});

export const ContactForm = () => {

    const recaptcha = useRef<ReCAPTCHA>(null);
    const [isOnSubmit, setOnSubmit] = useState(false); // State to track submission status

    const handleSubmit = async (values: any,{ resetForm }: { resetForm: () => void }) => {
        setOnSubmit(true); // Start submission, set loading state

        const captchaValue = recaptcha?.current?.getValue();

        if (captchaValue) {
            console.log("values: ", values);
            const res = await fetch(`/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ values })
            })

            setOnSubmit(false) // Submission finished, set loading state to false
            resetForm(); // Reset the form
            recaptcha?.current?.reset(); // Reset the reCAPTCHA
            toast.success('Thank you for your message!', {
                hideProgressBar: true,
                position:  "top-right",
                autoClose: 3000, // Close after 3 seconds
            });

        } else {
            
            setOnSubmit(false) // Submission failed, set loading state to false
            toast.error('Please verify the reCAPTCHA!', {
                hideProgressBar: true,
                position:  "top-right",
                autoClose: 3000, // Close after 3 seconds
            });
        }
    }

    return <Formik
        initialValues={{
            email: '',
            subject: '',
            message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => handleSubmit(values, { resetForm })}
    >
        {() => (

            <Form className="mt-10">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 pb-1">Email</label>
                    <Field name="email">
                        {({ field, form: { touched, errors }, meta }: FieldProps) => (
                        <div>
                            <input
                            {...field}
                            type="email"
                            name="email"
                            className={`shadow-sm bg-[#fcfcfc] border border-gray-200 text-gray-900 text-sm rounded-[3px] block w-full p-2.5 ${
                                meta.error ? 'border-red-500' : ''
                            }`}
                            placeholder="your@email.com"
                            />
                            {meta.touched && meta.error && (
                            <span className="rounded-lg px-2 py-2 text-xs text-red-500">{meta.error}</span>
                            )}
                        </div>
                        )}
                    </Field>
                </div>

                <div className="mb-5">
                    <label htmlFor="subject" className="block mb-2 text-sm text-gray-600 pb-1">Subject</label>
                    <Field name="subject">
                        {({ field, form: { touched, errors }, meta }: FieldProps) => (
                        <div>
                            <input
                            {...field}
                            type="text"
                            name="subject"
                            className={`shadow-sm bg-[#fcfcfc] border border-gray-200 text-gray-900 text-sm rounded-[3px] block w-full p-2.5 ${
                                meta.error ? 'border-red-500' : ''
                            }`}
                            placeholder="New project, New ideas,..."
                            />
                            {meta.touched && meta.error && (
                            <span className="rounded-lg px-2 py-2 text-xs text-red-500">{meta.error}</span>
                            )}
                        </div>
                        )}
                    </Field>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm text-gray-600 pb-1">Your message</label>
                    <Field name="message">
                        {({ field, form: { touched, errors }, meta }: FieldProps) => (
                        <div>
                            <textarea
                            {...field}
                            name="message"
                            rows={6}
                            className={`block p-2.5 w-full text-sm text-gray-900 bg-[#fcfcfc] rounded-[3px] shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 ${
                                meta.error ? 'border-red-500' : ''
                            }`}
                            placeholder="Leave a comment..."
                            ></textarea>
                            {meta.touched && meta.error && (
                            <span className="rounded-lg px-2 py-2 text-xs text-red-500">{meta.error}</span>
                            )}
                        </div>
                        )}
                    </Field>
                </div>
                <ReCAPTCHA ref={recaptcha} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''} />

                {/* <button type="submit" disabled={isSubmitting} className="mt-5 py-3 px-5 text-sm font-medium text-center text-white rounded-[3px] bg-jet-black hover:bg-[#2165f4]">Send message</button> */}
                <button type="submit" disabled={isOnSubmit} className="mt-5 py-3 px-5 text-sm font-medium text-center text-white rounded-[3px] bg-jet-black hover:bg-[#2165f4]">
                        {isOnSubmit ? (
                            <div className="flex justify-center items-center">
                                <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.002 8.002 0 0112 4.472v3.1a4.002 4.002 0 00-3.448 6.186L6 17.29zm10.448-6.186A4.002 4.002 0 0016 7.572v-3.1a8.002 8.002 0 016 7.819l-2.552 1.403z"></path>
                                </svg>
                                <span>Sending...</span>
                            </div>
                        ) : (
                            <span>Send message</span>
                        )}
                    </button>
                    <ToastContainer />
            </Form>
        )}
    </Formik>
}
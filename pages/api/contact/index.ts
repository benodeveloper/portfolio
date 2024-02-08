import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { email, subject, message } = req.body.values;

            // create reusable transporter object using the default SMTP transport
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'listoun.developer@gmail.com', // your gmail account
                    pass: 'xecmdqfmebdoelox' // your gmail password//xecmdqfmebdoelox
                }
            });

            // Format email content
            const htmlMessage = `
            <p>Hello,</p>
            <p>You have received a new contact email from ${email}.</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <p>Regards,<br/> benodeveloper.com</p>
        `;

            // send mail with defined transport object
            const info = await transporter.sendMail({
                from: 'listoun.developer@gmail.com', // sender address
                to: 'listoun.developer@gmail.com', // list of receivers
                subject: `You have received a new contact email in benodeveloper.com`, // Subject line
                html: htmlMessage, // plain text body
            });

            console.log("Message sent: %s", info.messageId);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Failed to send email" });
        }
    } else {
        res.status(405).json({ success: false, message: "Method Not Allowed" });
    }
}

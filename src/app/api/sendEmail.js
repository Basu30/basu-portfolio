import nodemailer from 'nodemailer';

export async function SendEmail (req, res){
    if(req.method === 'POST'){
        const {name, email, message} = req.body;
    
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject:  `Contact form submission from ${name}`,
            text: message
        };
    
        try{
            await transporter.sendMail(mailOptions);
            return res.status(200).json({message: 'Message sent successfully.'});
        } catch(error){
            return res.status(500).json({message: 'Failed to send message.'});
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} not allowed`);
    }

}
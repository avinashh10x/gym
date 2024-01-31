const nodemailer = require('nodemailer');
const emailBody = require('../email/emailbody');

const sendMail = async (req, res) => {
    const { email, name } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'raavaannn@gmail.com',
            pass: 'naor ipxi ztyb zosn',
        },
    });

    const customizedEmailBody = `<p>Dear ${name},</p>
    ${emailBody}`;

    async function main() {
        try {
            const info = await transporter.sendMail({
                from: 'flex gym',
                to: email,
                subject: "Thank You for Visiting Flex Gym",
                html: customizedEmailBody,
            });
            console.log("Message sent: %s", info.messageId);
            res.status(200).json({
                message: 'Email sent successfully',
            });
        } catch (error) {
            console.error("Error occurred while sending email:", error);
            res.status(500).json({
                error: 'Internal server error',
            });
        }
    }

    main().catch(console.error);
}

module.exports = sendMail;

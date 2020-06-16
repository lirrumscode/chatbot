const nodemailer = require('nodemailer');
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'linacastrodev@gmail.com', // Cambialo por tu email
 pass: '@Poster89' // Cambialo por tu password
 }
 });
const mailOptions = {
 from: `"${formulario.name}" <${formulario.email}>`,
 to: 'linacastrodev@gmail.com', // Cambia esta parte por el destinatario
 subject: formulario.asunto,
 html: `
 <strong>Nombre:</strong> ${formulario.name} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensaje:</strong> ${formulario.message}
 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}
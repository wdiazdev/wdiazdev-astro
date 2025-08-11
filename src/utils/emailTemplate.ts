export function getEmailTemplate(
  senderEmail: string,
  subject: string,
  message: string,
) {
  return `
<div style="font-family: Arial, sans-serif; padding: 16px; background-color: #f9f9f9;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px;">
    <h2 style="color: #4caf50; margin-top: 0;">New Message from Your Portfolio</h2>
    <p><strong>From:</strong> ${senderEmail}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-line;">${message}</p>
  </div>
</div>
`
}

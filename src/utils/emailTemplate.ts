export function emailTemplate(
  senderEmail: string,
  subject: string,
  message: string,
) {
  return `
<div style="margin:0;padding:0;background:#0b0f19;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#0b0f19;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;background:#111317;border:1px solid rgba(255,255,255,0.10);border-radius:12px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,0.08);">
              <h2 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:20px;line-height:1.3;color:#e5e7eb;">
                New message from your portfolio
              </h2>
            </td>
          </tr>

          <!-- Meta -->
          <tr>
            <td style="padding:16px 24px 0 24px;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:#9ca3af;margin-bottom:8px;">
                <span style="color:#e5e7eb;font-weight:600;">From:</span>
                <span> ${senderEmail}</span>
              </div>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:#9ca3af;margin-bottom:12px;">
                <span style="color:#e5e7eb;font-weight:600;">Subject:</span>
                <span> ${subject}</span>
              </div>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 24px;">
              <div style="height:1px;background:rgba(255,255,255,0.08);"></div>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:16px 24px 20px 24px;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.7;color:#e5e7eb;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:14px 16px;white-space:pre-wrap;">
                ${message}
              </div>
            </td>
          </tr>

          <!-- Footer/Accent -->
          <tr>
            <td style="padding:16px 24px 20px 24px;">
              <div style="display:inline-block;background:#84cc16;color:#0b0f19;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:.02em;padding:6px 10px;border-radius:8px;">
                Portfolio Contact
              </div>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#9ca3af;margin-top:10px;">
                You can reply directly to this email to continue the conversation.
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>`
}

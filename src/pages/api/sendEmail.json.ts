import type { APIRoute } from "astro"
import { Resend } from "resend"
import { env } from "../../../env.server"

const resend = new Resend(env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400 },
      )
    }

    const html = `
      <h2>New message from your site</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p>${String(message).replace(/\n/g, "<br/>")}</p>
    `

    const text = [
      "New message from your site",
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      String(message),
    ].join("\n")

    const { data, error } = await resend.emails.send({
      from: "test@wdiazdev.com",
      to: ["wdiazdev@gmail.com"],
      subject,
      html,
      text,
      replyTo: email,
    })

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      })
    }
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    })
  } catch (err) {
    console.error("sendEmail error:", err)
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    })
  }
}

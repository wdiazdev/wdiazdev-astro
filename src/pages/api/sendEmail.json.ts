export const prerender = true

import type { APIRoute } from "astro"
import { Resend } from "resend"
import { env } from "../../../env.server"

const resend = new Resend(env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json()

    const { from, to, subject, html, text, replyTo } = body

    if (!from || !to || !subject || !html) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      )
    }

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      replyTo,
    })

    if (error) {
      return new Response(
        JSON.stringify({
          error: "Resend API Error",
          message: error.message,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    return new Response(JSON.stringify({ success: true, id: data?.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error handling request:", error)
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }
}

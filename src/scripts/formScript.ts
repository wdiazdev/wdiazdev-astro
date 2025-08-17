import { emailTemplate } from "../utils/emailTemplate"
import { showToast } from "../utils/showToast"

export const formScript = () => {
  const form = document.getElementById("contactForm") as HTMLFormElement
  const btn = document.getElementById("contactBtn")

  if (form && btn) {
    const setLoading = (on: boolean) => {
      btn.toggleAttribute("disabled", on)
      btn.setAttribute("data-loading", on ? "true" : "false")
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault()
      setLoading(true)
      try {
        const formData = new FormData(form)

        const message = String(formData.get("message") ?? "")
        const senderEmail = String(formData.get("user_email") ?? "")
        const subject = String(formData.get("subject") ?? "")

        const html = emailTemplate(senderEmail, subject, message)

        const payload = {
          to: "wdiazdev@gmail.com",
          from: "portfolio@wdiazdev.com",
          subject: String(formData.get("subject") ?? ""),
          html,
          text: String(formData.get("message") ?? ""),
          replyTo: String(formData.get("user_email") ?? ""),
        }

        const res = await fetch("/api/sendEmail.json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })

        const out = await res.json()
        if (!res.ok) throw new Error(out?.error || "Failed to send message")

        showToast("Message sent! I’ll get back to you soon.", "success")

        form.reset()
      } catch (error) {
        console.error("Error: ", error)
        showToast("Unable to send message. Please try again.", "error")
      } finally {
        setLoading(false)
      }
    })
  } else {
    console.warn("contactForm or contactBtn not found")
  }
}

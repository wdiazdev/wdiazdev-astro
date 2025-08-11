export const initContactForm = () => {
  const form = document.getElementById("contactForm") as HTMLFormElement | null
  const btn = document.getElementById("contactBtn") as HTMLButtonElement | null

  if (!form || !btn) return

  const setLoading = (on: boolean) => {
    btn.toggleAttribute("disabled", on)
    btn.setAttribute("data-loading", on ? "true" : "false")
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const fd = new FormData(form)
      const payload = {
        name: String(fd.get("from_name") ?? ""),
        email: String(fd.get("user_email") ?? ""),
        subject: String(fd.get("subject") ?? ""),
        message: String(fd.get("message") ?? ""),
      }

      const res = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const out = await res.json()
      if (!res.ok) throw new Error(out?.error || "Failed to send")

      alert("Message sent! I’ll get back to you soon.")
      form.reset()
    } catch (err) {
      console.error(err)
      alert("Unable to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  })
}

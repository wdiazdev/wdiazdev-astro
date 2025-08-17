import { showToast } from "../utils/showToast"

export const emailVerticalScript = () => {
  const el = document.querySelector("[data-email]")
  el?.addEventListener("click", async () => {
    const v = el.getAttribute("data-email") || ""
    try {
      await navigator.clipboard.writeText(v)
      showToast("Email copied to clipboard!", "success")
    } catch (err) {
      console.error("Copy failed:", err)
    }
  })
}

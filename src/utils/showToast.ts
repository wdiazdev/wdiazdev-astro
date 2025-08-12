import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

export const showToast = (text: string, type: "success" | "error") => {
  const isSuccess = type === "success"

  Toastify({
    text,
    duration: 4000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: isSuccess
        ? "linear-gradient(to right, #3b82f6, #84cc16)"
        : "linear-gradient(to right, #b91c1c, #ef4444)",
      color: "#fff",
      fontWeight: "500",
      borderRadius: "8px",
      padding: "10px 16px",
    },
  }).showToast()
}

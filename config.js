export const domainName =
  process.env.NODE_ENV === "production"
    ? "https://happybooking-backend.onrender.com"
    : "http://localhost:8000";
export { default } from "next-auth/middleware";

// Path: middleware.ts
export const config = {
  matcher: ["/donor/dashboard", "/reciever/dashboard"],
};

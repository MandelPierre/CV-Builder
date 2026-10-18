import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";
export const metadata: Metadata = { title:{ default:"Currículo Fácil", template:"%s | Currículo Fácil" }, description:"Crie, organize e apresente seus currículos profissionais." };
export default function RootLayout({ children }: Readonly<{ children:React.ReactNode }>) {
  return <html lang="pt-BR"><body className="flex min-h-screen flex-col"><Header/><main className="flex-1">{children}</main><Footer/><Toaster richColors position="top-right"/></body></html>;
}


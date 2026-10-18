import type { Metadata } from "next";
import { Suspense } from "react";
import { Toaster } from "sonner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";
export const metadata: Metadata = { title:{ default:"Currículo Fácil", template:"%s | Currículo Fácil" }, description:"Crie, organize e apresente seus currículos profissionais." };
export default function RootLayout({ children }: Readonly<{ children:React.ReactNode }>) {
  return <html lang="pt-BR"><body className="flex min-h-screen flex-col"><Suspense fallback={<div className="h-16 border-b border-slate-200 bg-white"/>}><Header/></Suspense><main className="flex-1">{children}</main><Footer/><Toaster richColors position="top-right"/></body></html>;
}


"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const links=[{href:"/",label:"Início"},{href:"/curriculos/visualizar",label:"Currículos"},{href:"/curriculos/cadastrar",label:"Cadastrar"}];
export function Nav({mobile=false}:{mobile?:boolean}){const pathname=usePathname();return <nav aria-label="Navegação principal" className={cn("flex items-center gap-1",mobile&&"flex-col items-stretch")}>{links.map(link=>{const active=link.href==="/"?pathname==="/":pathname.startsWith(link.href);return <Link key={link.href} href={link.href} className={cn("rounded-lg px-3 py-2 text-sm font-semibold",active?"bg-blue-50 text-blue-700":"text-slate-600 hover:bg-slate-50 hover:text-blue-700")} aria-current={active?"page":undefined}>{link.label}</Link>;})}</nav>;}


"use client";
import Link from "next/link";
import { FileUser,Menu,X } from "lucide-react";
import { useState } from "react";
import { Nav } from "./nav";
export function Header(){const[open,setOpen]=useState(false);return <header className="glass sticky top-0 z-50 border-b border-slate-200"><div className="page-container flex h-16 items-center justify-between"><Link href="/" className="flex items-center gap-2 font-extrabold text-blue-900" aria-label="Currículo Fácil - início"><span className="grid size-9 place-items-center rounded-xl bg-blue-600 text-white"><FileUser size={20}/></span>Currículo<span className="text-blue-600">Fácil</span></Link><div className="hidden md:block"><Nav/></div><button className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden" onClick={()=>setOpen(!open)} aria-label={open?"Fechar menu":"Abrir menu"} aria-expanded={open}>{open?<X/>:<Menu/>}</button></div>{open&&<div className="page-container border-t border-slate-100 py-3 md:hidden" onClick={()=>setOpen(false)}><Nav mobile/></div>}</header>;}


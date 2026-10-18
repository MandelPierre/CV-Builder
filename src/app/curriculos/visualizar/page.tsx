import type { Metadata } from "next";
import { ListaCurriculos } from "@/components/curriculos/lista-curriculos";
export const metadata:Metadata={title:"Currículos"};
export default function CurriculosPage(){return <div className="page-container py-12 sm:py-16"><div className="mb-10 text-center"><p className="font-bold uppercase tracking-widest text-blue-600">Talentos cadastrados</p><h1 className="mt-2 text-3xl font-black text-blue-950 sm:text-4xl">Encontre o perfil ideal</h1><p className="mx-auto mt-3 max-w-2xl text-slate-600">Consulte os currículos cadastrados ou use a busca para encontrar uma pessoa ou área profissional.</p></div><ListaCurriculos/></div>;}

import type { Metadata } from "next";
import { lazy,Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
const FormularioCurriculo=lazy(()=>import("@/components/form/formulario-curriculo").then(module=>({default:module.FormularioCurriculo})));
export const metadata:Metadata={title:"Cadastrar currículo"};
export default function CadastrarPage(){return <div className="page-container max-w-4xl py-12"><div className="mb-9"><p className="font-bold uppercase tracking-widest text-blue-600">Novo currículo</p><h1 className="mt-2 text-3xl font-black text-blue-950 sm:text-4xl">Conte sua trajetória</h1><p className="mt-3 max-w-2xl leading-7 text-slate-600">Preencha os campos abaixo. As informações ficam guardadas somente neste navegador para fins de demonstração.</p></div><Suspense fallback={<Skeleton className="h-[640px] w-full"/>}><FormularioCurriculo/></Suspense></div>;}

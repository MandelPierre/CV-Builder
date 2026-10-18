import Link from "next/link";
import { ArrowLeft,FileQuestion } from "lucide-react";
export default function NotFound(){return <div className="page-container py-24 text-center"><span className="mx-auto grid size-20 place-items-center rounded-3xl bg-blue-50 text-blue-600"><FileQuestion size={40}/></span><p className="mt-6 font-bold uppercase tracking-widest text-blue-600">Erro 404</p><h1 className="mt-2 text-4xl font-black text-blue-950">Esta página não foi encontrada</h1><p className="mx-auto mt-3 max-w-md text-slate-600">O endereço pode ter mudado ou não fazer parte do Currículo Fácil.</p><Link href="/" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"><ArrowLeft size={18}/> Voltar ao início</Link></div>;}


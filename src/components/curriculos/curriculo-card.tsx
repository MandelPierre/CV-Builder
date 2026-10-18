import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight,Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Curriculo } from "@/types/curriculo";
export function CurriculoCard({curriculo}:{curriculo:Curriculo}){return <Card className="group overflow-hidden hover:-translate-y-1 hover:shadow-xl"><div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-400"/><div className="p-6"><div className="flex items-center gap-4"><Image src={curriculo.foto} alt={`Foto de ${curriculo.nome}`} width={72} height={72} className="size-18 rounded-2xl object-cover"/><div className="min-w-0"><h2 className="truncate text-xl font-bold text-blue-950">{curriculo.nome}</h2><p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-blue-600"><Briefcase size={15}/>{curriculo.cargo}</p></div></div><p className="mt-5 line-clamp-3 min-h-[72px] leading-6 text-slate-600">{curriculo.resumo}</p><Link href={`/curriculos/visualizar/${curriculo.id}`} className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700 hover:gap-3">Ver currículo completo <ArrowUpRight size={18}/></Link></div></Card>;}


import type { Metadata } from "next";
import { DetalhesCurriculo } from "@/components/curriculos/detalhes-curriculo";
export const metadata:Metadata={title:"Detalhes do currículo"};
export default async function CurriculoDetalhePage({params}:{params:Promise<{id:string}>}){const{id}=await params;return <DetalhesCurriculo id={id}/>;}


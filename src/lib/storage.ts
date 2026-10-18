import { curriculosIniciais } from "@/data/curriculos";
import { Curriculo } from "@/types/curriculo";
const KEY="curriculo-facil-dados";
export function listarCurriculos():Curriculo[]{if(typeof window==="undefined")return curriculosIniciais;const value=localStorage.getItem(KEY);if(!value){localStorage.setItem(KEY,JSON.stringify(curriculosIniciais));return curriculosIniciais;}try{return JSON.parse(value) as Curriculo[];}catch{return curriculosIniciais;}}
export function salvarCurriculo(curriculo:Curriculo){const atuais=listarCurriculos();localStorage.setItem(KEY,JSON.stringify([...atuais,curriculo]));}
export function excluirCurriculo(id:string){localStorage.setItem(KEY,JSON.stringify(listarCurriculos().filter(item=>item.id!==id)));}


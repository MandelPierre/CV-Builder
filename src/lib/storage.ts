import { curriculosIniciais } from "@/data/curriculos";
import { Curriculo } from "@/types/curriculo";
const KEY="curriculo-facil-dados";
function armazenamento(){try{return window.localStorage;}catch{return null;}}
function dadosValidos(value:unknown):value is Curriculo[]{return Array.isArray(value)&&value.every(item=>item&&typeof item==="object"&&typeof item.id==="string"&&typeof item.nome==="string"&&Array.isArray(item.experiencias)&&Array.isArray(item.formacoes));}
export function listarCurriculos():Curriculo[]{if(typeof window==="undefined")return curriculosIniciais;const storage=armazenamento();if(!storage)return curriculosIniciais;try{const value=storage.getItem(KEY);if(!value){storage.setItem(KEY,JSON.stringify(curriculosIniciais));return curriculosIniciais;}const dados:unknown=JSON.parse(value);if(dadosValidos(dados))return dados;storage.setItem(KEY,JSON.stringify(curriculosIniciais));return curriculosIniciais;}catch{return curriculosIniciais;}}
export function salvarCurriculo(curriculo:Curriculo){const storage=armazenamento();if(!storage)throw new Error("O armazenamento local não está disponível.");storage.setItem(KEY,JSON.stringify([...listarCurriculos(),curriculo]));}
export function excluirCurriculo(id:string){const storage=armazenamento();if(!storage)throw new Error("O armazenamento local não está disponível.");storage.setItem(KEY,JSON.stringify(listarCurriculos().filter(item=>item.id!==id)));}


import { InputHTMLAttributes,TextareaHTMLAttributes } from "react";
type Base={label:string;erro?:string};
export function Campo({label,erro,id,...props}:Base&InputHTMLAttributes<HTMLInputElement>){return <div><label className="field-label" htmlFor={id}>{label}</label><input id={id} className="form-input" aria-invalid={!!erro} aria-describedby={erro?`${id}-erro`:undefined} {...props}/>{erro&&<p id={`${id}-erro`} className="field-error">{erro}</p>}</div>;}
export function AreaTexto({label,erro,id,...props}:Base&TextareaHTMLAttributes<HTMLTextAreaElement>){return <div><label className="field-label" htmlFor={id}>{label}</label><textarea id={id} className="form-input min-h-28 resize-y" aria-invalid={!!erro} aria-describedby={erro?`${id}-erro`:undefined} {...props}/>{erro&&<p id={`${id}-erro`} className="field-error">{erro}</p>}</div>;}


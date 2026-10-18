import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
type Props=ButtonHTMLAttributes<HTMLButtonElement>&{variant?:"primary"|"outline"|"ghost"|"danger"};
export function Button({className,variant="primary",...props}:Props){
  const styles={primary:"bg-blue-600 text-white hover:bg-blue-700 shadow-sm",outline:"border border-blue-200 bg-white text-blue-700 hover:bg-blue-50",ghost:"text-slate-600 hover:bg-slate-100",danger:"bg-red-50 text-red-700 hover:bg-red-100"};
  return <button className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2 font-semibold disabled:cursor-not-allowed disabled:opacity-50",styles[variant],className)} {...props}/>;
}


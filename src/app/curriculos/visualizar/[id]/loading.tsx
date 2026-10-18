import { Skeleton } from "@/components/ui/skeleton";
export default function Loading(){return <div className="page-container py-12"><Skeleton className="h-6 w-44"/><div className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr]"><Skeleton className="h-96"/><Skeleton className="h-[520px]"/></div></div>;}

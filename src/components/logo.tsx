import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return <div className={cn("font-(family-name:--font-museo) text-white text-3xl relative w-24 h-24 from-blue-600 to-indigo-700  bg-linear-to-br  flex items-center justify-center", className)}>
    <span className="tracking-tighter">
      bend
    </span>
  </div>
}

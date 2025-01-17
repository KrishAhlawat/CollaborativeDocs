import { Loader2Icon } from "lucide-react";

interface FullScreenLoaderProps {
  label?: string;
}

export const FullScreenLoader = ({ label }: FullScreenLoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-2">
      <Loader2Icon className="size-10 text-muted-foreground animate-spin" />
      {label && <p className="text-md text-muted-foreground">{label}</p>}
    </div>
  );
};

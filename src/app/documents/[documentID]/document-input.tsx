import { useRef, useState } from "react";
import { toast } from "sonner";
import { BsCloudCheck, BsCloudSlash } from "react-icons/bs";
import { useMutation } from "convex/react";
import { useDebounce } from "@/hooks/use-debounce";
import { useStatus } from "@liveblocks/react";

import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { Loader2Icon } from "lucide-react";

interface DocumentInputProps {
  title: string;
  id: Id<"documents">;
}

export const DocumentInput = ({ title, id }: DocumentInputProps) => {
  const status = useStatus();

  const [value, setValue] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const mutate = useMutation(api.documents.updateById);

  const debouncedUpdate = useDebounce((newValue: string) => {
    if (newValue === title) return;

    setIsPending(true);
    mutate({ id, title: newValue })
      .then(() => toast.success("Document updated"))
      .catch(() => toast.error("Something went wrong!"))
      .finally(() => setIsPending(false));
  });

  const onChange = (e: React.ChangeEvent) => {
    const newValue = (e.target as HTMLInputElement).value;
    setValue(newValue);
    debouncedUpdate(newValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsPending(true);
    mutate({ id, title: value })
      .then(() => {
        toast.success("Document updated");
        setIsEditing(false);
      })
      .catch(() => toast.error("Something went wrong!"))
      .finally(() => setIsPending(false));
  };

  const showLoader =
    isPending || status === "connecting" || status === "reconnecting";
  const showError = status === "disconnected";

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="relative w-fit max-w-[50ch]">
          <span className="whitespace-pre text-lg invisible px-1.5">
            {value || " "}
          </span>
          <input
            className="absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate"
            onChange={onChange}
            value={value}
            onBlur={() => setIsEditing(false)}
            ref={inputRef}
          />
        </form>
      ) : (
        <span
          onClick={() => {
            setIsEditing(true);
            setTimeout(() => {
              inputRef.current?.focus();
            }, 0);
          }}
          className="text-lg px-1.5 cursor-pointer truncate"
        >
          {title}
        </span>
      )}
      {showError && <BsCloudSlash className="size-4" />}
      {!showError && !showLoader && <BsCloudCheck className="size-4" />}
      {showLoader && <Loader2Icon className="size-4 animate-spin" />}
    </div>
  );
};

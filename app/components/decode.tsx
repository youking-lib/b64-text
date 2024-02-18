import { Button } from "@/components/ui/button";
import { CopyIcon, ResetIcon } from "@radix-ui/react-icons";

export function Decode() {
  return (
    <div className="w-full space-x-2">
      <Button variant="secondary">whistleyz@163.com</Button>

      <Button>
        <CopyIcon />
      </Button>

      <Button variant="ghost">
        <ResetIcon />
      </Button>
    </div>
  );
}

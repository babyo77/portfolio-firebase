import { lineSpinner, zoomies } from "ldrs";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

zoomies.register();
lineSpinner.register();

const Loader: React.FC = () => {
  return (
    <l-line-spinner
      size="20"
      stroke="1"
      speed="1"
      color="gray"
    ></l-line-spinner>
  );
};

const Loader2: React.FC = () => {
  return (
    <l-zoomies
      size="80"
      stroke="4"
      bg-opacity="0.1"
      speed="1.4"
      color="gray"
    ></l-zoomies>
  );
};

const ButtonLoading: React.FC = () => {
  return (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
};

export { Loader, Loader2, ButtonLoading };

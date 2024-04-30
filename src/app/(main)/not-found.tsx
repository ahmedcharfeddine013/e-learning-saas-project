import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 ">
        <h1 className="text-3xl">Not found – 404!</h1>
        <div>
          <Button asChild>
            <Link href="/" className="flex gap-2">
              <ArrowLeft />
              Go back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

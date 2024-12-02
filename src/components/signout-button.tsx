"use client";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signOutAction } from "@/lib/actions";
import { useRouter, usePathname } from "next/navigation";

interface SignoutButtonProps {
  className?: string;
  onClick?: () => void;
}

const SignoutButton: React.FC<SignoutButtonProps> = ({
  className,
  onClick,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = async () => {
    await signOutAction();

    if (onClick && typeof onClick === "function") {
      onClick();
    }
    router.push(pathname);
    router.refresh();
  };

  return (
    <Button
      ghost
      onClick={handleSignOut}
      className={cn("px-4 py-2", className)}
      iconClassName="hidden"
    >
      <span>Sign Out</span>
    </Button>
  );
};

export default SignoutButton;

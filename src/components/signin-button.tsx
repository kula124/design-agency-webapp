"use client";

import { useRouter, usePathname } from "next/navigation";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SigninButtonProps {
  loginPage?: string;
  excludedPaths?: string[];
  className?: string;
  onClick?: () => void;
}

const SigninButton: React.FC<SigninButtonProps> = ({
  excludedPaths = ["/login"],
  className,
  onClick,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogin = () => {
    if (excludedPaths.includes(pathname)) {
      router.push("/login");
    } else {
      const redirectTo = encodeURIComponent(pathname);
      const currentUrl = new URL(window.location.href);
      const searchParams = currentUrl.searchParams.toString();
      const queryString = searchParams ? `&${searchParams}` : "";
      router.push(`/login?redirectTo=${redirectTo}${queryString}`);
    }
    if (onClick && typeof onClick === "function") onClick();
  };

  return (
    <Button
      ghost
      onClick={handleLogin}
      className={cn("px-4 py-2", className)}
      iconClassName="hidden"
    >
      <span>Sign In</span>
    </Button>
  );
};

export default SigninButton;

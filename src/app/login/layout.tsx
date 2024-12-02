import { getSession } from "@/auth";
import { redirect } from "next/navigation";

import { ReactNode } from "react";

export default async function LoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getSession();

  if (session?.user) {
    redirect("/");
  }
  return <>{children}</>;
}

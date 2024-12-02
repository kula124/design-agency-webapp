import { getSession } from "@/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  const session = await getSession();

  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <h1 className="text-6xl font-extrabold tracking-tight">
        Dashboard of{" "}
        <span className="text-brand-primary">{session?.user.name}</span>
      </h1>
    </main>
  );
}

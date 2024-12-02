import type { Metadata } from "next";
import LoginForm from "./_components/login-form";

export const metadata: Metadata = {
  title: "Login",
};

export default async function LoginPage() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center py-14 px-4 md:px-0">
      <LoginForm />
    </main>
  );
}

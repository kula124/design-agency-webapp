"use client";

import { AtSign, KeyIcon, AlertCircle } from "lucide-react";
import Button from "@/components/ui/button";
import { signInAction } from "@/lib/actions";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schema/login";

function SubmitButton({ isSubmitting }: { isSubmitting?: boolean }) {
  return (
    <Button
      secondary
      className="mt-10 min-w-full justify-center"
      disabled={isSubmitting}
      type="submit"
    >
      {isSubmitting ? "Signing in ..." : "Sign in"}
    </Button>
  );
}

export default function LoginForm() {
  const form = useForm<LoginSchema>({
    defaultValues: { email: "", password: "" },
  });

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors, isSubmitting },
  } = form;

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");
  const otherParams = new URLSearchParams(searchParams.toString());
  otherParams.delete("redirectTo");
  const router = useRouter();

  const submit = async (formData: LoginSchema) => {
    clearErrors();

    const data = await signInAction(formData);

    if (data.success) {
      router.push(
        redirectTo
          ? `${decodeURIComponent(redirectTo)}?${otherParams.toString()}`
          : "/"
      );
      router.refresh();
    } else {
      setError("root", { message: data.error });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white shadow-md rounded-sm px-8 py-10"
      >
        <h1 className="text-2xl font-bold text-brand-text-strong mb-6">
          Sign in to your account
        </h1>
        <div className="space-y-4">
          <div>
            <label
              className="block text-brand-text-weak text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded-sm w-full py-2 px-3 pl-10 text-brand-text-strong leading-tight focus:outline-none focus:ring-2 focus:ring-brand-primary"
                type="email"
                placeholder="Enter your email address"
                {...register("email", { required: true })}
              />
              <AtSign className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-text-weak" />
            </div>
          </div>
          <div>
            <label
              className="block text-brand-text-weak text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded-sm w-full py-2 px-3 pl-10 text-brand-text-strong leading-tight focus:outline-none focus:ring-2 focus:ring-brand-primary"
                type="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              <KeyIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-text-weak" />
            </div>
          </div>
        </div>
        <SubmitButton isSubmitting={isSubmitting} />
        <div className="mt-4 flex items-center space-x-2">
          {errors.root?.message && (
            <>
              <AlertCircle className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errors.root.message}</p>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

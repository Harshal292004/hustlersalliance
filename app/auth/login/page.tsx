import { LoginForm } from "@/components/auth/Login-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 bg-[#E9E5D8] dark:bg-[#292929]">
      <div className="w-full max-w-sm sm:max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}

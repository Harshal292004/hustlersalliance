import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./Logout-button";
import { libre_baskerville } from "@/lib/fonts";
export async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <button  className={` inline-flex items-center justify-center gap-2 whitespace-nowrap  text-sm font-medium transition-colors  rounded-[10px]  w-7 h-5  ${libre_baskerville.className}`}>
        <Link href="/auth/login">Login</Link>
      </button>
      <button className={` inline-flex items-center justify-center gap-2 whitespace-nowrap  text-sm font-medium transition-colors  rounded-[10px] w-7 h-5 ${libre_baskerville.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8]`}>
        <Link href="/auth/sign-up">Signup</Link>
      </button>
    </div>
  );
}

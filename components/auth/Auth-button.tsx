import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./Logout-button";

import { Button } from "../ui/Button";
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
      <Button asChild>
       <Link href={"/auth/login"}>Login</Link>
      </Button>
      <Button>
        <Link href="/auth/sign-up">Signup</Link>
      </Button>
    </div>
  );
}

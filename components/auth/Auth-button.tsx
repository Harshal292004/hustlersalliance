import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { LogoutButton } from "./Logout-button";
import { Button } from "../ui/Button";

export async function AuthButton() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Hey, {user.email}!</span>
        <LogoutButton />
      </div>
    );
  }

  return (
    <>
      <Button className="mr-2 ml-2">
        <Link href="/auth/login">Login</Link>
      </Button>
      <Button >
        <Link href="/auth/sign-up">Signup</Link>
      </Button>
    </>
  );
}

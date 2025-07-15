import { useEffect, useState } from "react";
import { createClient } from "../supabase/client";
import type { User as SupabaseAuthUser, AuthError, Session } from "@supabase/supabase-js";
import type { PostgrestError } from "@supabase/supabase-js";
import { CombinedUser } from "../types";

export function useSupabaseUser() {
  const supabase = createClient();

  const [user, setUser] = useState<CombinedUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserAndProfile = async () => {
    setLoading(true);
    setError(null);

    const {
      data: { user: authUser },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !authUser) {
      setUser(null);
      setLoading(false);
      setError(authError?.message || "No user");
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profile")
      .select(
        "username,book_code,level,started_at,ended_at,total_points,current_rank,best_rank,rank_status,test_1,test_2,test_3,reviews_on_book,rating_of_book"
      )
      .eq("user_id", authUser.id)
      .single();

    if (profileError || !profile) {
      setUser(null);
      setLoading(false);
      setError(profileError?.message || "No profile");
      return;
    }

    setUser({
      email: authUser.email ?? "",
      ...profile,
    });

    setLoading(false);
  };

  useEffect(() => {
    fetchUserAndProfile();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session: Session | null) => {
      if (session?.user) {
        fetchUserAndProfile();
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { user, loading, error };
}

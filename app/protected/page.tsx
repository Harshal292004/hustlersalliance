import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";
import { motion } from "framer-motion";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-8 sm:gap-12 p-4 sm:p-6 md:p-8 lg:p-12 bg-[#E9E5D8] dark:bg-[#292929] min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="bg-[#292929] dark:bg-[#E9E5D8] text-[#E9E5D8] dark:text-[#292929] text-sm sm:text-base p-3 sm:p-4 px-4 sm:px-5 rounded-md flex gap-3 items-center shadow-sm">
          <InfoIcon size={16} strokeWidth={2} />
          This is a protected page that you can only see as an authenticated
          user
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-2 items-start"
      >
        <h2 className="font-bold text-xl sm:text-2xl mb-4 text-[#292929] dark:text-[#E9E5D8]">Your user details</h2>
        <pre className="text-xs font-mono p-3 sm:p-4 rounded border border-[#292929] dark:border-[#E9E5D8] max-h-32 sm:max-h-48 overflow-auto bg-[#292929] dark:bg-[#E9E5D8] text-[#E9E5D8] dark:text-[#292929] w-full">
          {JSON.stringify(data.user, null, 2)}
        </pre>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="font-bold text-xl sm:text-2xl mb-4 text-[#292929] dark:text-[#E9E5D8]">Next steps</h2>
      </motion.div>
    </div>
  );
}

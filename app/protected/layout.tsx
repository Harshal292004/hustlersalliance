import { ThemeSwitcher } from "@/components/ui/Theme-switcher";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#E9E5D8] dark:bg-[#292929]">
      <div className="flex-1 w-full flex flex-col gap-12 sm:gap-16 lg:gap-20 items-center">
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center border-b border-[#292929] dark:border-[#E9E5D8] h-16 bg-[#E9E5D8] dark:bg-[#292929]"
        >
          <div className="w-full max-w-5xl flex justify-between items-center p-3 sm:p-4 px-4 sm:px-5 text-sm">
            <div className="flex gap-3 sm:gap-5 items-center font-semibold">
              <Link 
                href={"/"} 
                className="text-[#292929] dark:text-[#E9E5D8] hover:underline transition-all"
              >
                Next.js Supabase Starter
              </Link>
              <div className="flex items-center gap-2">
              </div>
            </div>
          </div>
        </motion.nav>
        
        <div className="flex-1 flex flex-col gap-12 sm:gap-16 lg:gap-20 max-w-5xl p-4 sm:p-5 w-full">
          {children}
        </div>

        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex flex-col sm:flex-row items-center justify-center border-t border-[#292929] dark:border-[#E9E5D8] mx-auto text-center text-xs gap-4 sm:gap-8 py-8 sm:py-12 lg:py-16 bg-[#E9E5D8] dark:bg-[#292929]"
        >
          <p className="text-[#292929] dark:text-[#E9E5D8]">
            Powered by{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline transition-all"
              rel="noreferrer"
            >
              Supabase
            </a>
          </p>
          <ThemeSwitcher />
        </motion.footer>
      </div>
    </main>
  );
}

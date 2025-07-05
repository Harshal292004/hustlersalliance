import { motion } from "framer-motion";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 bg-[#E9E5D8] dark:bg-[#292929]">
      <div className="w-full max-w-sm sm:max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 sm:gap-6 text-center"
        >
          <div>
            <div className="mb-4">
              <div className="text-xl sm:text-2xl font-semibold text-[#292929] dark:text-[#E9E5D8] mb-2">
                Sorry, something went wrong.
              </div>
            </div>
            <div>
              {params?.error ? (
                <p className="text-xs sm:text-sm text-[#292929] dark:text-[#E9E5D8]">
                  Code error: {params.error}
                </p>
              ) : (
                <p className="text-xs sm:text-sm text-[#292929] dark:text-[#E9E5D8]">
                  An unspecified error occurred.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { ThemeSwitcher } from "@/components/ui/Theme-switcher";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="min-h-screen flex flex-col items-center">
        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <ThemeSwitcher />
        </footer>
      </main>
      <Footer></Footer>
    </>
  );
}

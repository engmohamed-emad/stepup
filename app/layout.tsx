import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/app/_components/Header/Header";
import Footer from "@/app/_components/Footer/Footer";
import QueryProvider from "@/app/_components/Generic/QueryProvider";
import { Toaster } from "sonner";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "StepUp",
  description: "StepUp – Find your perfect pair of shoes.",
  icons: {
    icon: "/photos/bg_img.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" className={cn("font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="bottom-right" richColors duration={3000} />
        </QueryProvider>
      </body>
    </html>
  );
}

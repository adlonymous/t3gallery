import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Roboto_Mono } from "next/font/google";
import TopNav from "./_components/topnav";

const inter = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Mous Digital Asset Gallery",
  description:
    "my collection of expensive and worthless jpegs that live on the blockchain",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

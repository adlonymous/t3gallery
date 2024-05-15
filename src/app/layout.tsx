import "~/styles/globals.css";

import { Roboto_Mono } from "next/font/google";

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

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Mous&apos;s Digital Asset Gallery</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}

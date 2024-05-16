"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Mous and Friends&apos; Digital Asset Gallery</div>

      <div className="flex flex-row gap-2">
        <SignedOut>
          <SignInButton>
            <button className="hover:opacity-20">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
            className="px-4 text-sm"
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

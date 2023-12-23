"use client";

import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Button size="sm" variant="ghost">
          <LogOut className="h-4 w-4 mr-2">Exit</LogOut>
        </Button>
      ) : (
        <Link href="/teacher/course">
          <Button size="sm" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
};

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.action";
import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center ">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">InterviewDost</h2>
        </Link>
          <Button  className="btn-primary max-sm:w-full" onClick={signOut}> 
            Sign Out
          </Button>
      </nav>

      {children}
    </div>
  );
};

export default Layout;

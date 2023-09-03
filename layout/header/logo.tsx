import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo/logo.png";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 font-medium scale-95 hover:scale-100 transition-[transform] duration-300"
    >
      <Image src={logo} className="w-10" alt="Know Your New Company" />
      KYNC
    </Link>
  );
};

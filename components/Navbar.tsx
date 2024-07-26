"use client";

import { useUser } from "@/app/context/User";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, setUser } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("CryptoToken");
    router.push("/login");
  };

  return (
    <nav className="w-full h-20 flex items-center justify-center bg-slate-950">
      <ul className="text-xl w-full flex justify-evenly text-white  items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">{user.name ? user.name : "Login"}</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li onClick={handleLogout}>
          <p>LogOut</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

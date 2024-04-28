"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SignInOut = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    setAuth(null);
    router.push("/login");
  };

  useEffect(() => {
    setAuth(localStorage.getItem("user"));
  });

  return (
    <div>
      {auth ? (
        <>
          <span className="mx-2">Hello, {auth?.name}</span>
          <span className="mx-1">|</span>
          <a className="cursor-pointer mr-2" onClick={logout}>
            Logout
          </a>
          <Link href="/availability">Availability</Link>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default SignInOut;

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/features/Sidebar";
import Card from "@/components/reusable/Card";

const Toggled = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth >= 1023);

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  React.useEffect(() => {
    if (isMobile) {
      router.replace("/");
    }
  }, [isMobile, router]);

  if (isMobile) return null;

  return (
    <Card>
      <Sidebar />
    </Card>
  );
};

export default Toggled;
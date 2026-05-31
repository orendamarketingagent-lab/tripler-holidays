"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const splashKey = "tripler-holidays-splash-shown";

export default function SplashScreen() {
  const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(splashKey)) {
      return;
    }

    window.sessionStorage.setItem(splashKey, "true");
    setVisible(true);
    document.documentElement.classList.add("lenis-stopped");

    const timer = window.setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove("lenis-stopped");
    }, 3000);

    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      data-splash-screen="true"
      className="fixed inset-0 z-[999] grid place-items-center bg-[#F5F1E8] text-[#111820]"
    >
      <div className="flex flex-col items-center px-6 text-center">
        <div className="rounded-2xl bg-white/88 p-4 shadow-[0_20px_60px_rgba(17,24,32,0.12)]">
          <Image
            src={`${imageBasePath}/images/tripler-holidays-logo-trimmed.png`}
            alt="Triple R Holidays"
            width={320}
            height={154}
            className="h-16 w-auto sm:h-20"
            priority
          />
        </div>
        <div className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-[#111820]/14">
          <div className="h-full w-full origin-left animate-[splash-load_3s_ease-in-out_forwards] rounded-full bg-[#D98928]" />
        </div>
      </div>
    </div>
  );
}

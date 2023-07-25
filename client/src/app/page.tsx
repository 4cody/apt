"use client";

import Nav from "@/components/nav";
import LandingBody from "@/components/landingBody";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Nav />
      <LandingBody />
    </main>
  );
}

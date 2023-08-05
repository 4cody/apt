"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SideNav from "./sideNav";
import DashboardView from "./views/dashboard";
import PropertiesView from "./views/properties";

import { BiArrowToBottom } from "react-icons/bi";

export default function LoginPage() {
  const [activeView, setActiveView] = useState(<DashboardView />);

  return (
    <div className="min-h-screen w-full flex">
      <SideNav />

      <section className="grow">{activeView}</section>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import SideNav from "./sideNav";
import DashboardView from "./views/dashboard";
import PropertiesView from "./views/properties";

export default function DashboardPage() {
  const [activeView, setActiveView] = useState(<DashboardView />);

  return (
    <div className="min-h-screen w-full flex">
      <SideNav />
      <section className="grow">{activeView}</section>;
    </div>
  );
}

import ProfileCard from "@/components/ProfileCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutPage() {
  return (
    <div className="flex justify-center items-center mb-8">
      <ProfileCard />
    </div>
  );
}

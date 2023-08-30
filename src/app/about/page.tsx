import ProfileCard from "@/components/ProfileCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutPage() {
  return (
    <section className="flex justify-center items-center mb-8">
      <h1 className="hidden">자기소개 섹션</h1>
      <ProfileCard />
    </section>
  );
}

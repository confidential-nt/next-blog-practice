import ProfileCard from "@/components/ProfileCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutPage() {
  return (
    <section className="flex flex-col justify-center items-center mb-8">
      <h1 className="hidden">자기소개 섹션</h1>
      <ProfileCard />
      <div className="bg-slate-100 w-full mt-8 p-8">
        <h3 className="text-center font-bold text-lg mb-1">Who am I?</h3>
        <p className="text-center text-sm mb-1">
          끊임없이 발전하려는 프론트엔드 개발자
        </p>
        <h3 className="text-center font-bold text-lg  mb-1">Career</h3>
        <p className="text-center text-sm mb-1">아직 없음</p>
        <h3 className="text-center font-bold text-lg  mb-1">Skills</h3>
        <p className="text-center text-sm mb-1">Next.js, React, Javascript</p>
      </div>
    </section>
  );
}

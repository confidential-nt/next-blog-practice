import EmailSender from "@/components/EmailSender";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="hidden">연락처 섹션</h1>
      <h3 className="text-xl font-bold mb-1">Contact Me</h3>
      <span className="text-xs mb-2">abcd@something.com</span>
      <ul className="flex items-center mb-8">
        <li className="mr-4">
          <Link href={"/contact"}>
            <BsGithub className="text-3xl" />
          </Link>
        </li>
        <li className="mr-4">
          <Link href={"/contact"}>
            <BsLinkedin className="text-3xl" />
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>
            <BsYoutube className="text-3xl" />
          </Link>
        </li>
      </ul>
      <h3 className="text-xl font-bold mb-7">Or Send me an email</h3>
      <EmailSender />
    </section>
  );
}

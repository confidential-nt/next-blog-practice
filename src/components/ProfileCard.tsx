import Image from "next/image";
import React from "react";
import avatarImg from "../../public/images/avatar.png";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={avatarImg}
        alt="프로필 아바타 이미지"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h2 className="text-xl font-bold">Hi, I&apos;m Park.</h2>
      <strong className="font-medium">Frontend Engineer</strong>
      <p className="text-sm mb-1">늘 최선을 다합니다.</p>
      <Link
        href={"/contact"}
        className="bg-yellow-500 rounded-md text-sm font-semibold px-2 py-1"
      >
        Contact Me
      </Link>
    </div>
  );
}

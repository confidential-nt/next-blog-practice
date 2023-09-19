"use client";

import { postEmailByFetching } from "@/service/frontend/api";
import { notifyFail, notifySuccess } from "@/service/frontend/toast";
import { emailValidation } from "@/service/frontend/validation";
import React, { ChangeEvent, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const labelStyle = "text-white text-sm mb-1";

export type Email = {
  email: string;
  subject: string;
  message: string;
};

export default function EmailSender() {
  const [email, setEmail] = useState<Email>({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmail((email) => ({ ...email, [name]: value }));
  };

  const handleValidation = (email: Email) => {
    try {
      emailValidation(email);
    } catch (error) {
      notifyFail("이메일을 보내는 데 실패했습니다!");
      return;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleValidation(email);

    postEmailByFetching(email)
      .then(() => {
        setEmail({
          email: "",
          subject: "",
          message: "",
        });
        notifySuccess("이메일이 성공적으로 보내졌습니다!");
      })
      .catch(() => notifyFail("이메일을 보내는 데 실패했습니다!"));
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form
        className="flex flex-col bg-slate-600 px-4 py-2 max-w-xs w-80 rounded-md mb-6"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className={labelStyle}>
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mb-1"
          required
          onChange={handleChange}
          value={email.email}
        />
        <label htmlFor="subject" className={labelStyle}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="mb-1"
          required
          onChange={handleChange}
          value={email.subject}
        />
        <label htmlFor="message" className={labelStyle}>
          Message
        </label>
        <textarea
          id="message"
          className="h-40 mb-2 resize-none"
          name="message"
          required
          onChange={handleChange}
          value={email.message}
        ></textarea>
        <button type="submit" className="bg-yellow-200 text-sm">
          Submit
        </button>
      </form>
    </>
  );
}

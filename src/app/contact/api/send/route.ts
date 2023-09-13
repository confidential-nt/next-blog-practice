import { sendEMail } from "@/service/email";
import { NextResponse } from "next/server";

type EmailSendSuccess = {
  state: "success";
  message: string;
};
type EmailSendFail = {
  state: "fail";
  message: string;
};

type EmailPostResponse = EmailSendSuccess | EmailSendFail;

export async function POST(
  request: Request
): Promise<NextResponse<EmailPostResponse>> {
  try {
    const body = await request.json();
    const response = await sendEMail(body);

    return NextResponse.json({
      state: "success",
      message: response,
    } as EmailPostResponse);
  } catch (error: any) {
    return NextResponse.json({
      state: "fail",
      message: error.message,
    } as EmailPostResponse);
  }
}

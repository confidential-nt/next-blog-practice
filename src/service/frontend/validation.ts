import { Email } from "@/components/EmailSender";
import { object, string, number, date, InferType } from "yup";

const emailSchema = object({
  email: string().email().required(),
  subject: string().required(),
  message: string().required(),
});

export async function emailValidation(data: Email) {
  await emailSchema.validate(data, { strict: true });
}

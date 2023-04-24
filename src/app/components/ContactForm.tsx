"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { IBanner } from "./Banner";
import { postSendContactEmail } from "../service/contact/contact";
import { IPostSendEmail } from "../service/contact/types";

function ContactForm({}) {
  const [form, setForm] = useState<IPostSendEmail>({
    from: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<IBanner | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postSendContactEmail(form)
      .then(() => {
        setBanner({
          message: "메일 전송에 성공했습니다.",
          state: "success",
        });
      })
      .catch(() => {
        setBanner({ message: "메일 전송에 실패했습니다.", state: "error" });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2 bg-gray-500 p-5 rounded-md text-black my-4"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          className="px-3"
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label className="font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          className="px-3"
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label className="font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          className="px-3"
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
        />
        <button className="bg-yellow-200 font-bold hover:bg-yellow-400">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;

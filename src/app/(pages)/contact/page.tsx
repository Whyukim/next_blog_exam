import ContactForm from "@/app/components/ContactForm";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

export const metadata = {
  title: "Contact Me",
  description: "hyuk send email",
};

interface IcontactPage {}

const LINKS = [
  { icon: <AiFillGithub />, url: "" },
  { icon: <AiFillLinkedin />, url: "" },
  { icon: <AiFillYoutube />, url: "" },
];

function contactPage({}: IcontactPage) {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>example@naver.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-yellow-200"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}

export default contactPage;

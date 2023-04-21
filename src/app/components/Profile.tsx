import Image from "next/image";
import Link from "next/link";

function Profile() {
  return (
    <section className="flex items-center flex-col">
      <div className="flex justify-center">
        <Image
          className="rounded-[50%]"
          src="/images/profile.webp"
          alt="사자"
          width={200}
          height={200}
        />
      </div>

      <h1 className="text-center">HI, I&apos;m Hyuk</h1>
      <strong className="text-center">Front-End endgineer</strong>
      <p className="text-center">안녕하세요. 블로그입니다.</p>
      <Link
        href={"/about"}
        className="p-1 bg-color-blue w-[100px] rounded-lg text-center"
      >
        Contact Me
      </Link>
    </section>
  );
}

export default Profile;

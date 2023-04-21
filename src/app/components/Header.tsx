import Link from "next/link";

interface IHeader {}

function Header({}: IHeader) {
  return (
    <header className="flex justify-between w-full max-w-[1220px] mx-auto py-10">
      <Link href={"/"}>
        <h1 className="text-5xl font-semibold">{"Hyuk's Blog"}</h1>
      </Link>
      <nav className="flex items-center gap-5">
        <Link href={"/"}>home</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/posts"}>posts</Link>
        <Link href={"/contact"}>contact</Link>
      </nav>
    </header>
  );
}

export default Header;

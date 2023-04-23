import Image from "next/image";
import Link from "next/link";
import { IPost } from "../service/posts/types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ICON_CLASS =
  "text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl";

interface IArrowPostCard {
  post: IPost;
  type: "prev" | "next";
}

function ArrowPostCard({
  post: { path, title, description },
  type,
}: IArrowPostCard) {
  return (
    <Link href={`/posts/${path}`} className="relative w-full">
      <Image
        className="w-full opacity-40"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full justify-around items-center text-white px-8">
        {type === "prev" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === "next" && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}

export default ArrowPostCard;

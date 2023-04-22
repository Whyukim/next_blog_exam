import Image from "next/image";
import Link from "next/link";
import { IPost } from "../service/posts/types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface IArrowPostCard {
  post: IPost;
  type: "prev" | "next";
}

function ArrowPostCard({ post: { path, title }, type }: IArrowPostCard) {
  return (
    <Link href={`/posts/${path}`}>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div>
        {type === "prev" && <FaArrowLeft />}
        {type === "next" && <FaArrowRight />}
      </div>
    </Link>
  );
}

export default ArrowPostCard;

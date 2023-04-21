import Image from "next/image";
import Link from "next/link";
import { IPost } from "../service/posts/types";

interface IPostCard {
  post: IPost;
}

function PostCard({
  post: { title, description, date, category, path },
}: IPostCard) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-lg shadow-white">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="text-sm rounded-lg bg-fuchsia-400 px-2">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}

export default PostCard;

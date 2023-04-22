import PostContent from "@/app/components/PostContent";
import { getPostData } from "@/app/service/posts/posts";
import Image from "next/image";

interface Ipage {
  params: {
    slug: string;
  };
}

async function page({ params: { slug } }: Ipage) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <article className="rounded-3xl overflow-hidden bg-slate-600 shadow-lg shadow-gray-400 m-4">
      <Image
        className="w-full h-4/2 max-h-[400px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section>
        {prev && <p>{prev.title}</p>}
        {next && <p>{next.title}</p>}
      </section>
    </article>
  );
}

export default page;

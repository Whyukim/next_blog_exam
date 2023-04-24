import ArrowPostCard from "@/app/components/ArrowPostCard";
import PostContent from "@/app/components/PostContent";
import { getFilterPosts, getPostData } from "@/app/service/posts/posts";
import { Metadata } from "next";
import Image from "next/image";

interface Ipage {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Ipage): Promise<Metadata> {
  const { title, description } = await getPostData(slug);

  return {
    title,
    description,
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
      <section className="flex shadow-md">
        {prev && <ArrowPostCard post={prev} type="prev" />}
        {next && <ArrowPostCard post={next} type="next" />}
      </section>
    </article>
  );
}

export default page;

export async function generateStaticParams() {
  const posts = await getFilterPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}

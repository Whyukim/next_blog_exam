import { getPostData } from "@/app/service/posts/posts";

interface Ipage {
  params: {
    slug: string;
  };
}

async function page({ params: { slug } }: Ipage) {
  const post = await getPostData(slug);
  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}

export default page;

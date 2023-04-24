import FilterablePosts from "../../components/FilterablePosts";
import { getAllPosts } from "../../service/posts/posts";

export const metadata = {
  title: "All Posts",
  description: "포스트",
};

interface IpostsPage {}

async function postsPage({}: IpostsPage) {
  const posts = await getAllPosts();
  const category = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={category} />;
}

export default postsPage;

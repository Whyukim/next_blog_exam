import FilterablePosts from "../components/FilterablePosts";
import { getAllPosts } from "../service/posts/posts";

interface IpostsPage {}

async function postsPage({}: IpostsPage) {
  const posts = await getAllPosts();
  const category = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={category} />;
}

export default postsPage;

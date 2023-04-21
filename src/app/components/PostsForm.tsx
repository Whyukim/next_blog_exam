import { getFilterPosts } from "../service/posts/posts";
import PostsGrid from "./PostsGrid";

interface IPostsForm {}

async function PostsForm({}: IPostsForm) {
  const posts = await getFilterPosts();

  return (
    <section>
      <h2>Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default PostsForm;

import "react-multi-carousel/lib/styles.css";
import { getNoneFilterPosts } from "../service/posts/posts";
import CarouselPost from "./CarouselPost";
import PostCard from "./PostCard";

interface IPostsSlideForm {}

async function PostsSlideForm({}: IPostsSlideForm) {
  const posts = await getNoneFilterPosts();

  return (
    <section>
      <h2>All</h2>
      <CarouselPost>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </CarouselPost>
    </section>
  );
}

export default PostsSlideForm;

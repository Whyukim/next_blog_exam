import PostsForm from "./components/PostsForm";
import PostsSlideForm from "./components/PostSlide";
import Profile from "./components/Profile";

export default function HomePage() {
  return (
    <>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <PostsForm />
      {/* @ts-expect-error Async Server Component */}
      <PostsSlideForm />
    </>
  );
}

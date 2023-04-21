"use client";
import { useState } from "react";
import { IPost } from "../service/posts/types";
import Categories from "./Categories";
import PostsGrid from "./PostsGrid";

interface IFilterablePosts {
  posts: IPost[];
  categories: string[];
}

const ALL_POSTS = "All posts";

function FilterablePosts({ posts, categories }: IFilterablePosts) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filterd =
    selected === ALL_POSTS
      ? posts
      : posts.filter((p) => p.category === selected);

  return (
    <section className="flex">
      <PostsGrid posts={filterd} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}

export default FilterablePosts;

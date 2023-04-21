import { readFile } from "fs/promises";
import path from "path";
import { IPost, IPostData } from "./types";

export async function getFilterPosts(): Promise<IPost[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNoneFilterPosts(): Promise<IPost[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<IPost[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");

  return readFile(filePath, "utf-8")
    .then<IPost[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(fileName: string): Promise<IPostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metaData = await getAllPosts() //
    .then((posts) => posts.find((post) => post.path == fileName));

  if (!metaData)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const content = await readFile(filePath, "utf-8");
  return { ...metaData, content };
}

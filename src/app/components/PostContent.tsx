import MarkDownView from "@/app/components/MarkDownView";
import { AiTwotoneCalendar } from "react-icons/ai";
import { IPostData } from "../service/posts/types";

interface IPostContent {
  post: IPostData;
}

function PostContent({ post }: IPostContent) {
  const { title, description, date, content } = post;

  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-sky-500">
        <AiTwotoneCalendar />
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="w-44 border-2 border-sky-500 mt-4 mb-8"></div>
      <MarkDownView content={content} />
    </section>
  );
}

export default PostContent;

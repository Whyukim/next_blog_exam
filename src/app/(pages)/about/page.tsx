import Profile from "@/app/components/Profile";

export const metadata = {
  title: "About me",
  description: "what hyuk",
};

interface IaboutPage {}

const TITLE_CLASS = "text-2xl font-bold text-gray-800";
const DESCRIPTION_CLASS = "text-gray-800 mb-4";

function aboutPage({}: IaboutPage) {
  return (
    <>
      <Profile />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p className={DESCRIPTION_CLASS}>개발과 사랑하는 풀스택 개발자</p>
        <h2 className={TITLE_CLASS}>Skill</h2>
        <p className={DESCRIPTION_CLASS}>Recf</p>
      </section>
    </>
  );
}

export default aboutPage;

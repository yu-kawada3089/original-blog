import { useCallback, useState } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import { Link as Scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";

import { DetailPageAsideTemplate } from "../../components/DetailPageAsideTemplate";
import { Layout } from "../../components/Layout";
import { Profile } from "../../components/utils/Profile";

export default function BlogId({ books }) {
  console.log(books);
  const htmlParsedIntroData = parse(books.intro);

  const htmlParsedRecommendData = parse(books.recommend);

  const htmlParsedChecklistData = parse(books.checklist);

  const htmlParsedProfileData = parse(books.profile);

  const htmlParsedDescriptionData = parse(books.description);

  const htmlParsedImpressionData = parse(books.impression);

  const [isShow, setIsShow] = useState(false);

  const handleDisplay = useCallback(() => setIsShow((isShow) => !isShow), []);

  const [ref1, introductionInview] = useInView({
    threshold: 0,
    rootMargin: "-2% 0% -0% 0%",
  });
  const [ref2, recommendationInview] = useInView({
    threshold: 0,
    rootMargin: "-2% 0% -97% 0%",
  });
  const [ref3, checklistInview] = useInView({
    threshold: 0,
    rootMargin: "-2% 0% -97% 0%",
  });
  const [ref4, impressionsInview] = useInView({
    threshold: 0,
    rootMargin: "-2% 0% -97% 0%",
  });

  return (
    <Layout>
      <div className="flex max-w-full md:max-w-6xl justify-center mx-auto mt-6 tracking-wider space-x-20">
        <main className="flex flex-col w-screen md:max-w-[68%]">
          <div className="lg:hidden flex flex-col h-auto lg:mt-16 text-sm ">
            <h3 className="text-xl font-bold pt-4 ml-2">カテゴリー</h3>
            <div className="grid grid-cols-4 mt-4 gap-2">
              <button
                className={
                  books.category === "knowledge"
                    ? "p-3 rounded bg-yellow-400 text-gray-100 mx-2"
                    : "p-3 rounded border-2 mx-2 hover:p-3 hover:bg-yellow-400 hover:text-gray-100"
                }
              >
                知識
              </button>
              <button
                className={
                  books.category === "health"
                    ? "p-3 rounded bg-red-400 text-gray-100 mx-2"
                    : "p-3 rounded border-2 mx-2 hover:p-3 hover:bg-red-400 hover:text-gray-100"
                }
              >
                健康
              </button>
              <button
                className={
                  books.category === "time"
                    ? "p-3 rounded bg-purple-400 text-gray-100 mx-2"
                    : "p-3 rounded border-2 mx-2 hover:p-3 hover:bg-purple-400 hover:text-gray-100"
                }
              >
                時間
              </button>
              <button
                className={
                  books.category === "philosophy"
                    ? "p-3 rounded bg-blue-400 text-gray-100 mx-2"
                    : "p-3 rounded border-2 mx-2 hover:p-3 hover:bg-blue-400 hover:text-gray-100"
                }
              >
                哲学
              </button>
            </div>
          </div>
          <div className="h-full mt-4 lg:mt-16 mb-8 pb-8 border-2 bg-white ">
            <h1 className="text-center md:text-2xl lg:text-4xl font-bold mt-8 mx-8">{books.title}</h1>
            <Image src={books.mainImage.url} width={800} height={600} className="justify-center h-54 md:h-96 w-2/3 mt-8 object-fill m-auto" />
            <div className="lg:hidden w-80 h-auto grid grid-cols-6 grid-rows-6 bg-white">
              <h3 className="row-start-1 row-end-2 col-start-1 col-end-7 text-xl pt-4 px-4 md:pl-10 mb-2 font-bold">目次</h3>
              <div className="row-start-2 row-end-7 col-start-1 col-end-2 justify-self-center md:pl-8">
                <img className={introductionInview ? "mt-5 pb-10" : "mt-5 pb-10 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
                <img className={recommendationInview ? "pb-10" : "pb-10 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
                <img className={checklistInview ? "pb-10" : "pb-10 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
                <img className={impressionsInview ? "pb-9" : "pb-9 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
              </div>
              <ul className="row-start-2 row-end-7 col-start-2 col-end-7 md:pl-6">
                <li
                  className={
                    introductionInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
                  }
                >
                  <Scroll to="introduction" smooth={true} duration={400} offset={-68} className="cursor-pointer ">
                    はじめに
                  </Scroll>
                </li>
                <li
                  className={
                    recommendationInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
                  }
                >
                  <Scroll to="recommendation" smooth={true} duration={400} offset={-44} className="cursor-pointer">
                    こんな方にオススメ！
                  </Scroll>
                </li>
                <li
                  className={
                    checklistInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
                  }
                >
                  <Scroll to="checklist" smooth={true} duration={400} offset={-44} className="cursor-pointer">
                    読む前におさえたいポイント
                  </Scroll>
                </li>
                <li
                  className={
                    impressionsInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
                  }
                >
                  <Scroll to="impressions" smooth={true} duration={400} offset={-44} className="cursor-pointer">
                    読んだ感想、気づきなど
                  </Scroll>
                </li>
              </ul>
            </div>
            <div className="mt-4 px-4 md:pt-10 md:px-10" ref={ref1}>
              <div className="border-b-8 border-green-500 border-opacity-40 relative">
                <h2 id="introduction" className="text-lg md:text-2xl font-bold -top-4 md:-top-5 absolute">
                  はじめに
                </h2>
              </div>
              <div className="mt-8 leading-8 text-sm md:text-base ">{htmlParsedIntroData}</div>
            </div>
            <div className="mt-10 px-4 md:pt-10 md:px-10" ref={ref2}>
              <div className="border-b-8 border-green-500 border-opacity-40 relative">
                <h2 id="recommendation" className="text-lg md:text-2xl font-bold -top-4 md:-top-5 absolute ">
                  こんな方にオススメ！
                </h2>
              </div>
              <div className="mt-8 leading-8 font-noto text-sm md:text-base">{htmlParsedRecommendData}</div>
            </div>
            <div className="mt-10 px-4 md:pt-10 md:px-10" ref={ref3}>
              <div className=" border-b-8 border-green-500 border-opacity-40 relative">
                <h2 id="checklist" className="text-lg md:text-2xl font-bold -top-4 md:-top-5 absolute ">
                  読む前におさえたいポイント
                </h2>
              </div>
              <div className="flex flex-row　mt-8 leading-8 text-sm md:text-base">
                <ul className="mt-8 space-y-4">
                  <li>・著者</li>
                  <li>・出版日</li>
                  <li>・ページ数</li>
                  <li>・プロフィール</li>
                </ul>
                <div className="mt-8 pl-12 space-y-4 ">
                  {htmlParsedChecklistData}
                  <button className="leading-8 px-3 text-white bg-[#000000c4] outline-none rounded" onClick={handleDisplay}>
                    {isShow ? "閉じる" : "開く"}
                  </button>
                  <span className="pl-10">(初版当時)</span>
                </div>
              </div>
              {/* ボタンクリックで表示・非表示 */}
              {isShow ? <Profile profile={htmlParsedProfileData} description={htmlParsedDescriptionData} /> : null}
            </div>
            <div className="mt-10 px-4 md:pt-10 md:px-10" ref={ref4}>
              <div className="border-b-8 border-green-500 border-opacity-40 relative">
                <h2 id="impressions" className="text-lg md:text-2xl font-bold -top-4 md:-top-5 absolute ">
                  読んだ感想、気づきなど
                </h2>
              </div>
              <div className="mt-8 leading-8 text-sm md:text-base">{htmlParsedImpressionData}</div>
            </div>
          </div>
        </main>
        <DetailPageAsideTemplate
          introductionInview={introductionInview}
          recommendationInview={recommendationInview}
          checklistInview={checklistInview}
          impressionsInview={impressionsInview}
          category={books.category}
        />
      </div>
    </Layout>
  );
}
//静的生成のためのパス指定。
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://keyakiblog.microcms.io/api/v1/blog-data", key)
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

//データをテンプレートに受け渡す部分の処理。
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://keyakiblog.microcms.io/api/v1/blog-data/" + id, key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      books: data,
    },
  };
};

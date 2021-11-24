import { MainAsideTemplate } from "../components/MainAsideTemplate";
import { ReturnToButton } from "../components/atoms/button/ReturnTopButton";
import { BookCard } from "../components/BookCard";
import { Layout } from "../components/Layout";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default function Home({ books }) {
  let [plan, setPlan] = useState("全ての記事");

  const [articles, setArticles] = useState(books);

  const handleAllCategory = () => {
    setArticles(books);
  };
  const handleSortedKnowledge = () => {
    const knowledgeArray = books.filter((book) => book.category === "knowledge");
    setArticles(knowledgeArray);
  };
  const handleSortedHealth = () => {
    const healthArray = books.filter((book) => book.category === "health");
    setArticles(healthArray);
  };
  const handleSortedTime = () => {
    const timeArray = books.filter((book) => book.category === "time");
    setArticles(timeArray);
  };
  const handleSortedPhilosophy = () => {
    const philosophyArray = books.filter((book) => book.category === "philosophy");
    setArticles(philosophyArray);
  };

  return (
    <Layout title="サイトのタイトル名">
      <div className="flex justify-center align-center text-xs md:text-base lg:max-w-6xl mx-auto">
        <main className="flex flex-col w-full">
          <div className="flex overflow-x-auto md:justify-around w-full lg:py-3 lg:px-10 ">
            <RadioGroup
              value={plan}
              onChange={setPlan}
              className="flex flex-wrap h-24 md:h-12 justify-center items-center md:justify-around w-full space-x-5 py-3"
            >
              <RadioGroup.Option value="全ての記事">
                {({ checked }) => (
                  <button
                    className={
                      checked
                        ? "rounded bg-[#000000c4] bg-opacity-80 text-white px-4 py-2"
                        : "border-[#000000c4] bg-opacity-80 px-4 py-2 hover:bg-[#000000c4] hover:rounded hover:text-white hover:border-none"
                    }
                    onClick={() => handleAllCategory()}
                  >
                    全ての記事
                  </button>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="知識">
                {({ checked }) => (
                  <button
                    className={
                      checked
                        ? "rounded bg-[#000000c4] bg-opacity-80 text-white px-4 py-2 tracking-wide"
                        : "border-[#000000c4] bg-opacity-80 px-4 py-2 hover:bg-[#000000c4] hover:rounded hover:text-white hover:border-none tracking-wide"
                    }
                    onClick={() => handleSortedKnowledge()}
                  >
                    知識
                  </button>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="健康">
                {({ checked }) => (
                  <button
                    className={
                      checked
                        ? "rounded bg-[#000000c4] bg-opacity-80 text-white px-4 py-2 tracking-wide"
                        : "border-[#000000c4] bg-opacity-80 px-4 py-2 hover:bg-[#000000c4] hover:rounded hover:text-white hover:border-none tracking-wide"
                    }
                    onClick={() => handleSortedHealth()}
                  >
                    健康
                  </button>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="時間">
                {({ checked }) => (
                  <button
                    className={
                      checked
                        ? "rounded bg-[#000000c4] bg-opacity-80 text-white px-4 py-2 tracking-wide"
                        : "border-[#000000c4] bg-opacity-80 px-4 py-2 hover:bg-[#000000c4] hover:rounded hover:text-white hover:border-none tracking-wide"
                    }
                    onClick={() => handleSortedTime()}
                  >
                    時間
                  </button>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="哲学・考え方">
                {({ checked }) => (
                  <button
                    className={
                      checked
                        ? "rounded bg-[#000000c4] bg-opacity-80 text-white px-4 py-2"
                        : "border-[#000000c4] bg-opacity-80 px-4 py-2 hover:bg-[#000000c4] hover:rounded hover:text-white hover:border-none"
                    }
                    onClick={() => handleSortedPhilosophy()}
                  >
                    哲学・考え方
                  </button>
                )}
              </RadioGroup.Option>
            </RadioGroup>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start mt-4 md:mt-8 lg:ml-10 md:mb-16">
            {articles.map((article) => (
              <BookCard key={article.id} bookData={article} />
            ))}
          </div>
        </main>
        <MainAsideTemplate />
      </div>

      {/* <ReturnToButton/> */}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://keyakiblog.microcms.io/api/v1/blog-data", key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      books: data.contents,
    },
  };
};

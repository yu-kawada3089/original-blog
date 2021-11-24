import { Link as Scroll } from "react-scroll";

export const DetailPageAsideTemplate = (props) => {
  return (
    <aside className="hidden lg:flex flex-col w-1/3 ">
      <div className="w-80 h-auto pb-8 border bg-white mt-16 rounded shadow-xl">
        <h3 className="text-xl font-bold pt-4 pl-8">カテゴリー</h3>
        <div className="grid grid-cols-2 mt-4 mx-6 gap-2">
          <button
            className={
              props.category === "knowledge"
                ? "rounded bg-yellow-400 text-gray-100"
                : "p-3 rounded border-2 hover:p-3 hover:bg-yellow-400 hover:text-gray-100"
            }
          >
            知識
          </button>
          <button
            className={
              props.category === "health"
                ? "p-3 rounded bg-red-400 text-gray-100"
                : "p-3 rounded border-2 hover:p-3 hover:bg-red-400 hover:text-gray-100"
            }
          >
            健康
          </button>
          <button
            className={
              props.category === "time"
                ? "p-3 rounded bg-purple-400 text-gray-100"
                : "p-3 rounded border-2 hover:p-3 hover:bg-purple-400 hover:text-gray-100"
            }
          >
            時間
          </button>
          <button
            className={
              props.category === "philosophy"
                ? "p-3 rounded bg-blue-400 text-gray-100"
                : "p-3 rounded border-2 hover:p-3 hover:bg-blue-400 hover:text-gray-100"
            }
          >
            哲学・考え方
          </button>
        </div>
      </div>
      <div className="sticky top-0">
        <div className="w-80 h-auto border grid grid-cols-6 grid-rows-6 mt-16 bg-white rounded shadow-xl ">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-7 text-xl pt-4 pl-8 mb-2 font-bold">目次</h3>
          <div className="row-start-2 row-end-7 col-start-1 col-end-2 justify-self-center">
            <img className={props.introductionInview ? "mt-5 pb-10" : "mt-5 pb-10 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
            <img className={props.recommendationInview ? "pb-10" : "pb-10 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
            <img className={props.checklistInview ? "pb-10" : "pb-10 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
            <img className={props.impressionsInview ? "pb-9" : "pb-9 opacity-0"} src="/leaf_icon.svg" width="16" height="16" alt="" />
          </div>
          <ul className="row-start-2 row-end-7 col-start-2 col-end-7">
            <li
              className={
                props.introductionInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
              }
            >
              <Scroll to="introduction" smooth={true} duration={400} offset={-68} className="cursor-pointer ">
                はじめに
              </Scroll>
            </li>
            <li
              className={
                props.recommendationInview
                  ? "py-4 hover:underline font-bold"
                  : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
              }
            >
              <Scroll to="recommendation" smooth={true} duration={400} offset={-44} className="cursor-pointer">
                こんな方にオススメ！
              </Scroll>
            </li>
            <li
              className={
                props.checklistInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
              }
            >
              <Scroll to="checklist" smooth={true} duration={400} offset={-44} className="cursor-pointer">
                読む前におさえたいポイント
              </Scroll>
            </li>
            <li
              className={
                props.impressionsInview ? "py-4 hover:underline font-bold" : "py-4 opacity-80 hover:text-green-400 hover:opacity-100 hover:underline"
              }
            >
              <Scroll to="impressions" smooth={true} duration={400} offset={-44} className="cursor-pointer">
                読んだ感想、気づきなど
              </Scroll>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center w-80 h-80 border text-center mt-16 rounded shadow-xl">
          <div className="w-56 py-24 my-4 border bg-white rounded-full text-center">イメージ部分</div>
          <p className="p-4">自身の簡単な紹介。</p>
        </div>
      </div>
    </aside>
  );
};

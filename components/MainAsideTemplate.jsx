export const MainAsideTemplate = () => {
  return (
    <aside className="lg:flex flex-col w-1/3 mt-6 hidden">
      <div className="w-80 h-auto border-2 mt-20 bg-white rounded shadow-xl relative">
        <h3 className="pt-4 pl-5 text-lg font-bold  ">このサイトについて</h3>
        <div className="border-b-8 border-green-500/40 w-[54%] ml-4 absolute top-8 "></div>
        <p className="py-4 px-3 pl-5 leading-6">
          管理人である<span className="font-bold">「かわゆー」</span>が、読書を通じて得た「学び」や「気づき」を記事にして紹介する書評ブログです。
        </p>
      </div>
      <div className="flex flex-col w-80 h-auto border-2 bg-white mt-16 rounded shadow-xl relative">
        <h3 className="pt-4 pl-5 text-lg font-bold ">管理人</h3>
        <div className="border-b-8 border-green-500/40 w-[20%] ml-4 absolute top-8 "></div>

        <div className="flex flex-col items-center ">
          <div className="w-40 py-16 m-2 border bg-white rounded-full text-center ">イメージ</div>
        </div>
        <h3 className="pt-2 pl-5">かわゆー</h3>
        <p className="p-5 ">大阪在住の無類の散歩好き。すぐどこか行く人。趣味はゲームとサウナ。</p>
      </div>
    </aside>
  );
};

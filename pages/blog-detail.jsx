import { Layout } from "../components/Layout";
import { MainAsideTemplate } from "../components/MainAsideTemplate";

export default function Blog() {
  return (
    <Layout>
      <div className="flex justify-center align-center lg:max-w-6xl mx-auto space-x-20">
        <main className="flex flex-col w-screen md:max-w-[68%] mt-6 ">
          <div className="h-full mt-16 mb-16 border-2 bg-white ">
            <h2 className="text-2xl md:text-3xl mt-8 mx-2 md:mx-8 md:pl-1 font-bold ">このブログについて</h2>　
            <div className="mt-4 pt-10 md:px-10 px-2">
              <div className="border-b-8 border-green-500 border-opacity-40 relative">
                <h2 id="introduction" className="text-lg md:text-2xl -top-4 md:-top-5 font-bold absolute">
                  ブログ名の由来
                </h2>
              </div>
              <div className="mt-8 leading-8 text-sm md:text-base">
                <p>自然の中を散策するのが好きなのもあり、”木”の名前を付けることは決めていました。</p>
                <br />
                <p>
                  それで「何の木にしようか？」と考えていたところ、私の大好きなマンガのエピソードの中に相手を”けやきの木”に例えるシーンがあり、そのシーンの中での文言にすごく感銘を受けたのを思い出して”けやき”にしようと決めました。
                </p>
                <br />
                <p>ゆっくり時間をかけて大きくしていきたいですね。</p>
                <br />
                <p>
                  ちなみに好きなマンガのエピソードは、羽海野チカさんの「３月のライオン」の「焼け野が原」です。アニメにもなってますので気になった方はぜひぜひ。
                </p>
              </div>
            </div>
            <div className="mt-4 pt-10 md:px-10 px-2 ">
              <div className=" border-b-8 border-green-500 border-opacity-40 relative">
                <h2 id="recommendation" className="text-lg md:text-2xl -top-4 md:-top-5 font-bold absolute ">
                  きっかけと目的
                </h2>
              </div>
              <div className="mt-8 leading-8 font-noto mb-8 text-sm md:text-base">
                <p>このブログは管理人がプログラミングを学習する過程で生まれました。</p>
                <br />
                <p>
                  制作テーマを決める際、「作るなら小さくても人の役に立つサービスでも作れないかな」とは考えもしましたが２０００％挫折するという結論に至り５秒で考えを改めました。
                </p>
                <p>それは少し先の目標として置いておき、まずは「自己研鑽の場を作る」ことをテーマにして制作しています。あせらないこと大事。</p>
              </div>
            </div>
          </div>
        </main>
        <MainAsideTemplate />
      </div>
    </Layout>
  );
}

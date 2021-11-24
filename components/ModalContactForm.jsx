import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

const validationSchema = yup.object().shape({
  Name: yup.string().required("名前は必ず入力して下さい。"),
  Address: yup.string().email("無効な入力です。"),
  Message: yup.string().required("メッセージの入力がありません。"),
});

export const ModalContactForm = (props) => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // フォーム内の要素を上から検証して最初に見つけたエラーを返す
    criteriaMode: "firstError",
    //送信ボタンが押された時にエラーの検証をする
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await fetch(baseUrl + "/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) {
          throw Error(`${res.status} ${res.statusText}`);
        }
      });

      void router.push("/contact/success");
    } catch (err) {
      void router.push("/contact/error");
    }
  };

  return (
    <>
      <div
        className="hover:bg-gray-400 hover:text-gray-50 hover:bg-opacity-75 hover:shadow hover: cursor-pointer px-3 py-2 rounded text-sm md:text-base"
        onClick={openModal}
      >
        <svg className="w-6 h-6 mx-auto " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        お問い合わせ
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-40" />
            </Transition.Child>

            {/* モーダルの配置をブラウザに教える */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  お問い合わせ
                  {/* モーダル展開後の表示 */}
                </Dialog.Title>
                <div className="mt-2 p-2">
                  <p className="text-sm leading-6 text-gray-500">
                    当サイトのご訪問ありがとうございました！
                    <br />
                    拙いコンテンツではありますが、少しでも楽しんで頂けていれば幸いです。
                    <br />
                    御用の際には下記のフォーム、または直下のTwitterの方へご連絡ください！
                  </p>
                </div>
                <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col mt-8 ">
                    <label className="text-left" htmlFor="name">
                      <div>
                        お名前<span className="text-red-500 ml-4">必須</span>
                        <p className="text-red-500">{errors.Name?.message}</p>
                      </div>
                      <input
                        className="w-2/3 my-1 mt-2 border-b-2 transition duration-500 focus:outline-none hover:border-green-100 hover:bg-green-100"
                        {...register("Name")}
                        id="name"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col mt-5">
                    <label className="text-left" htmlFor="address">
                      <div>
                        メールアドレス<span className="text-gray-500 ml-4">任意</span>
                      </div>
                      <input
                        className="w-2/3 my-1 mt-2 border-b-2 transition duration-500 focus:outline-none hover:border-green-100 hover:bg-green-100"
                        {...register("Address")}
                        id="address"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col mt-5">
                    <div className="text-left">メッセージ内容</div>
                    <p className="text-red-500">{errors.Message?.message}</p>
                    <textarea className="w-full my-1 mt-3 border-2 rounded-md focus:outline-none" rows={7} defaultValue="" {...register("Message")} />
                  </div>
                  <button
                    className="my-2 inline-flex justify-center px-4 py-2  text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    type="submit"
                  >
                    送信する
                  </button>
                </form>

                <div className="flex mt-4 justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    onClick={closeModal}
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

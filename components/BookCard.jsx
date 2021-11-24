import Link from "next/link";

export const BookCard = ({ bookData }) => {
  console.log(bookData);

  return (
    <Link href={`/blog/${bookData.id}`}>
      <div className=" w-64 md:w-72 lg:w-80 h-80 md:h-96 border-2 mx-6 mb-8 text-gray-800 bg-opacity-20  transition-all duration-300 ease-in-out rounded shadow-xl overflow-hidden overflow-y-auto relative hover:cursor-pointer hover:border-[#0d0f0da1] transform hover:rotate-3">
        <img src={bookData.mainImage.url} alt="" width={320} height={210} className="h-56 w-full object-fill absolute bg-card-img" />
        <div className=" h-24 md:h-40 w-full p-2 bg-white absolute z-50 bottom-0">
          <div className="p-2 text-sm md:text-xl text-bold ">{bookData.title}</div>
          <div className="flex justify-between">
            <span className="px-2 text-sm text-gray-500">{bookData.date}</span>
            <span className="px-2 text-sm ">{bookData.author}</span>
          </div>
          <div className="p-2">{bookData.summary}</div>
        </div>
      </div>
    </Link>
  );
};

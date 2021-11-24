export const Profile = (props) => {
  return (
    <div className="leading-8 ">
      <div className=" bg-gray-300/40 my-4 rounded">
        <div className="flex flex-col">
          <img src="/blockquote1.svg" className="ml-2 block" width={32} height={32} alt="" />
          <div className="pl-4 pr-4 text-sm md:text-base font-bold">
            <blockquote>
              <div className="text-sm md:text-base">{props.profile}</div>
            </blockquote>
          </div>
          <img src="/blockquote2.svg" className="self-end mr-2 " width={32} height={32} alt="" />
        </div>
      </div>
      {props.description ? <div className="text-sm md:text-base">{props.description}</div> : null}
      {/* <div className="text-sm md:text-base">{props.description}</div> */}
    </div>
  );
};

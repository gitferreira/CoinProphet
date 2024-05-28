import Tagline from "./Tagline";

const Post = ({ id, title, text1, text2, number, image }) => {
  return (
    <div className="border border-n-1/10 rounded-2xl mb-6 w-[40%] md:w-[70%] lg:w-full " id={id}>
      <div className="p-4">
        <h2 className=" text-sm md:text-xl font-bold  mb-4 ml-2">{title} </h2>
        <img src={image} alt="placeholder" />
      </div>

      <div className="w-full !p-0 rounded-2xl bg-reverse-table-gradient">
      <div className="p-4">
        <p className="mt-6 text-n-1/80 ">{text1}</p>
        <p className="mt-4 text-n-1/80">{text2}</p>
        <div className="flex justify-end mt-10 ">
          <Tagline> {number} </Tagline>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

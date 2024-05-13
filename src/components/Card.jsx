const Card = ({ number, title, description}) => {
  return (
    <div className="mb-3 py-5 px-10 border border-n-1/50 rounded-[2rem] relative ">
      <img
        src={number}
        width={50}
        height={50}
        alt="you found an easter-egg!"
        className="absolute top-[4.5rem] -left-[1.6rem]"
      />

      <div className="flex items-start text-left">
        <h6 className="body-2 ">{title}</h6>
      </div>
      <p className="body-2 mt-3 text-n-1/70">{description}</p>
    </div>
  );
};

export default Card;

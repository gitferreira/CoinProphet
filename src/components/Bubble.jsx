

const Bubble = ({image, className, height, width}) => {
  return (
    <div className={`${className} absolute hidden xl:flex rounded-b-[10rem]`}>
        <img src={image} alt="bubble" height={height} width={width} className="rounded-l-[2rem]  rounded-b-[2rem]"/>
    </div>
  )
}

export default Bubble
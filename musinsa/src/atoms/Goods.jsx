import Image from "next/image";
const Goods = (props) => {
  return (
    <>
      <Image
        src={props.image}
        alt=""
        width={100}
        height={100}
        className="w-20 h-20 object-fit"
      ></Image>
      <span>{props.brand}</span>
      <span>{props.name}</span>
      <span>{props.price}</span>
    </>
  );
};

export default Goods;

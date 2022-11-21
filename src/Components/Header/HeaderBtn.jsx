import icon from "../../assets/cart-icon.svg";

function HeaderBtn(props) {
  return (
    <button className="bg-orange flex px-10 rounded-lg text-white font-sans py-3">
      <img src={icon} alt="" className="mr-1" />
      {props.children}
      <span className="ml-1 bg-white font-bold text-black px-2 rounded-full">
        3
      </span>
    </button>
  );
}

export default HeaderBtn;

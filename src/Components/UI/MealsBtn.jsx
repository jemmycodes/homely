function MealsBtn(props) {
  return (
    <button className="bg-orange px-6 py-2 rounded-lg text-white ">
      {props.children}
    </button>
  );
}

export default MealsBtn;

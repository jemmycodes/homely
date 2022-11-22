function RandomBtns(props) {
  return (
    <button className="px-5 bg-orange text-white py-2 rounded-lg">
      {props.children}
    </button>
  );
}

export default RandomBtns;

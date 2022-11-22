import MealsBtn from "../UI/MealsBtn";

function MealsItem(props) {
  return (
    <div className="border border-orange space-y-2 max-w-fit">
      <figure>
        <img src={props.img} alt="" className="w-48  mx-auto" />
      </figure>
      <figcaption>
        <p className="font-serif text-center">{props.food}</p>
      </figcaption>
      <div className="flex items-center">
        <p className="font-bold">N {props.price}</p>
        <MealsBtn>+ Add</MealsBtn>
      </div>
    </div>
  );
}

export default MealsItem;

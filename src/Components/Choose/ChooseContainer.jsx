import ChooseItem from "./ChooseItem";
import barsImg from "../../assets/bars.svg";
import delivery from "../../assets/delivery-logo.svg";
import certificateSolid from "../../assets/certificate-solid.svg";

const CHOOSE_DATA = [
  {
    img: barsImg,
    title: "Easy to Order",
    content:
      "Order food at a single click and select all food to order at any poin in time and at ease and comfort",
  },
  {
    img: delivery,
    title: "Fast Delivery",
    content:
      "Food delivery fast and reliable and get delivered at deliivery tinme and location any day any time",
  },
  {
    img: certificateSolid,
    title: "100% Quality",
    content:
      "We provide quality food for you and your loved ones for health and so onnnnnn and for wellness",
  },
];

function ChooseContainer() {
  const chooseItem = CHOOSE_DATA.map((item) => (
    <ChooseItem title={item.title} content={item.content} img={item.img} />
  ));

  return (
    <article className="max-w-6xl mx-auto px-8">
      <h1 className="orange-color text-center mb-5 font-bold text-3xl">
        Why choose us
      </h1>
      <p className="text-center font-semibold mb-5">
        This is what makes our product different
      </p>
      <section className="bg-navBackground  justify-center md:justify-between items-center p-12 flex flex-col md:flex-row  gap-6">
        {chooseItem}
      </section>
    </article>
  );
}

export default ChooseContainer;

function ChooseItem(props) {
  console.log(props);
  return (
    <section className="bg-white py-16 px-8">
      <figure className="max-w-20">
        <img src={props.img} className="w-10 mx-auto mb-9 object-cover" />
      </figure>
      <h1 className="text-center mb-4">{props.title}</h1>
      <p className="max-w-[12rem] text-xs text-center">{props.content}</p>
    </section>
  );
}

export default ChooseItem;

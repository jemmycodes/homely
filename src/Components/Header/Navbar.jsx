import HeaderBtn from "./HeaderBtn";
import { HiMenuAlt1 } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
      <p className="nav--text ">Homely</p>
      <HiMenuAlt1 className="text-orange text-4xl hover:scale-150 duration-200 cursor-pointer" />
      <ul className="hidden space-x-10 items-center lg:flex">
        <li className="orange-color">Home</li>
        <li>About Us</li>
        <li>Our Products</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
        <HeaderBtn>Cart</HeaderBtn>
      </ul>
    </nav>
  );
}
export default Navbar;

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-5 border-2 border-red-400 justify-between relative z-30 ">
      <Link href="/">home</Link>
    </nav>
  );
};

export default Navbar;

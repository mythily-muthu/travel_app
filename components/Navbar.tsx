import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-5 border-2 border-red-400 justify-between relative z-30 ">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
    </nav>
  );
};

export default Navbar;

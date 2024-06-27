import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline">
        Random Thoughts
      </Link>
      .
    </h2>
  );
};

export default Header;

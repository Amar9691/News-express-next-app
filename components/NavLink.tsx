import Link from "next/link";

type Props = {
  category: Category;
  isActive: Boolean;
};

const NavLink = ({ category, isActive }: Props) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive
          ? "underline decoration-slate-400 underline-offset-4 font-bold text-lg"
          : ""
      }`}
    >
      {category}
    </Link>
  );
};

export default NavLink;

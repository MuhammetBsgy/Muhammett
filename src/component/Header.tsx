import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full absolute top-0 z-50 mt-[2%]">
      {" "}
      <div className="flex justify-center">
        <ul className="flex space-x-[3%] mt-6">
          {" "}
          <li className="py-[1%] px-[2%]">
            {" "}
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:text-white transition-all duration-300"
            >
              Anasayfa
            </Link>
          </li>
          <li className="py-[1%] px-[2%]">
            <Link
              to="/about"
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:text-white transition-all duration-300"
            >
              Hakkımda
            </Link>
          </li>
          <li className="py-[1%] px-[2%]">
            <Link
              to="/contact"
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:text-white transition-all duration-300"
            >
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

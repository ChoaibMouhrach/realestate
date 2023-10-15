import En from "../assets/En.png";
import Menu from "../assets/Menu.png";
import logo from "../assets/logo.png";
import icon from "../assets/icon-house.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="p-4 bg-white">
      <nav className="flex justify-between ">
        <ul className="text-darkBlue w-[40%] flex items-center   justify-between text-[16px]">
          <li className="bg-darkBlue text-white flex items-center  py-1 pt-2 px-5 rounded-full ">
            <img className="h-[18px] relative  w-[18px] mr-2" src={icon} alt="icon-house" />
            <NavLink to="/addyourproperties"  activeClassName="active">
              <button className="text-[14px]" >اعرض عقارك</button>
            </NavLink>
          </li>
          <NavLink to="login" className="nav-link" activeClassName="active">
            <li className="text-darkBlue">تسجيل دخول</li>
          </NavLink>
          <li> <img className="h-10" src={En} alt="change language icon" /> </li>
          <NavLink to="/map" className="nav-link" activeClassName="active">
            <li>الخريطة</li>
          </NavLink>
          <NavLink to="/properties" className="nav-link" activeClassName="active">
            <li>العقارات</li>
          </NavLink>
          <NavLink to="/" exact className="nav-link" activeClassName="active">
            الرئيسية
          </NavLink>
        </ul>
        <div className="flex  items-center">
          <Link to="/"><img className="h-10 mr-6" src={logo} alt="soum logo" /></Link>
          <img onClick={() => setNavOpen(prv => !prv)} className="h-6 cursor-pointer" src={Menu} alt="hamburger menu" />
        </div>
      </nav>
      {navOpen && <ul className="absolute z-10 bg-darkBlue p-20 text-white text-[48px] text-right  w-full left-0 right-0  bottom-0 top-[4.8rem]">
        <Link to="/support" onClick={() => setNavOpen(false)}>
          <li className="cursor-pointer hover:text-cyan">الدعم</li>
        </Link>
        <Link to="/privacyPolicy" onClick={() => setNavOpen(false)}>
          <li className="cursor-pointer hover:text-cyan">سياسة الخصوصية</li>
        </Link>
        <Link to="/conditions" onClick={() => setNavOpen(false)}>
          <li className="cursor-pointer hover:text-cyan">الشروط و الأحكام</li>
        </Link>
        <li className="cursor-pointer hover:text-cyan">أسئلة شائعة</li>
      </ul>}
    </header>
  );
}

export default Navbar;

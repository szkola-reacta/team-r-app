import Logo from "./components/Logo";
import Section from "./components/Section";

import './Header.scss';

const Header = () => {
  return (
    <div className="Header">
      <Logo />
      <div className="Header__Sections">
        <Section sectionName="Europe" />
        <Section sectionName="The World" />
        <Section sectionName="Store" />
        <Section sectionName="Contact" />
      </div>
    </div>
  );
}

export default Header;

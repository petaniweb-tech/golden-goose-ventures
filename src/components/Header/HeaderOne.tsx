import React from "react";
import MenuOne from "./Menu/MenuOne";

interface HeaderOneProps {
  className?: string;
}

const HeaderOne: React.FC<HeaderOneProps> = ({ className = "" }) => {
  return (
    <header className={`${className} header-one`}>
      <MenuOne />
    </header>
  );
};

export default HeaderOne;

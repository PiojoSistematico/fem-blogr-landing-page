import { useState } from "react";
import arrowDark from "../assets/images/icon-arrow-dark.svg";
import arrowLight from "../assets/images/icon-arrow-light.svg";

type DropdownProps = {
  title: string;
  children: React.ReactNode;
};

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(): void {
    setIsOpen(!isOpen);
  }

  return (
    <li>
      <a href="#" className="dropdown" onClick={handleClick}>
        <span>{title}</span>
        <img src={isOpen ? arrowDark : arrowLight} alt="" className="arrow" />
      </a>
      {isOpen && <ul className="dropdown-content">{children}</ul>}
    </li>
  );
};

export default Dropdown;

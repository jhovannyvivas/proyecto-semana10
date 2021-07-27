import EnlacesHeader from "../EnlacesHeader/EnlacesHeader";
import Logo from "../logo/Logo";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      { <Logo></Logo> }
      { <EnlacesHeader/> }
    </header>
  );
}


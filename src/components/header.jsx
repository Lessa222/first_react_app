import Menu from "./menu";
export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">RZ Sarobidy</h1>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <button className="header__theme-toggle">
        <i className="fas fa-moon"></i> Dark Mode
      </button>
    </header>
  );
}
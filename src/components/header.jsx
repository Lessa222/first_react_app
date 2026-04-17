import Menu from "./menu";
export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <Menu />
      <button className="header__theme-toggle">
        <i className="fas fa-moon"></i> Dark Mode
      </button>
    </header>
  );
}
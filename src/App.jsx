import { useTranslation } from 'react-i18next';
import './i18n';
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Home from "./components/home";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Contact />
    </div>
  );
}
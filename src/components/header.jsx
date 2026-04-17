import Menu from "./menu";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-20 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-purple-600 dark:text-white">
        RZ Sarobidy
      </h1>
      <nav className="flex gap-4">
        <a href="home" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors px-2">home</a>
        <a href="about" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors px-2">about</a>
        <a href="contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors px-2">contact</a>
      </nav>
      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:border-purple-500 hover:text-purple-500 transition-all text-sm">
        <i className="fas fa-moon"></i> Dark Mode
      </button>
    </header>
  );
}
import myImage from '../assets/1.jpg';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 items-center justify-center px-10 py-16 gap-16">
      <div id="home" className="max-w-xl" >
        <p className="text-xl text-black-600 dark:text-black-400 font-medium mb-2">{t("hello")}</p>
        <h1 className="text-5xl md:text-6xl font-extrabold   leading-tight mb-4">
          RAZAFINDRATSIMBA<br />Henintsoa Sarobidy
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t("profile")}
        </p>
      </div>
      <img 
        src={myImage} 
        alt="Profile" 
        className="w-56 h-56 object-cover rounded-full border-4  shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
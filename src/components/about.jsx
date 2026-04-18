import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function About() {
    const name = "Sarobidy";
    const age = 22;
    const diploma = ["degree.first","degree.second", "degree.third"];
    const college = ["college.first","college.second", "college.third"];
    const { t } = useTranslation();

    return (
        <div id="about" className="max-w-3xl mx-auto px-10 py-16">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 ">{t("about")}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-justify">
              {t("propos1")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-justify">
                {t("propos2")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-justify">
                {t("propos3")}
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-4 text-center text-gray-900 ">{t("diplome")}</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                {diploma.map((item, index) => (
                    <li key={index} className="mb-2">
                        {t(item)}
                    </li>
                ))}
            </ul>
            <h2 className="text-2xl font-bold mt-6 mb-4 text-center text-gray-900 ">{t("colleges")}</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                {college.map((item, index) => (
                    <li key={index} className="mb-2">
                        {t(item)}
                    </li>
                ))}
            </ul>   
        </div>
    );
}
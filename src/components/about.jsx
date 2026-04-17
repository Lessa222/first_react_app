
export default function About() {
    const name = "Sarobidy";
    const age = 22;
    const diploma = ["Bachelor's Degree in Meteorology", "Bachelor's Degree in Computer Science", "First Year Master's Degree in Data Science"];
    const college = ["Ecole Nationale d'Enseignement de l'Aéronautique et de la Météorologie (ENEAM)",
         "Centre Nationale de Télé-enseignement de Madagascar (CNTEMAD)",
        "Ecole Nationale de l'Informatique (ENI Fianarantsoa)"];
    return (
        <div id="about" className="max-w-3xl mx-auto px-10 py-16">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 ">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-justify">
                I am a passionate meteorologist, software developer, and data scientist with a strong background in analyzing weather patterns and developing innovative solutions. With a deep understanding of atmospheric science and expertise in programming languages such as Python and R, I strive to create impactful applications that leverage data to improve weather forecasting and climate analysis.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-justify">
                My journey in meteorology began with a fascination for understanding the complexities of the atmosphere. Over the years, I have honed my skills in data analysis, machine learning, and software development to contribute to the field of meteorology. I am dedicated to using technology to enhance our understanding of weather phenomena and provide valuable insights for decision-making.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-justify">
                I am currently pursuing a First Year Master's Degree in Data Science, which complements my background in meteorology and software development. This interdisciplinary approach allows me to tackle complex problems at the intersection of atmospheric science and data analytics.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-4 text-center text-gray-900 ">Education</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                {diploma.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item}
                    </li>
                ))}
            </ul>
            <h2 className="text-2xl font-bold mt-6 mb-4 text-center text-gray-900 ">Colleges Attended</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                {college.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item}
                    </li>
                ))}
            </ul>   
        </div>
    );
}
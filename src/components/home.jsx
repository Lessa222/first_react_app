import myImage from '../assets/1.jpg';

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-10 py-16 gap-16">
      <div id="home" className="max-w-xl" >
        <p className="text-xl text-purple-600 dark:text-purple-400 font-medium mb-2">Hello, I am</p>
        <h1 className="text-5xl md:text-6xl font-extrabold   leading-tight mb-4">
          RAZAFINDRATSIMBA<br />Henintsoa Sarobidy
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Meteorologist, software developer and data scientist
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
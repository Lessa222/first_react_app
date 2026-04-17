import myImage from '../assets/1.jpg';

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <p className="home-content__greeting">Hello, I am</p>
        <h1 className="home-content__name">RAZAFINDRATSIMBA Henintsoa Sarobidy</h1>
        <p className="home-content__role">Meteorologist, software developer and data scientist</p>
      </div>
      <img src={myImage} alt="Profile" className="home-image" />
    </div>
  );
}
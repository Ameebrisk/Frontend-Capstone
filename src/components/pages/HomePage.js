import home from "../images/shane-VPiTy3mU6MU-unsplash.jpg";

function HomePage() {
  return (
    <div className="home-container">
      <h1> Welcome to my widget website</h1>
      <div className="home-image">
        <img src={home} alt="images/shane-VPiTy3mU6MU-unsplash.jpg" />
      </div>
    </div>
  );
}

export default HomePage;

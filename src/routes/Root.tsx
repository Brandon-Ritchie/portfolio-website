import headshot from "../assets/Headshot.jpg";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={headshot}
        alt="A headshot of Brandon Ritchie, the owner of this site."
        className="my-6 rounded-full"
      />
      <h1 className="text-6xl">Brandon Ritchie</h1>
      <p className="text-xl">Full Stack Developer</p>
      <p className="text-xl">Musician</p>
    </div>
  );
}

export default Home;

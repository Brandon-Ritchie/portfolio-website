import headshot from "../assets/Headshot.jpg";
import { Link } from "react-router-dom";

function Root() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={headshot}
        alt="A headshot of Brandon Ritchie, the owner of this site."
        className="my-6 rounded-full px-3"
      />
      <h1 className="mb-3 text-5xl">Brandon Ritchie</h1>
      <Link to="/software" className="btn btn-ghost text-xl">
        Full Stack Developer
      </Link>
      <Link to="/music" className="btn btn-ghost text-xl">
        Musician
      </Link>
    </div>
  );
}

export default Root;

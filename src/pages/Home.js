import { Sidebar, Cards } from "../components";
import { Link } from "react-router-dom";
const HomePage = ({ profile }) => {
  return (
    <div className="">
      <div>
        {profile && (
          <Hero
            title={profile.displayname}
            isShowmore={true}
            subtitle={profile.bio}
          />
        )}
      </div>
    </div>
  );
};
export const Hero = ({ title, subtitle, isShowmore = false }) => {
  return (
    <div className="bg-white border-2 m-2 rounded-lg">
      <div className=" flex p-3 align-center">
        <img
          src="https://i.pravatar.cc/300"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h1 className="text-2xl align-center">{title}</h1>
      </div>

      <h3>{subtitle}</h3>
      {isShowmore && (
        <Link
          to="/about"
          className="flex button-primary hover:bg-pink-600 text-white"
        >
          Know more
        </Link>
      )}
    </div>
  );
};
export default function Home({ profile }) {
  return (
    <div className="container mt-5 ml-2 mr-2 mb-2">
      <Sidebar />
      <HomePage profile={profile} />
      <Cards title="Projects" items={profile.projects} />
      <Cards title="Posts" items={profile.projects} />
    </div>
  );
}

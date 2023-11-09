import { Sidebar } from "../components";
const HomePage = ({ profile }) => {
  return (
    <div>
      {profile && <Hero title={profile.displayname} subtitle={profile.bio} />}
    </div>
  );
};
const Hero = ({ title, subtitle }) => {
  return (
    <div className="bg-white border-2 m-2 rounded-lg">
      <div>
        <img src="" width={200} height={200} />
      </div>
      <h1 className="text-2xl">{title}</h1>
      <h3>{subtitle}</h3>
      <a href="" className="flex button-primary hover:bg-pink-600 text-white">
        Know more
      </a>
    </div>
  );
};
export default function Home({ profile }) {
  return (
    <div className="container m-24">
      <Sidebar />
      <HomePage profile={profile} />
    </div>
  );
}

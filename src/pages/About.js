import { Hero } from "./Home";
export default function About({ profile }) {
  return (
    <div className="m-24 flex w-full">
      {profile && <Hero title={profile.displayname} subtitle={profile.bio} />}
    </div>
  );
}

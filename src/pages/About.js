import { Cards } from "../components";
import { Hero } from "./Home";
export default function About({ profile }) {
  return (
    <div className="m-24 w-full">
      <div className="grid md:grid-cols-2 border-2 ">
        {profile && <Hero title={profile.displayname} subtitle={profile.bio} />}
        <div className="w-full">
          <div className="tabs flex justify-left shadow-lg">
            <div>Education</div>
            <div>Experience</div>
            <div>Certificates</div>
          </div>
          <div>
            <div>Education</div>
            <div>Experience</div>
            <div>Certificates</div>
          </div>
        </div>
      </div>
      <div>
        <Cards title="Upcoming Projects" items={profile.hobbies} />
        <Cards title="Projects" items={profile.projects} />
        <Cards title="Posts" items={profile.articles} />
      </div>
    </div>
  );
}

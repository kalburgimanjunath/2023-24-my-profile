import { Cards } from "../components";
import { Hero } from "./Home";
const Education = ({ education }) => {
  return (
    <li>
      <div>{education.title}</div>
      <div>{education.college}</div>
      <div>{education.yearPass}</div>
    </li>
  );
};
const Experience = ({ experience }) => {
  return (
    <li>
      <div>{experience.title}</div>
      <div>{experience.company}</div>
      <div>{experience.fromYear}</div>
      <div>{experience.toYear}</div>
    </li>
  );
};
export default function About({ profile }) {
  return (
    <div className="m-24 w-full">
      <div className="grid md:grid-cols-2 border-2 ">
        {profile && <Hero title={profile.displayname} subtitle={profile.bio} />}
        <div className="">
          <div className="fixed right-0 tabs justify-left shadow-lg">
            <div>Education</div>
            <div>Experience</div>
            <div>Certificates</div>
          </div>
          <div>
            <ol>
              {profile &&
                profile.education &&
                profile.education.map((item) => {
                  return <Education key={item.id} education={item} />;
                })}
            </ol>
            <ol>
              {profile &&
                profile.experience &&
                profile.experience.map((item) => {
                  return <Experience key={item.id} experience={item} />;
                })}
            </ol>
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

import { Cards } from "../components";
import { Hero } from "./Home";
import React, { useState } from "react";
import Conference from "./Conference";
const Education = ({ education }) => {
  return (
    <li>
      <div className="font-bold">{education.title}</div>
      <div>{education.college}</div>
      <div>{education.yearPass}</div>
    </li>
  );
};
const Experience = ({ experience }) => {
  return (
    <li>
      <div className="font-bold">{experience.title}</div>
      <div>{experience.company}</div>
      <div>{experience.fromYear}</div>
      <div>{experience.toYear}</div>
    </li>
  );
};
export default function About({ profile }) {
  const [showEducationBlubs, setEducationBlubs] = useState("false");
  const [showExperienceBlubs, setExperienceBlubs] = useState("false");
  const showEducation = () => {
    setEducationBlubs(true);
    setExperienceBlubs(false);
  };
  const showExperience = () => {
    setEducationBlubs(false);
    setExperienceBlubs(true);
  };
  return (
    <div className="m-24 w-full">
      <div className="grid md:grid-cols-2 border-2 ">
        {profile && <Hero title={profile.displayname} subtitle={profile.bio} />}

        <div className="z-10">
          <div className="fixed border-2 right-0 tabs justify-left shadow-lg">
            <div
              onClick={() => {
                setEducationBlubs(true);
                setExperienceBlubs(false);
              }}
            >
              Education
            </div>
            <div
              onClick={() => {
                setEducationBlubs(false);
                setExperienceBlubs(true);
              }}
            >
              Experience
            </div>
            <div>Certificates</div>
          </div>
          <div className="fixed min-w-min p-5 text-left border-2 bg-white shadow-lg m-3">
            {showEducationBlubs && (
              <ol>
                {profile &&
                  profile.education &&
                  profile.education.map((item) => {
                    return <Education key={item.id} education={item} />;
                  })}
              </ol>
            )}
            {showExperienceBlubs && (
              <ol>
                {profile &&
                  profile.experience &&
                  profile.experience.map((item) => {
                    return <Experience key={item.id} experience={item} />;
                  })}
              </ol>
            )}
            <div>Certificates</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Conference />
        </div>
        <Cards title="Upcoming Projects" items={profile.hobbies} />
        <Cards title="Projects" items={profile.projects} />
        <Cards title="Posts" items={profile.articles} />
      </div>
    </div>
  );
}

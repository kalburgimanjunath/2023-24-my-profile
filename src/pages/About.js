import { Cards, GitProjects } from "../components";
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
const Certificate = ({ certificate }) => {
  return (
    <li>
      <div className="font-bold">{certificate.title}</div>
      <div>{certificate.url}</div>
    </li>
  );
};
export default function About({ profile }) {
  const [showEducationBlubs, setEducationBlubs] = useState("false");
  const [showExperienceBlubs, setExperienceBlubs] = useState("false");
  const [showCertificateBlubs, setCertificateBlubs] = useState("false");
  const showEducation = () => {
    setEducationBlubs(true);
    setExperienceBlubs(false);
    setCertificateBlubs(false);
  };
  const showExperience = () => {
    setEducationBlubs(false);
    setExperienceBlubs(true);
    setCertificateBlubs(false);
  };
  const showCertificates = () => {
    setEducationBlubs(false);
    setExperienceBlubs(false);
    setCertificateBlubs(true);
  };
  return (
    <div className="m-24 w-full">
      <div className="grid md:grid-cols-2 border-2 ">
        {profile && <Hero title={profile.displayname} subtitle={profile.bio} />}

        <div className="z-10">
          <div className="flex border-1 bg-white right-0 tabs justify-left shadow-lg">
            <div
              className={showEducationBlubs ? "underline" : ""}
              onClick={() => {
                setEducationBlubs(true);
                setExperienceBlubs(false);
                setCertificateBlubs(false);
              }}
            >
              Education
            </div>
            <div
              className={showExperienceBlubs ? "underline" : ""}
              onClick={() => {
                setEducationBlubs(false);
                setExperienceBlubs(true);
                setCertificateBlubs(false);
              }}
            >
              Experience
            </div>
            <div
              className={showCertificateBlubs ? "underline" : ""}
              onClick={() => {
                setEducationBlubs(false);
                setExperienceBlubs(false);
                setCertificateBlubs(true);
              }}
            >
              Certificates
            </div>
          </div>
          <div className="min-w-min p-5 text-left border-1 bg-white shadow-lg">
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
            {showCertificateBlubs && (
              <ol>
                {profile &&
                  profile.certificates &&
                  profile.certificates.map((item) => {
                    return <Certificate key={item.id} certificate={item} />;
                  })}
              </ol>
            )}
          </div>
        </div>
      </div>
      <div><GitProjects/></div>
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

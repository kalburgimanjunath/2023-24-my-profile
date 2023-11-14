import { Cards } from "../components";

export default function Products({ title, profile }) {
  return (
    <div className="m-20 w-full">
      <Cards title="Design" type="projects" items={profile.projects} />
      <Cards title="Development" type="projects" items={profile.projects} />
      <Cards title="Speeking" type="projects" items={profile.projects} />
      <Cards title="Articles" type="posts" items={profile.articles} />
      <Cards title="Upcoming Projects" type="hobbies" items={profile.hobbies} />
    </div>
  );
}

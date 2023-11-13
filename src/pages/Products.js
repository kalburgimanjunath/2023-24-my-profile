import { Cards } from "../components";

export default function Products({ title, profile }) {
  return (
    <div className="m-20 w-full">
      <Cards title="Projects" type="projects" items={profile.projects} />
      <Cards title="Posts" type="posts" items={profile.articles} />
      <Cards title="Upcoming Projects" type="hobbies" items={profile.hobbies} />
    </div>
  );
}

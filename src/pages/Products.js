import { Cards } from "../components";

export default function Products({ title, profile }) {
  return (
    <div className="m-20 w-full">
      <Cards title="Projects" items={profile.projects} />
      <Cards title="Posts" items={profile.projects} />
    </div>
  );
}

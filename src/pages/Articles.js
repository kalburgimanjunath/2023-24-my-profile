import { Cards } from "../components";

export default function Articles({ title, profile }) {
  return (
    <div className="m-20 w-full">
      <Cards title="Articles" items={profile.articles} />
    </div>
  );
}

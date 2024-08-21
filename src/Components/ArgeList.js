import ArgeTeams from "../Services/argeService";
import Arge from "./Arge";

export default function ArgeList() {
  return (
    <div className="grid grid-cols-2 gap-x-7 gap-y-5 w-[70%] max-sm:w-full max-md:grid-cols-1">
      {ArgeTeams.map((arge) => (
        <Arge arge={arge} key={arge.id} />
      ))}
    </div>
  );
}

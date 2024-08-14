import MemberProjects from "./MemberProjects";

export default function MemberProjectsList({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-y-32 gap-y-28 place-content-center sm:mt-24 mt-20">
      {projects.map((project) => (
        <MemberProjects project={project} key={project.id} />
      ))}
    </div>
  );
}

export default function MemberProjects({ project }) {
  return (
    <div className="flex flex-col gap-5  text-white relative bg-[#222125] rounded-2xl px-5 py-7">
      <img
        src={project.photoUrl}
        alt="placeholder"
        className="rounded-full w-40 absolute left-1/2 transform -translate-x-1/2 -top-[35%]"
      />

      <h3 className="text-4xl font-bold mt-[4.7rem]">{project.name}</h3>
      <p className="text-xl font-medium">{project.description}</p>
    </div>
  );
}

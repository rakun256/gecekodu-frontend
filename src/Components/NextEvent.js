export default function NextEvent({ team, activity, key }) {
  return (
    <div
      key={key}
      className="text-xl lg:text-4xl md:text-3xl sm:text-2xl text-black rounded-3xl bg-white px-3 py-1 sm:px-3 sm:py-2 md:px-[0.9rem] md:py-[0.6rem] lg:px-4 lg:py-3 flex gap-5  items-center"
    >
      <p className="font-bold">{team}</p> | <p>{activity}</p>
    </div>
  );
}

import { Link } from "react-router-dom";
import weeksData from "../../weeks.jsx";

export default function FirstPartHaml() {
  return (
    <div className="sticky top-0 z-20 backdrop-blur-sm py-3">
      <div className="mx-auto flex min-w-full items-center gap-3 overflow-x-auto whitespace-nowrap px-3 text-center font-bold text-white">
        {weeksData.map((item) => (
          <Link
            key={item.weekNumber}
            className="shrink-0 inline-flex cursor-pointer items-center justify-center rounded-full bg-[#75b8b2] px-5 py-3 text-center transition hover:bg-[#5aa79e]"
            to={`/HamlPart1/${item.weekNumber}`}
          >
            الأسبوع {item.weekNumber}
          </Link>
        ))}
      </div>
    </div>
  );
}

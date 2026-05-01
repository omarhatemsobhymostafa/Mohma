import react from 'react'
import { useParams } from "react-router-dom";
import FirstPartHaml from "./FirstPartHaml";
import weeksData from "../../weeks.jsx";

export default function WeekHamlPart1() {
  const { id } = useParams();
  const weekData = weeksData.find((w) => w.weekNumber === Number(id));
  const getLines = (text) =>
    text
      ?.split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean) || [];

  const babySizeList = getLines(weekData?.babySize);
  const whappenInBodyList = getLines(weekData?.WhappenInBody);
  const amIpregnancyList = getLines(weekData?.AmIpregnancy);
  const symptomList = getLines(weekData?.sympotyms);
  const babyLooksList = getLines(weekData?.babyLooks);
  const importantStepsList = getLines(weekData?.importantSteps);

  if (!weekData) {
    return <div className="text-center">جار التحميل...</div>;
  }

  return (
    <div className="m-5 ">
      <FirstPartHaml />

      <div className="text-center">
        <h2 className="text-[#f48a8a] font-black text-xl">
          الأسبوع {weekData.weekNumber}
        </h2>

        <div className="py-5 md:m-auto text-center md:text-right w-full md:w-1/2">
          {babySizeList.length > 0 && (
            <>
              <h2 className="text-[#f48a8a] font-black text-xl">حجم الجنين</h2>
              <div className="bg-[#75b8b2] p-5 text-white rounded-2xl my-5">
                <ol className=" list-inside text-right space-y-2 leading-relaxed">
                  {babySizeList.map((line, index) => (
                    <li key={index} className="text-right">
                      {line}
                    </li>
                  ))}
                </ol>
              </div>
            </>
          )}

          {whappenInBodyList.length > 0 && (
            <>
              <h2 className="text-[#f48a8a] font-black text-xl">ماذا يحدث في جسمي</h2>
              <div className="bg-[#75b8b2] p-5 text-white rounded-2xl my-5">
                <ol className=" list-inside text-right space-y-2 leading-relaxed">
                  {whappenInBodyList.map((line, index) => (
                    <li key={index} className="text-right">
                      {line}
                    </li>
                  ))}
                </ol>
              </div>
            </>
          )}

          {amIpregnancyList.length > 0 && (
            <>
              <h2 className="text-[#f48a8a] font-black text-xl">هل أنا حامل</h2>
              <div className="bg-[#75b8b2] p-5 text-white rounded-2xl my-5">
                <ol className=" list-inside text-right space-y-2 leading-relaxed">
                  {amIpregnancyList.map((line, index) => (
                    <li key={index} className="text-right">
                      {line}
                    </li>
                  ))}
                </ol>
              </div>
            </>
          )}

          {symptomList.length > 0 && (
            <>
              <h2 className="text-[#f48a8a] font-black text-xl">أعراض الحمل</h2>
              <div className="bg-[#75b8b2] p-5 text-white rounded-2xl my-5">
                <ol className=" list-inside text-right space-y-2 leading-relaxed">
                  {symptomList.map((line, index) => (
                    <li key={index} className="text-right">
                      {line}
                    </li>
                  ))}
                </ol>
              </div>
            </>
          )}

          {babyLooksList.length > 0 && (
            <>
              <h2 className="text-[#f48a8a] font-black text-xl">شكل الجنين</h2>
              <div className="bg-[#75b8b2] p-5 text-white rounded-2xl my-5">
                <ol className=" list-inside text-right space-y-2 leading-relaxed">
                  {babyLooksList.map((line, index) => (
                    <li key={index} className="text-right">
                      {line}
                    </li>
                  ))}
                </ol>
              </div>
            </>
          )}

          {importantStepsList.length > 0 && (
            <>
              <h2 className="text-[#f48a8a] font-black text-xl">خطوات مهمة</h2>
              <div className="bg-[#75b8b2] p-5 text-white rounded-2xl my-5">
                <ol className=" list-inside text-right space-y-2 leading-relaxed">
                  {importantStepsList.map((line, index) => (
                    <li key={index} className="text-right">
                      {line}
                    </li>
                  ))}
                </ol>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

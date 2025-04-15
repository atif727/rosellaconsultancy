import { Radio } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox";
import { useEffect, useState } from "react";

const options: CheckboxGroupProps<string>["options"] = [
  { label: "STUDENT", value: "STUDENT" },
  { label: "TOURIST", value: "TOURIST" },
  { label: "WORKING", value: "WORKING" },
];

type VisaData = {
  name: string;
  flagCode: string;
  studentVisa: {
    availableCourses: string[];
    courseDuration: string;
    visaDuration: string;
  };
  touristVisa: {
    placesToVisit: string[];
    visaDuration: string;
    description: string;
  };
  laborVisa: {
    visaDuration: string;
    monthlySalary: string;
    monthlySalaryBDT: string;
    potentialSpending: string;
    availableJobs: string[];
  };
};

function Countrys() {
  const [data, setData] = useState<VisaData[]>([]);

  useEffect(() => {
    fetch("/countrys.json")
      .then((res) => res.json())
      .then((json) => setData(json.countries))
      .catch((err) => console.error("Failed to fetch data:", err));
  }, []);

  const [visaType, setVisaType] = useState<string>("STUDENT");

  let countryContent: React.ReactNode;
  if (visaType === "STUDENT") {
    countryContent = (
      <div className="bg-gray-200 p-7 rounded-2xl h-full flex flex-wrap gap-6 justify-center">
        {data.map((country) => (
          <div
            key={country.name}
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <img
              src={`https://flagcdn.com/${country.flagCode}.svg`} // 'lv' = Latvia
              alt={country.name}
              loading="lazy"
              className="w-16 mb-2 h-auto"
            />
            <h2 className="text-xl font-bold mb-2 text-emerald-700">
              {country.name}
            </h2>
            <p className="text-lg font-semibold mt-2"> 🎓 Student Courses:</p>

            <div>
              <h1>Available Courses:</h1>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                {country.studentVisa.availableCourses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
            <p className="mt-2 text-sm">
              <span className="font-bold">Course Duration:</span>{" "}
              {country.studentVisa.courseDuration}
            </p>
            <p className="text-sm">
              <span className="font-bold">Visa Duration: </span>{" "}
              {country.studentVisa.visaDuration}
            </p>
          </div>
        ))}
      </div>
    );
  } else if (visaType === "TOURIST") {
    countryContent = (
      <div className="bg-gray-200 p-7 rounded-2xl h-full flex flex-wrap gap-6 justify-center">
        {data.map((country) => (
          <div
            key={country.name}
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <img
              src={`https://flagcdn.com/${country.flagCode}.svg`} // 'lv' = Latvia
              alt={country.name}
              loading="lazy"
              className="w-16 mb-2 h-auto"
            />
            <h2 className="text-xl font-bold mb-2 text-emerald-700">
              {country.name}
            </h2>
            <p className="text-lg font-semibold mt-2">
              {" "}
              ✈️ Tourist Spot Information:
            </p>

            <div>
              <h1>Available Tourist Spots:</h1>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                {country.touristVisa.placesToVisit.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
            <p className="mt-2 text-sm">
              <span className="font-bold">Brief Introduction:</span>{" "}
              {country.touristVisa.description}
            </p>
            <p className="text-sm">
              <span className="font-bold">Visa Duration: </span>
              {country.touristVisa.visaDuration}
            </p>
          </div>
        ))}
      </div>
    );
  } else if (visaType === "WORKING") {
    countryContent = (
      <div className="bg-gray-200 p-7 rounded-2xl h-full flex flex-wrap gap-6 justify-center">
        {data.map((country) => (
          <div
            key={country.name}
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <img
              src={`https://flagcdn.com/${country.flagCode}.svg`} // 'lv' = Latvia
              alt={country.name}
              loading="lazy"
              className="w-16 mb-2 h-auto"
            />

            <h2 className="text-xl font-bold mb-2 text-emerald-700">
              {country.name}
            </h2>
            <p className="text-lg font-semibold mt-2">
              {" "}
              🚧 Working Visa Information:
            </p>

            <div>
              <h1>Available Working Jobs:</h1>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                {country.laborVisa.availableJobs.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
            <p className="mt-2 text-sm">
              <span className="font-bold">Monthly Salary:</span>{" "}
              {country.laborVisa.monthlySalary} (
              {country.laborVisa.monthlySalaryBDT})
            </p>
            <p className="text-sm">
              <span className="font-bold">Potential Spending:</span>{" "}
              {country.laborVisa.potentialSpending}
            </p>
            <p className="text-sm">
              <span className="font-bold">Visa Duration: </span>
              {country.laborVisa.visaDuration}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center py-6 px-12">
        <h1 className="font-extrabold text-3xl">COUNTRYS LIST</h1>
        <div className=" gap-5 flex justify-center items-center">
          <h1 className="font-extrabold text-2xl">VISA TYPE</h1>
          <Radio.Group
            block
            options={options}
            defaultValue={visaType}
            optionType="button"
            buttonStyle="solid"
            onChange={(v) => {
              setVisaType(v.target.value);
            }}
          />
        </div>
      </div>
      {countryContent}
    </div>
  );
}

export default Countrys;

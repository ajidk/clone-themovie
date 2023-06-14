import { ChangeEvent, useState } from "react";
import { useAppSelector } from "../../../../app/hooks";
import Select from "react-select";

const Filter = () => {
  const { genres, languages } = useAppSelector((state) => state.movie);

  const objCountries = languages?.map((obj: { english_name: string }) => ({
    ...obj,
    value: obj.english_name,
    label: obj.english_name,
  }));

  const [shownMe, setShownMe] = useState("");

  const shownMeConfig = [
    {
      title: "Everything",
    },
    {
      title: "Movies I Haven't Seen",
    },
    {
      title: "Movies I Have Seen",
    },
  ];

  console.log(shownMe);

  const [allAvalibities, setAllAvalibities] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "Stream",
    "Free",
    "Ads",
    "Rent",
    "Buy",
  ]);

  const [date, setDate] = useState(true);
  const [selectDate, setSelectDate] = useState<string[]>([
    "Premiere",
    "Theatrical (limited)",
    "Theatrical",
    "Digital",
    "Physical",
    "TV",
  ]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const optionId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, optionId]);
    } else {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    }
  };

  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    const optionId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectDate([...selectDate, optionId]);
    } else {
      setSelectDate(selectDate.filter((item) => item !== optionId));
    }
  };

  const handleGenres = (item: string) => {
    console.log(item);

    // const item = event.target.value;
    // const isChecked = event.target.checked;
    // if (isChecked) {
    //   setSelectDate([...selectDate, optionId]);
    // } else {
    //   setSelectDate(selectDate.filter((item) => item !== optionId));
    // }
  };

  const availabilitiesConfig = [
    { title: "Stream" },
    { title: "Free" },
    { title: "Ads" },
    { title: "Rent" },
    { title: "Buy" },
  ];

  const datesConfig = [
    { title: "Premiere" },
    { title: "Theatrical (limited)" },
    { title: "Theatrical" },
    { title: "Digital" },
    { title: "Physical" },
    { title: "TV" },
  ];

  return (
    <main className="flex flex-col w-[260px] bg-white p-4">
      <section>
        <div className="mb-2 font-light">Show Me</div>
        {shownMeConfig.map((item, idx) => (
          <div className="form-control mb-2" key={`show_me-${idx}`}>
            <label className="flex items-start gap-x-3">
              <input
                type="radio"
                className="radio-primary radio"
                name="show_me"
                value={item.title}
                onChange={(e) => setShownMe(e.target.value)}
              />
              <span className="label-text">{item.title}</span>
            </label>
          </div>
        ))}
      </section>
      <section className="my-2">
        <div className="font-light">Availabilities </div>
        <div className="form-control mt-2">
          <label className="flex items-center gap-x-3">
            <input
              type="checkbox"
              className="checkbox"
              name="all_avalibities"
              value="Search all availabilities?"
              checked={allAvalibities}
              onChange={() => setAllAvalibities(!allAvalibities)}
            />
            <span className="label-text">Search all availabilities?</span>
          </label>
        </div>
        {availabilitiesConfig.map((item, idx) => (
          <div
            className={`form-control mt-2 ${allAvalibities && "hidden"}`}
            key={`availabilities-${idx}`}
          >
            <label className="flex items-center gap-x-3">
              <input
                type="checkbox"
                className="checkbox"
                name="ott_monetization_type"
                value={item.title}
                onChange={handleCheckboxChange}
                checked={selectedOptions.includes(item.title)}
              />
              <span className="label-text">{item.title}</span>
            </label>
          </div>
        ))}
      </section>
      <section className="my-2">
        <div className="font-light">Release Dates</div>
        <div className="form-control my-2">
          <label className="flex items-center gap-x-3">
            <input
              type="checkbox"
              className="checkbox"
              name="releases_date"
              checked={date}
              onChange={() => setDate(!date)}
            />
            <span className="label-text">Search all releases?</span>
          </label>
        </div>
        {datesConfig.map((item, idx) => (
          <div
            className={`form-control mt-2 ${date && "hidden"}`}
            key={`availabilities-${idx}`}
          >
            <label className="flex items-center gap-x-3">
              <input
                type="checkbox"
                className="checkbox"
                name="ott_date_type"
                value={item.title}
                onChange={handleChangeDate}
                checked={selectDate.includes(item.title)}
              />
              <span className="label-text">{item.title}</span>
            </label>
          </div>
        ))}
        <div className="flex justify-between items-center mb-2">
          from :{" "}
          <input
            type="date"
            className="px-2 py-1 rounded-lg flex items-center border"
          />
        </div>
        <div className="flex justify-between items-center">
          to :{" "}
          <input
            type="date"
            className="px-2 py-1 rounded-lg flex items-center border"
          />
        </div>
      </section>
      <section className="my-2">
        <div className="font-light">Genres</div>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {genres?.map((item: { name: string }, idx: string) => (
            <span
              className="px-4 py-1 rounded-2xl border cursor-pointer text-sm hover:bg-blue hover:text-white"
              key={`genres-${idx}`}
              onClick={() => handleGenres(item.name)}
            >
              {item.name}
            </span>
          ))}
        </div>
      </section>
      <section>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="text-black mb-2" htmlFor="">
            Languages
          </label>

          <Select
            options={objCountries}
            menuPlacement="auto"
            className="z-50"
          />
        </div>
      </section>
      <section>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="text-black mb-2" htmlFor="">
            Keyword
          </label>
          <input
            type="text"
            placeholder="filter by keywords"
            className="border rounded-lg bg-white px-3 py-2"
          />
        </div>
      </section>
    </main>
  );
};

export default Filter;

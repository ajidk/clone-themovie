import { useAppSelector } from "../../../../app/hooks";

const Filter = () => {
  const { genres, languages } = useAppSelector((state) => state.movie);
  return (
    <main className="flex flex-col">
      <section>
        <div className="mb-2 font-light">Show Me</div>
        <div className="form-control mb-2">
          <label className="flex items-start gap-x-3">
            <input
              type="radio"
              className="radio-primary radio"
              name="show_me"
              value="Everything"
            />
            <span className="label-text">Everything</span>
          </label>
        </div>
        <div className="form-control mb-2">
          <label className="flex items-start gap-x-3">
            <input
              type="radio"
              className="radio-primary radio"
              name="show_me"
              value="Movies I Haven't Seen"
            />
            <span className="label-text">Movies I Haven't Seen</span>
          </label>
        </div>
        <div className="form-control">
          <label className="flex items-start gap-x-3">
            <input
              type="radio"
              className="radio-primary radio"
              name="show_me"
              value="Movies I Have Seen"
            />
            <span className="label-text">Movies I Have Seen</span>
          </label>
        </div>
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
              checked
            />
            <span className="label-text">Search all availabilities?</span>
          </label>
        </div>
      </section>
      <section className="my-2">
        <div className="font-light">Release Dates</div>
        <div className="form-control my-2">
          <label className="flex items-center gap-x-3">
            <input
              type="checkbox"
              className="checkbox"
              name="all_avalibities"
              checked
            />
            <span className="label-text">Search all releases?</span>
          </label>
        </div>
        <div className="flex justify-between items-center mb-2">
          from :{" "}
          <input
            type="date"
            className="px-2 py-1 rounded-lg flex items-center"
          />
        </div>
        <div className="flex justify-between items-center">
          to :{" "}
          <input
            type="date"
            className="px-2 py-1 rounded-lg flex items-center"
          />
        </div>
      </section>
      <section className="my-2">
        <div className="font-light">Genres</div>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {genres?.map((item: { name: string }, idx: string) => (
            <span
              className="px-4 py-1 rounded-2xl border cursor-pointer text-sm"
              key={`genres-${idx}`}
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
          <select className="bg-white border px-2 py-3 rounded-lg">
            <option disabled selected>
              Pick one
            </option>
            {languages?.map((item: { english_name: string }, idx: string) => (
              <option key={`languages-${idx}`}>{item.english_name}</option>
            ))}
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
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

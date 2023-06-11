import { useAppSelector } from "../../../../app/hooks";

const Watch = () => {
  const { providers, countries } = useAppSelector((state) => state.movie);
  return (
    <div className="flex flex-col">
      <div className="form-control">
        <label className="flex items-start gap-x-3">
          <input type="checkbox" className="checkbox" />
          <span className="label-text">
            Restrict searches to my subscribed services?
          </span>
        </label>
      </div>
      <div className="form-control w-full max-w-xs mt-3">
        <label className="text-black mb-2" htmlFor="">
          Country
        </label>
        <select className="bg-white border px-2 py-3 rounded-lg">
          <option disabled selected>
            Pick one
          </option>
          {countries?.map((item: { english_name: string }, idx: string) => (
            <option key={`country-${idx}`}>{item.english_name}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-4 gap-3 items-center mt-4 overflow-scroll">
        {providers
          ?.slice(0, 132)
          ?.map(
            (
              item: { logo_path: string; provider_name: string },
              idx: string
            ) => (
              <img
                key={`provider-${idx}`}
                src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                alt={item.provider_name}
                className="rounded-lg"
              />
            )
          )}
      </div>
    </div>
  );
};

export default Watch;

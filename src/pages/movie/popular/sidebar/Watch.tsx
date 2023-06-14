import { useAppSelector } from "../../../../app/hooks";
import Select from "react-select";

const Watch = () => {
  const { providers, countries } = useAppSelector((state) => state.movie);

  const objCountries = countries?.map((obj: { english_name: string }) => ({
    ...obj,
    value: obj.english_name,
    label: obj.english_name,
  }));

  return (
    <div className="flex flex-col bg-white p-4">
      <div className="form-control">
        <label className="flex items-start gap-x-3">
          <input type="checkbox" className="checkbox" />
          <span className="label-text">
            Restrict searches to my subscribed services?
          </span>
        </label>
      </div>
      <div className="w-full max-w-xs my-3">
        <label className="text-black mb-2" htmlFor="">
          Country
        </label>
        <Select options={objCountries} />
      </div>
      <div className="grid grid-cols-4 gap-3 items-center mt-4 overflow-scroll">
        {providers
          ?.slice(0, 32)
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
                width={50}
                height={50}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Watch;

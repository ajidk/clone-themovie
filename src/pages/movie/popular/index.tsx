import { useQuery } from "react-query";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Accordion, CardMovie } from "../../../components";
import { cardMovieState } from "../../../components/Card";
import {
  getCountry,
  getPopularMovie,
  getProviderMovie,
} from "../../../feature/movie/action";

const Popular = () => {
  const dispatch = useAppDispatch();
  const { popular, providers, countries } = useAppSelector(
    (state) => state.movie
  );

  const { isLoading } = useQuery("popular-movie", () =>
    dispatch(getPopularMovie())
  );
  useQuery("providers-movie", () => dispatch(getProviderMovie()));
  useQuery("country", () => dispatch(getCountry()));
  console.log(countries);

  return (
    <main className="container mx-auto h-screen">
      {isLoading ? (
        "loading"
      ) : (
        <section className="flex gap-x-5">
          <div>
            <div className="min-w-[354px] rounded-lg drop-shadow mt-8 overflow-scroll">
              <Accordion
                title="Sort"
                content={
                  <div className="flex flex-col">
                    <div>Sort Result by</div>
                    <div className="form-control w-full max-w-xs mt-3">
                      <select className="bg-white border px-2 py-3 rounded-lg">
                        <option disabled selected>
                          Pick one
                        </option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                      </select>
                    </div>
                  </div>
                }
              />
              <Accordion
                title="Where To Watch"
                content={
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
                        {countries?.map(
                          (item: { english_name: string }, idx: string) => (
                            <option key={`country-${idx}`}>
                              {item.english_name}
                            </option>
                          )
                        )}
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
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
                }
              />
              <Accordion
                title="Filters"
                status={true}
                content={
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
                          <span className="label-text">
                            Movies I Haven't Seen
                          </span>
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
                          <span className="label-text">
                            Search all availabilities?
                          </span>
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
                          <span className="label-text">
                            Search all releases?
                          </span>
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
                  </main>
                }
              />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-start mt-8 px-4 overscroll-auto">
              {popular?.results?.map((item: cardMovieState, idx: string) => (
                <CardMovie
                  key={`popular-${idx}`}
                  poster_path={item.poster_path}
                  title={item.title}
                  release_date={item.release_date}
                  vote_average={String(item.vote_average)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Popular;

import { useQuery } from "react-query";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { CardMovie } from "../../../components";
import { cardMovieState } from "../../../components/Card";
import {
  getCountry,
  getGenres,
  getLanguages,
  getPopularMovie,
  getProviderMovie,
} from "../../../feature/movie/action";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import moment from "moment";

const Popular = () => {
  const dispatch = useAppDispatch();
  const { popular } = useAppSelector((state) => state.movie);

  const { isLoading } = useQuery("popular-movie", () =>
    dispatch(getPopularMovie())
  );
  useQuery("providers-movie", () => dispatch(getProviderMovie()));
  useQuery("country", () => dispatch(getCountry()));
  useQuery("genres", () => dispatch(getGenres()));
  useQuery("languages", () => dispatch(getLanguages()));

  return (
    <main className="container mx-auto h-screen px-10">
      {isLoading ? (
        "loading"
      ) : (
        <section className="flex items-start w-full">
          <div>
            <Sidebar />
            <button className="bg-blue text-xl w-full rounded-xl py-2 text-white mt-5">
              Search
            </button>
          </div>
          <div>
            <div className="pl-30 bg-transparent">
              <div className="w-full block py-30">
                <div className="-mt-30">
                  <div className="w-full flex justify-between flex-wrap">
                    <div className="flex flex-wrap justify-between w-full">
                      {popular?.results?.map(
                        (item: cardMovieState, idx: string) => (
                          <Link
                            key={`popular-${idx}`}
                            to={`/${item.id}-${item.title.replaceAll(
                              " ",
                              "-"
                            )}`}
                          >
                            <CardMovie
                              poster_path={item.poster_path}
                              title={item.title}
                              release_date={moment(item.release_date).format('MMMM DD, YYYY')}
                              vote_average={String(item.vote_average)}
                            />
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Popular;

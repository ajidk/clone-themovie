import moment from "moment";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { CardMovie, Header } from "../../../components";
import { cardMovieState } from "../../../components/Card";
import Loading from "../../../components/Loading";
import {
  getCountry,
  getGenres,
  getLanguages,
  getPopularMovie,
  getProviderMovie,
} from "../../../feature/movie/action";
import Sidebar from "./sidebar";
import MainLayout from "../../../components/Layouts";

const Popular = () => {
  const dispatch = useAppDispatch();
  const { popular, loading } = useAppSelector((state) => state.movie);

  useQuery("popular-movie", () => dispatch(getPopularMovie()));
  useQuery("providers-movie", () => dispatch(getProviderMovie()));
  useQuery("country", () => dispatch(getCountry()));
  useQuery("genres", () => dispatch(getGenres()));
  useQuery("languages", () => dispatch(getLanguages()));

  return (
    <MainLayout>
      <main className="max-w-7xl mx-auto h-screen overflow-scroll">
        {loading ? (
          <Loading />
        ) : (
          <section className="flex items-start w-full">
            <div className="hidden md:block">
              <Sidebar />
              <button className="bg-blue text-xl w-full rounded-xl py-2 text-white mt-5">
                Search
              </button>
            </div>
            <div>
              <div className="md:pl-30 bg-transparent">
                <div className="w-full block py-30">
                  <div className="-mt-30">
                    <div className="w-full flex justify-start md:justify-between flex-wrap">
                      <div className="flex flex-wrap justify-start gap-4 md:justify-between w-full">
                        {popular?.results?.map(
                          (item: cardMovieState, idx: string) => (
                            <Link
                              key={`popular-${idx}`}
                              to={`/movie/${item.id}-${item.title.replaceAll(
                                " ",
                                "-"
                              )}`}
                            >
                              <CardMovie
                                poster_path={item.poster_path}
                                title={item.title}
                                release_date={moment(item.release_date).format(
                                  "MMMM DD, YYYY"
                                )}
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
    </MainLayout>
  );
};

export default Popular;

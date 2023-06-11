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
    <main className="container mx-auto h-screen">
      {isLoading ? (
        "loading"
      ) : (
        <section className="flex gap-x-5">
          <div>
            <div className="min-w-[354px] w-[354px] rounded-lg drop-shadow mt-8 overflow-scroll">
              <Sidebar />
              <button className="bg-[#05B4E4] text-xl w-full rounded-xl py-2 text-white">
                Search
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-start mt-8 px-4 overscroll-auto">
              {popular?.results?.map((item: cardMovieState, idx: string) => (
                <Link
                  key={`popular-${idx}`}
                  to={`/${item.id}-${item.title.replaceAll(" ", "-")}`}
                >
                  <CardMovie
                    poster_path={item.poster_path}
                    title={item.title}
                    release_date={item.release_date}
                    vote_average={String(item.vote_average)}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Popular;

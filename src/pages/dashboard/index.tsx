import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IcBar } from "../../assets/svg";
import { CardMovie } from "../../components";
import { cardMovieState } from "../../components/Card";
import { updatePopular, updateTrending } from "../../feature/general/slice";
import { getMovieList, getTrendingAll } from "../../feature/movie/action";
import { searchTitle } from "../../utils/helper";
import CustomButton from "./component/button";

const dataTrending: { title: string }[] = [
  {
    title: "All",
  },
  {
    title: "Movie",
  },
  {
    title: "TV",
  },
];

const dataPopular: { title: string }[] = [
  {
    title: "Now Playing",
  },
  {
    title: "Popular",
  },
  {
    title: "Top Rated",
  },
  {
    title: "Upcoming",
  },
];

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { listTrending, listMovie } = useAppSelector((state) => state.movie);
  const { trending, popular } = useAppSelector((state) => state.general);

  const findTrending = searchTitle(dataTrending, trending);
  const findPopular = searchTitle(dataPopular, popular);

  console.log(findPopular);

  useEffect(() => {
    if (findTrending) {
      dispatch(getTrendingAll({ trending: findTrending }));
    }
  }, [dispatch, findTrending]);

  useEffect(() => {
    if (findPopular) {
      dispatch(getMovieList({ list: findPopular }));
    }
  }, [dispatch, findPopular]);

  useEffect(() => {
    dispatch(updateTrending(dataTrending[0]?.title));
    dispatch(updatePopular(dataPopular[0].title));
  }, [dispatch]);

  return (
    <main className="bg-white">
      <section
        className="bg-no-repeat bg-maxPrimaryPageWidth bg-landing max-w-[1300px] mx-auto py-5"
        style={{ backgroundImage: `url('${IcBar}')` }}
      >
        <div className="flex flex-wrap items-center justify-start gap-x-4">
          <h2 className="font-bold text-2xl text-black">Trending</h2>
          <CustomButton
            data={dataTrending}
            onHandleUpdate={updateTrending}
            update={trending}
          />
        </div>
        <div className="flex justify-start content-start items-center gap-x-5">
          <div className="flex gap-x-5  overflow-scroll relative">
            {listTrending?.map((item: cardMovieState, idx: string) => (
              <div
                className="min-w-[150px] max-w-[150px]"
                key={`tending-${idx}`}
              >
                <Link
                  to={`/${item?.id}-${String(item?.title).replaceAll(
                    " ",
                    "-"
                  )}`}
                >
                  <CardMovie
                    className="!border-none !bg-transparent !drop-shadow-none"
                    classNameImg="rounded-lg min-h-[226px]"
                    poster_path={item.poster_path}
                    release_date={String(
                      item.release_date
                        ? item.release_date
                        : item.first_air_date
                    )}
                    title={String(item.title ? item.title : item.name)}
                    vote_average={parseFloat(item?.vote_average).toFixed(1)}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-no-repeat bg-maxPrimaryPageWidth bg-landing max-w-[1300px] mx-auto py-5">
        <div className="flex flex-wrap items-center justify-start gap-x-4">
          <h2 className="font-bold text-2xl text-black">Movie List</h2>
          <CustomButton
            data={dataPopular}
            onHandleUpdate={updatePopular}
            update={popular}
          />
        </div>
        <div className="flex justify-start content-start items-center gap-x-5">
          <div className="flex gap-x-5  overflow-scroll relative">
            {listMovie?.map((item: cardMovieState, idx: string) => (
              <div
                className="min-w-[150px] max-w-[150px]"
                key={`tending-${idx}`}
              >
                <Link
                  to={`/${item?.id}-${String(item?.title).replaceAll(
                    " ",
                    "-"
                  )}`}
                >
                  <CardMovie
                    className="!border-none !bg-transparent !drop-shadow-none"
                    classNameImg="rounded-lg min-h-[226px]"
                    poster_path={item.poster_path}
                    release_date={String(
                      item.release_date
                        ? item.release_date
                        : item.first_air_date
                    )}
                    title={String(item.title ? item.title : item.name)}
                    vote_average={parseFloat(item?.vote_average).toFixed(1)}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IcBar } from "../../assets/svg";
import { CardMovie } from "../../components";
import { cardMovieState } from "../../components/Card";
import Loading from "../../components/Loading";
import {
  updatePopular,
  updateTrending,
  updateWatch,
} from "../../feature/general/slice";
import { getMovieList, getTrendingAll } from "../../feature/movie/action";
import { getListSeries } from "../../feature/tvSeries/action";
import { dataPopular, dataSeries, dataTrending } from "../../utils/datas";
import { searchTitle } from "../../utils/helper";
import CustomButton from "./component/button";
import MainLayout from "../../components/Layouts";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { listTrending, listMovie } = useAppSelector((state) => state.movie);
  const { trending, popular, watch } = useAppSelector((state) => state.general);
  const { listSeries, loading } = useAppSelector((state) => state.series);

  const findTrending = searchTitle(dataTrending, trending);
  const findPopular = searchTitle(dataPopular, popular);
  const findSeries = searchTitle(dataSeries, watch);

  // console.log(findSeries);

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
    if (findSeries) {
      dispatch(getListSeries({ series: findSeries }));
    }
  }, [dispatch, findSeries]);

  useEffect(() => {
    dispatch(updateTrending(dataTrending[0]?.title));
    dispatch(updatePopular(dataPopular[0].title));
    dispatch(updateWatch(dataSeries[0].title));
  }, [dispatch]);

  const [poster, setPoster] = useState("");

  const multiFaces = "https://image.tmdb.org/t/p/w1920_and_h427_multi_faces";

  const handleMouseEnter = (poster: string) => {
    setPoster(`${multiFaces}${poster}`);
  };

  return (
    <MainLayout>
      <main className="bg-white">
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            <section className="bg-darkBlue opacity-70 text-white max-w-[1300px] p-4 md:p-10 mx-auto mb-5">
              <h4 className="text-xl md:text-3xl">
                <span className="font-bold text-2xl md:text-4xl">Welcome</span>.{" "}
                <br />
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h4>
              <div className="bg-white rounded-3xl mt-4 md:mt-20 flex justify-between">
                <input
                  type="text"
                  placeholder="Search for a movie, tv show, person......"
                  className="bg-transparent w-full px-5 outline-none text-black"
                />
                <button className="rounded-r-3xl bg-green-400  py-3 px-8">
                  search
                </button>
              </div>
            </section>
            <section
              className="bg-no-repeat bg-maxPrimaryPageWidth bg-landing max-w-[1300px] px-4 md:p-0 mx-auto py-5"
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
                <div className="flex gap-x-5 overflow-scroll relative">
                  {listTrending?.map((item: cardMovieState, idx: string) => (
                    <div
                      className="min-w-[150px] max-w-[150px]"
                      key={`tending-${idx}`}
                    >
                      <Link
                        to={`/movie/${item?.id}-${String(
                          item?.title
                        ).replaceAll(" ", "-")}`}
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
                          vote_average={parseFloat(
                            String(item?.vote_average)
                          ).toFixed(1)}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section
              className={`max-w-[1300px] px-4 md:p-0 mx-auto`}
              style={{ backgroundImage: `url('${poster}')` }}
            >
              <div className={`py-5 ${poster !== "" && "md:px-10 my-5"}`}>
                <div className="flex flex-wrap items-center justify-start gap-x-4">
                  <h2 className="font-bold text-2xl">Latest Trailers</h2>
                  <CustomButton
                    data={dataSeries}
                    onHandleUpdate={updateWatch}
                    update={watch}
                  />
                </div>
                <div className="flex justify-start content-start items-center gap-x-5">
                  <div className="flex gap-x-5  overflow-scroll relative">
                    {listSeries?.map((item: cardMovieState, idx: string) => (
                      <div
                        className="min-w-[150px] max-w-[150px]"
                        key={`tending-${idx}`}
                        onMouseEnter={() => handleMouseEnter(item.poster_path)}
                        // onMouseLeave={handleMouseLeave}
                      >
                        <Link
                          to={`/movie/${item?.id}-${String(
                            item?.title
                          ).replaceAll(" ", "-")}`}
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
                            vote_average={parseFloat(
                              String(item?.vote_average)
                            ).toFixed(1)}
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`bg-no-repeat bg-maxPrimaryPageWidth bg-landing max-w-[1300px] px-4 md:p-0 mx-auto py-5`}
            >
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
                        to={`/movie/${item?.id}-${String(
                          item?.title
                        ).replaceAll(" ", "-")}`}
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
                          vote_average={parseFloat(
                            String(item?.vote_average)
                          ).toFixed(1)}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Fragment>
        )}
      </main>
    </MainLayout>
  );
};

export default Dashboard;

import { useQuery } from "react-query";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IcBar } from "../../assets/svg";
import { CardMovie } from "../../components";
import CustomButton from "./component/button";
import { getTrendingAll } from "../../feature/movie/action";
import { cardMovieState } from "../../components/Card";
import { updateStatus } from "../../feature/general/slice";
import { useEffect } from "react";

const dataTrending: { title: string }[] = [
  {
    title: "today",
  },
  {
    title: "thisweek",
  },
];

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { listTrending } = useAppSelector((state) => state.movie);
  const { trending } = useAppSelector((state) => state.general);
  const value = trending === "today" ? "day" : "week";
  console.log(trending);

  useQuery("trending", () => dispatch(getTrendingAll({ trending: value })));

  useEffect(() => {
    dispatch(updateStatus(dataTrending[0]?.title));
  }, [dispatch]);

  // console.log(listTrending);

  return (
    <main className="bg-white">
      <section
        className="bg-no-repeat bg-maxPrimaryPageWidth bg-landing max-w-[1300px] mx-auto py-5"
        style={{ backgroundImage: `url('${IcBar}')` }}
      >
        <div className="flex flex-wrap items-center justify-start gap-x-4">
          <h2 className="font-bold text-2xl text-black">Trending</h2>
          <CustomButton data={dataTrending} />
        </div>
        <div className="flex justify-start content-start items-center gap-x-5">
          <div className="flex gap-x-5  overflow-scroll relative">
            {listTrending?.map((item: cardMovieState, idx: string) => (
              <div
                className="min-w-[150px] max-w-[150px]"
                key={`tending-${idx}`}
              >
                <CardMovie
                  className="!border-none !bg-transparent !drop-shadow-none"
                  classNameImg="rounded-lg min-h-[226px]"
                  poster_path={item.poster_path}
                  release_date={String(
                    item.release_date ? item.release_date : item.first_air_date
                  )}
                  title={String(item.title ? item.title : item.name)}
                  vote_average={parseFloat(item?.vote_average).toFixed(1)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

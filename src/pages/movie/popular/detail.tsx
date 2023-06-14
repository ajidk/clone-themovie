import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getDetailMovie } from "../../../feature/movie/action";
import moment from "moment";
import ProgressCircle from "../../../components/Card/ProgressCircle";
import { TfiMenuAlt } from "react-icons/tfi";
import {
  BsHeartFill,
  BsFillBookmarkFill,
  BsFillStarFill,
  BsFillPlayFill,
} from "react-icons/bs";

const Detail = () => {
  const { movie_id } = useParams();
  const dispatch = useAppDispatch();
  const { detailMovie } = useAppSelector((state) => state.movie);

  const movie = movie_id?.split("-").find((_item, idx) => idx === 0);

  useQuery("detail-movie", () =>
    dispatch(getDetailMovie({ movie_id: String(movie) }))
  );

  const url = "https://image.tmdb.org/t/p/original";

  const duration = moment.duration(detailMovie?.runtime, "minutes");
  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();
  console.log(detailMovie);

  return (
    <main>
      <section
        className={`border-b border-solid w-full relative  bg-cover bg-no-repeat bg-customLeft`}
        style={{
          backgroundImage: `url('${url.concat(detailMovie?.backdrop_path)}')`,
        }}
      >
        <div className="w-full mx-auto mt-5 bg-customprimary">
          <div className="container px-20 py-10 mx-auto max-w-[1440px] flex gap-8">
            <div>
              <img
                src={url.concat(detailMovie?.poster_path)}
                alt={detailMovie?.title}
                className="min-w-[300px] h-[450px] rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-3xl text-white">
                <Link to={"/"}>{detailMovie?.title}</Link>{" "}
                <span className="font-light">
                  ( {moment(detailMovie?.release_date).format("YYYY")} )
                </span>
              </h3>
              <div className="flex items-center gap-x-2 text-white font-light">
                {moment(detailMovie?.release_date).format('MMMM DD, YYYY')}{" "}
                <div className="w-1 h-1 rounded-full bg-white" />
                {detailMovie?.genres?.map(
                  (item: { name: string }, idx: string | number) => (
                    <span key={`genres-${idx}`}>
                      {item.name}
                      {idx === detailMovie?.genres?.length - 1 ? "" : ", "}
                    </span>
                  )
                )}
                <div className="w-1 h-1 rounded-full bg-white" />
                {` ${hours}h ${minutes}m`}
              </div>
              <div className="my-4 flex items-center gap-4">
                <ProgressCircle
                  vote_average={String(detailMovie?.vote_average.toFixed(1))}
                />
                <div className="capitalize text-white">
                  <h4>user</h4> <h4>score</h4>
                </div>
                <div className="flex gap-x-8 ml-4 items-center">
                  <TfiMenuAlt className="text-xl" />
                  <BsHeartFill className="text-xl" />
                  <BsFillBookmarkFill className="text-xl" />
                  <BsFillStarFill className="text-xl" />
                  <span className="flex gap-x-2 items-center">
                    <BsFillPlayFill className="text-xl" />
                    play trailer
                  </span>
                </div>
              </div>
              <div className="italic">{detailMovie?.tagline}</div>
              <div className="text-white">
                <div className="text-lg font-bold">Overview</div>
                <div className="text-sm">{detailMovie?.overview}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Detail;

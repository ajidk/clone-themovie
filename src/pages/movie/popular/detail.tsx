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
import { CardMovie } from "../../../components";
import { useState } from "react";

const icons = [
  {
    icon: <TfiMenuAlt className="text-sm" />,
  },
  {
    icon: <BsHeartFill className="text-sm" />,
  },
  {
    icon: <BsFillBookmarkFill className="text-sm" />,
  },
  {
    icon: <BsFillStarFill className="text-sm" />,
  },
];

const dSocial = [
  {
    title: "review",
    desc: "We don't have any reviews for My Fault. Would you like to write one?",
  },
  {
    title: "discussions",
    desc: "Want to be notified when someone makes the first post? Yes, notify me!",
  },
];

const Detail = () => {
  const { movie_id } = useParams();
  const dispatch = useAppDispatch();
  const { detailMovie } = useAppSelector((state) => state.movie);
  const [social, setSocial] = useState(dSocial[0].title);
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
        className={`border-b border-solid w-full relative  bg-cover bg-no-repeat bg-customLeft text-white`}
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
                {moment(detailMovie?.release_date).format("MMMM DD, YYYY")}{" "}
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
                <div className="flex gap-x-5 ml-4 items-center">
                  {icons.map((item, idx) => (
                    <div
                      className="bg-blue rounded-full p-4 flex justify-center items-center cursor-pointer"
                      key={`icon-${idx}`}
                    >
                      {item.icon}
                    </div>
                  ))}
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
      <section className="px-20 py-8 mx-auto max-w-[1440px] gap-4 grid grid-cols-12">
        <div className="col-span-9">
          <h3 className="capitalize text-2xl font-semibold">top bill cast</h3>
          <div className="flex justify-start content-start items-center pb-5 gap-x-5">
            <div className="flex gap-4 overflow-scroll">
              {Array(20)
                .fill("oke")
                .map((_item, idx) => (
                  <div
                    className="min-w-[150px] max-w-[150px]"
                    key={`bill-top-${idx}`}
                  >
                    <CardMovie
                      poster_path={url.concat(detailMovie?.backdrop_path)}
                      release_date="Noah Morgan"
                      title="title"
                    />
                  </div>
                ))}
            </div>
          </div>
          <h3 className="capitalize text-gray-400">Full Cast & Crew</h3>
          <div className="flex justify-start items-start gap-x-8 mt-5">
            <h4 className="font-semibold text-lg capitalize">social</h4>
            <div className="flex gap-x-4 items-center">
              {dSocial.map((item, idx) => (
                <h4
                  className={`font-medium text-base capitalize ${
                    item.title === social
                      ? "border-b-2 border-b-black cursor-no-drop"
                      : "cursor-pointer"
                  } pb-2`}
                  key={`dsocial-${idx}`}
                  onClick={() => setSocial(item.title)}
                >
                  {item.title} 0
                </h4>
              ))}
            </div>
          </div>
          {dSocial.map(
            (item, idx) =>
              item.title === social && (
                <div key={`desc-social-${idx}`} className="mt-3">
                  {item.desc}
                </div>
              )
          )}
          <h3 className="capitalize text-gray-400 mt-4 cursor-pointer">
            go to discussions
          </h3>
          <div className="flex justify-start items-start gap-x-8 mt-5">
            <h4 className="font-semibold text-lg capitalize">media</h4>
            <div className="flex gap-x-4 items-center">
              {dSocial.map((item, idx) => (
                <h4
                  className={`font-medium text-base capitalize ${
                    item.title === social
                      ? "border-b-2 border-b-black cursor-no-drop"
                      : "cursor-pointer"
                  } pb-2`}
                  key={`dsocial-${idx}`}
                  onClick={() => setSocial(item.title)}
                >
                  {item.title} 0
                </h4>
              ))}
            </div>
          </div>
          <div className="mt-3">des</div>

          <h3 className="capitalize text-2xl font-semibold mt-5">
            recomendations
          </h3>
          <div className="mt-3">des</div>
        </div>
        <div className="col-span-3 bg-red-500 flex flex-col gap-y-5">
          <div>
            <h5 className="capitalize font-semibold">origina mate</h5>
            <p>Culpa mía</p>
          </div>
          <div>
            <h5 className="capitalize font-semibold">Status</h5>
            <p>Culpa mía</p>
          </div>
          <div>
            <h5 className="capitalize font-semibold">Budget</h5>
            <p>Culpa mía</p>
          </div>
          <div>
            <h5 className="capitalize font-semibold">Revenue</h5>
            <p>Culpa mía</p>
          </div>
          <div>
            <h5 className="capitalize font-semibold">Keywords</h5>
            <p className="flex flex-wrap gap-2 mt-2">
              {Array(10)
                .fill("oke")
                .map((item, idx) => (
                  <span
                    className="bg-gray-300 rounded-lg px-4 py-1"
                    key={`keywords-${idx}`}
                  >
                    badge
                  </span>
                ))}
            </p>
          </div>

          <div>
            <h5 className="capitalize font-semibold">content score</h5>
            <p className="bg-black text-white rounded-lg px-2 py-1 mt-2">100</p>
            <span className="text-sm">Yes! Looking good!</span>
          </div>

          <div>
            <h5 className="capitalize font-semibold mb-2">top contributor</h5>
            <p>
              {Array(4)
                .fill("oke")
                .map((item, idx) => (
                  <div
                    className="flex items-center gap-x-4 mb-2"
                    key={`contributor-${idx}`}
                  >
                    <img
                      src="https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original/1inZm0xxXrpRfN0LxwE2TXzyLN6.jpg"
                      alt="contributor"
                      className="rounded-full object-cover w-10 !h-10"
                    />
                    <div className="leading-3">
                      <h4 className="font-semibold">title</h4>
                      <p className="text-sm">desc</p>
                    </div>
                  </div>
                ))}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Detail;

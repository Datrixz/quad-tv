import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDoubleArrow, MdSearch } from "react-icons/md";
import { SiSpinrilla } from "react-icons/si";
const Main = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("all");
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.tvmaze.com/search/shows", {
        params: {
          q: search,
        },
      })
      .then((response) => {
        response.data.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        // setIsEmpty(true)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  const loadingText = (
      <div className="flex-1 flex items-center justify-center text-4xl font-semibold font-opensans">
        <span>
          {" "}
          <SiSpinrilla className="animate-spin inline-block" /> Loading...{" "}
        </span>
      </div>
    );
  

  const emptyPage = (
      <>
        <h1>Nothing to show here...</h1>
      </>
    );
  

  const cards = data.map((ele) => {
    let genrelen = ele.show.genres.length - 1;
    return (
      <div
        key={ele.show.id}
        className="rounded-lg p-2 flex flex-col md:flex-row items-center shadow-md  transition ease-in-out delay-50 hover:-translate-y-2 hover:shadow-xl duration-200 h-full"
      >
        <img
          src={ele.show?.image?.original || "http://placehold.jp/cccccc/999999/480x720.png?text=No%20Image%20Found"}
          alt=""
          className="w-auto md:w-[20%] h-auto"
        />
        <div className="flex flex-col justify-evenly p-8 font-opensans flex-1">
          <div className="text-xl font-semibold mb-2"> {ele.show?.name}</div>
          <div className="text-sm text-gray-500">
            {ele.show?.language} | rating: {ele.show?.rating?.average || "N.A "}
            /10
          </div>
          <div className="text-sm">
            <span className="font-semibold">Genre:</span>{" "}
            {ele.show?.genres.map((item, index) => {
              return (
                <>
                  {item}
                  {index < genrelen && " / "}
                </>
              );
            })}
          </div>
          <a href="" className="group no-underline text-red-600">
            Click to know more{" "}
            <MdDoubleArrow className="inline group-hover:animate-ping" />
          </a>
        </div>
      </div>
    );
  });
  return (
    <>
      <form onSubmit={(e)=>e.preventDefault} className="my-6 w-full flex justify-center items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-none outline-none outline-black outline-1 p-2 rounded-l-full"
        />
        <MdSearch type="submit" className="inline-block bg-blue-500 text-white min-h-full h-[46px] w-auto border border-black border-1 border-l-0 rounded-r-full p-1" />
      </form>

      {loading ? (
        loadingText
      ) : ( isEmpty ? emptyPage :
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-6">{cards}</div>
      )}
    </>
  );
};

export default Main;

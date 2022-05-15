import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDoubleArrow, MdSearch } from "react-icons/md";
import { SiSpinrilla } from "react-icons/si";
import { Link, useSearchParams } from "react-router-dom";
const Main = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams({ search: "all" });

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.tvmaze.com/search/shows", {
        params: {
          q: searchParams.get("search"),
        },
      })
      .then((response) => {
        response.data.length === 0 ? setIsEmpty(true) : setIsEmpty(false);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearchParams({ search: search });
  };

  const loadingText = (
    <div className="flex-1 flex items-center justify-center text-4xl font-semibold font-opensans">
      <span>
        {" "}
        <SiSpinrilla className="animate-spin inline-block" /> Loading...{" "}
      </span>
    </div>
  );

  const emptyPage = (
    <div className="w-screen flex-1 flex items-center justify-center text-2xl md:text-4xl font-semibold font-opensans">
      <h1>Nothing to show here...</h1>
    </div>
  );

  const cards = data.map((ele) => {
    let genrelen = ele.show.genres.length - 1;
    return (
      <div
        key={ele.show?.id}
        className="rounded-lg p-2 flex flex-col md:flex-row items-start shadow-md  transition ease-in-out delay-50 hover:-translate-y-2 hover:shadow-xl duration-200 h-full"
      >
        <img
          src={
            ele.show?.image?.original ||
            "http://placehold.jp/cccccc/999999/480x720.png?text=No%20Image%20Found"
          }
          alt=""
          className="w-auto md:w-[20%] h-auto/ self-center"
        />
        <div className="flex flex-col justify-evenly p-8 font-opensans flex-1">
          <div className="text-2xl font-semibold mb-8"> {ele.show?.name}</div>
          <div className="text-md text-gray-500">
            {ele.show?.language} | rating: {ele.show?.rating?.average || "N.A "}
            /10
          </div>
          <div className="text-md my-2">
            <span className="font-semibold">Genre:</span>{" "}
            {ele.show?.genres.map((item, index) => {
              return (
                <div className="inline-block" key={index}>
                  {item}
                  {index < genrelen && " / "}
                </div>
              );
            })}
          </div>
          <Link
            to={"/shows/"+ele.show?.id+"/"+ele.show?.name}
            className="text-left group no-underline text-red-600"
          >
            Click to know more{" "}
            <MdDoubleArrow className="inline group-hover:animate-ping" />
          </Link>
        </div>
      </div>
    );
  });
  return (
    <>
      <h1 className="text-center font-opensans font-semibold text-lg mt-6">
        Search for your favourite shows :
      </h1>
      <form
        onSubmit={onSubmitHandler}
        className="mb-6 mt-3 w-full flex justify-center items-center"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[30vw] min-w-[250px] border-none outline-none outline-black outline-1 py-2 px-4 rounded-l-full"
        />
        <button type="submit">
          <MdSearch className="inline-block bg-blue-500 text-white min-h-full h-[46px] w-auto border border-black border-1 border-l-0 rounded-r-full p-1" />
        </button>
      </form>

      {loading ? (
        loadingText
      ) : isEmpty ? (
        emptyPage
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-6">
          {cards}
        </div>
      )}
    </>
  );
};

export default Main;

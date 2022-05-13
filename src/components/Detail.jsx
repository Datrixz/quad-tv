import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SiSpinrilla } from "react-icons/si";

const Detail = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const goBack = () => {
    navigate(-1);
  };
  let { showId } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center text-4xl font-semibold font-opensans">
        <span>
          {" "}
          <SiSpinrilla className="animate-spin inline-block" /> Loading...{" "}
        </span>
      </div>
    );
  }

  let genrelen = data.genres.length - 1;

  return (
    <div>
      {/* HEADING SECTION  */}

      <div className="text-4xl font-bold my-3 text-center">
        {data?.name}
      </div>
      <div className="flex flex-col md:flex-row items-start font-opensans p-8 pt-1 rounded-2xl shadow-2xl">
        {/* IMAGE SECTION */}

        <img
          src={
            data.image?.original ||
            "http://placehold.jp/cccccc/999999/480x720.png?text=No%20Image%20Found"
          }
          alt=""
          className="self-center md:max-h-[70vh] rounded-lg"
        />

        {/* DETAILS SECTION */}

        <div className="py-6 md:px-6">
          <div className="">
            <b> Language:</b> {data?.language}{" "}
          </div>
          <div className="">
            <b> Rating: </b>
            {data?.rating?.average || "N.A "}
            /10
          </div>
          <div>
            {" "}
            <b> Premier Date </b>: {data?.premiered}
          </div>
          <div>
            {" "}
            <b> Status</b> :{" "}
            {data.status[0] === "E" ? (
              <span className="text-red-500 font-semibold">Ended</span>
            ) : (
              <span className="text-green-500 font-semibold">Running</span>
            )}
          </div>
          <div className="text-md">
            <span className="font-bold">Genre:</span>
            {"  "}
            {data?.genres.map((item, index) => {
              return (
                <div className="inline-block" key={index}>
                  {item}
                  {index < genrelen && " / "}
                </div>
              );
            })}
          </div>
          <div>
            <b> Days </b>:{" "}
            {data.schedule.days.map((ele, ind) => {
              return <span>{ele}</span>;
            })}
          </div>
          <div>
            {" "}
            <b> Timing </b>: {data.schedule.time}
          </div>
          <div>
            {" "}
            <b> Summary </b>: {data.summary}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

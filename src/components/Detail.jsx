import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SiSpinrilla } from "react-icons/si";

const Detail = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const titleStyle = "font-bold md:text-2xl font-nunito"

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
    <div className="flex flex-col items-center">
      {/* HEADING SECTION  */}

      <div className="text-4xl font-bold my-3">
        {data?.name}
      </div>
      <div className="flex flex-col md:flex-row font-opensans items-start p-8 rounded-2xl shadow-lg text-lg border-2 w-4/5">
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
          <div>
            <span className={titleStyle}> Language:</span> {data?.language}
          </div>
          <div>
            <span className={titleStyle}> Rating: </span>
            {data?.rating?.average || "N.A "}
            /10
          </div>
          <div>
            <span className={titleStyle}> Premier Date </span>: {data?.premiered}
          </div>
          <div>
            <span className={titleStyle}> Status</span> :
            {data.status[0] === "E" ? (
              <span className="text-red-600 font-bold">Ended</span>
            ) : (
              <span className="text-green-600 font-bold">Running</span>
            )}
          </div>
          <div className="text-md">
            <span className={titleStyle}>Genre:</span>
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
            <span className={titleStyle}> Days </span>:
            {data.schedule.days.map((ele, ind) => {
              return <span key={ind}>{ele}</span>;
            })}
          </div>
          <div>
            <span className={titleStyle}> Timing </span>: {data.schedule.time}
          </div>
          <div>
            <span className={titleStyle}> Summary </span>:<div dangerouslySetInnerHTML={{__html: data.summary}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

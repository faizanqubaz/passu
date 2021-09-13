import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./news.css";

const News = () => {
  const [slicedIndex, setSlicedIndex] = useState(0);
  const [news, setNews] = useState([
    {
      date: "9 july 2009",
      head: "6 Tips on Booking the Best ",
      para: "Travelers today are spoiled...",
      heads: "Read More",
    },
    {
      date: "11 july 2010",
      head: "Visiting the best Place ",
      para: "Travelers today are spoiled...",
      heads: "Read More",
    },
    {
      date: "12 july 2011",
      head: "Hiking on the top of Mountains ",
      para: "Travelers today are spoiled...",
      heads: "Read More",
    },
    {
      date: "12 july 2012",
      head: "Loving Caring Days ",
      para: "Travelers today are spoiled...",
      heads: "Read More",
    },
    {
      date: "12 july 2013",
      head: "Happy Fathers day ",
      para: "Travelers today are spoiled...",
      heads: "Read More",
    },
    {
      date: "12 july 2014",
      head: "6 Tips on Booking the Best ",
      para: "Travelers today are spoiled...",
      heads: "Read More",
    },
    {
      date: "12 july 2015",
      head: "6 Tips on Booking the Best ",
      para: "Travelers today are spoiled...",
      heads: "Read More",
    },
    {
      date: "12 july 2016",
      head: "6 Tips on Booking the Best ",
      para: "Travelers today are spoiled...",
      heads: "Read More",
    },
    {
      date: "12 july 2017",
      head: "6 Tips on Booking the Best ",
      para: "Travelers today are spoiled...",
      heads: "Read More",
    },
    {
      date: "12 july 2018",
      head: "6 Tips on Booking the Best ",
      para: "Travelers today are spoiled...",
      heads: "Read More",
    },
		{
      date: "12 july 2019",
      head: "6 Tips on Booking the Best ",
      para: "Travelers today are spoiled...",
      heads: "Read More",
    },
  ]);

  const changeItems = (index) => {
	
    setSlicedIndex(index + 3);
  };

  return (
    <>
      <div className="news_slider">
        <div className="news_container">
          <div className="news_head">
            <h2 className="news_heading">Recent News</h2>
          </div>

          <div className="news_contants">
            {news.slice(slicedIndex, slicedIndex + 3).map((data) => (
              <div className="news_content">
                <button className="news_content_btn">{data.date}</button>
                <h3>{data.head}</h3>
                <p>{data.para}</p>
                <div className="news_icon_contents">
                  <h3 className="news_icon_head">{data.heads}</h3>
                  <i>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </i>
                </div>
              </div>
            ))}

          </div>
     
          <div className="newss">
						{

							[...Array(Math.floor(news.length/3))].map((item,index)=>(
							
								<div onClick={()=>changeItems(index)} className="news_dot"></div>

							))
						}
    
          </div>
        </div>
      </div>
    </>
  );
};

export default News;

import React, { useEffect, useState } from "react";
import VideoCard from "../Components/VideoCard";
import style from "../assets/css/clips.module.scss";

function VideoSection() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    //api Key missing
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=&part=snippet,id&order=date&maxResults=20"
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, []);

  return (
    <div className={style.videocontainer}>
      {videos?.map((video, i) => (
        <VideoCard key={i} data={video} />
      ))}
    </div>
  );
}

export default VideoSection;

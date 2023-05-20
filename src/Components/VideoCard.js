import React from "react";
import style from "../assets/css/clips.module.scss";
function VideoCard({ data }) {
  const { snippet } = data;
  const { medium } = snippet.thumbnails;
  const { title } = snippet;

  return (
    <div className={style.videoWrapper}>
      <img src={medium.url} alt="" />
      <div>
        <h2>{title}</h2>
        <p>Chanel Name</p>
        <span>88k views5 months ago</span>
      </div>
    </div>
  );
}

export default VideoCard;
//AIzaSyC4JMXtOWAiytdpZHnZWOdEzLc2Fp98Fuo
//https://www.googleapis.com/youtube/v3/search?key=AIzaSyC4JMXtOWAiytdpZHnZWOdEzLc2Fp98Fuo&part=snippet,id&order=date&maxResults=20
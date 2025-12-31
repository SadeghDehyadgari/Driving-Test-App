import "../styles/MediaDisplay.css";

const MediaDisplay = ({ type, image, video, autoPlayVideo = true }) => {
  return (
    <div className="media-display">
      {type === "image" && (
        <img src={image} alt="question" className="media-image" />
      )}
      {type === "video" && (
        <video
          controls
          autoPlay={autoPlayVideo}
          muted={autoPlayVideo}
          className="media-video"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default MediaDisplay;

import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // placeholder if no images at all
import "./ImageSlider.css";

function Sliderr({ images, altText }) {
  const [index, setIndex] = useState(0);
  const [isFull, setIsFull] = useState(false); // full-screen mode
  const [workingImages, setWorkingImages] = useState([]);

  // Preload images and filter out broken ones
  useEffect(() => {
    if (!images || images.length === 0) {
      setWorkingImages([]); // no images at all
      return;
    }

    let loaded = [];
    let count = 0;

    images.forEach((img, i) => {
      const imageObj = new Image();
      imageObj.src = img;
      imageObj.onload = () => {
        loaded.push(img);
        count++;
        if (count === images.length) setWorkingImages(loaded);
      };
      imageObj.onerror = () => {
        count++;
        if (count === images.length) setWorkingImages(loaded);
      };
    });
  }, [images]);

  if (workingImages.length === 0) {
    // fallback placeholder
    return (
      <div className="image-slider-wrapper">
        <div className="main-image placeholder-icon">
          <FaMapMarkerAlt size={50} color="#888" />
        </div>
      </div>
    );
  }

  const next = () => setIndex((index + 1) % workingImages.length);
  const prev = () => setIndex((index - 1 + workingImages.length) % workingImages.length);

  return (
    <>
      {/* HERO SLIDER */}
      <div className="image-slider-wrapper">
        <div className="image-slider">
          <img
            src={workingImages[index]}
            alt={altText}
            className="main-image"
            onClick={() => setIsFull(true)}
          />

          {workingImages.length > 1 && (
            <>
              <button className="left" onClick={prev}>◀</button>
              <button className="right" onClick={next}>▶</button>

              <div className="image-slider-dots">
                {workingImages.map((_, i) => (
                  <span
                    key={i}
                    className={i === index ? "active" : ""}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {workingImages.length > 1 && (
          <div className="thumbnail-row">
            {workingImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${altText} ${i + 1}`}
                className={`thumbnail ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </div>

      {/* FULLSCREEN MODAL */}
      {isFull && (
        <div className="fullscreen-modal" onClick={() => setIsFull(false)}>
          <button
            className="fullscreen-back"
            onClick={(e) => { e.stopPropagation(); setIsFull(false); }}
          >
            ← Back
          </button>

          <img
            src={workingImages[index]}
            alt={altText}
            className="fullscreen-image"
          />

          {workingImages.length > 1 && (
            <>
              <button
                className="left"
                onClick={(e) => { e.stopPropagation(); prev(); }}
              >
                ◀
              </button>
              <button
                className="right"
                onClick={(e) => { e.stopPropagation(); next(); }}
              >
                ▶
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Sliderr;

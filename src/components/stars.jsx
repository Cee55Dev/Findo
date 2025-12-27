import { BsFillStarFill, BsStar } from "react-icons/bs";

const StarRating = ({ rating }) => {
  // Default rating to 0 if undefined or invalid
  const safeRating = typeof rating === "number" && rating > 0 ? rating : 0;
  const totalStars = 5;
  const fullStars = Math.floor(safeRating); // filled stars
  const hasHalf = safeRating - fullStars >= 0.5; // optional half star
  const emptyStars = totalStars - fullStars - (hasHalf ? 1 : 0);

  return (
    <p className="rating">
      {/* Filled stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <BsFillStarFill key={`full-${i}`} color="#FFD700" />
      ))}

      {/* Optional half star */}
      {hasHalf && <BsStar key="half" color="#FFD700" />}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <BsStar key={`empty-${i}`} color="#ccc" />
      ))}

      {/* Numeric rating */}
      <span className="rating-number"> {safeRating.toFixed(1)}</span>
    </p>
  );
};

export default StarRating;

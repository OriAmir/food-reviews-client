import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import PropTypes from "prop-types";

const ScoreInformation = ({ score }) => {
  const positive = Number(score);
  return (
    <div className="detail-info">
      <span className="detail-title">Score: </span>
      <span className="detail-value">
        {Array(5)
          .fill(null)
          .map((v, i) => (
            <span key={i}>
              {positive - i > 0 ? (
                <AiFillStar className="star-icn" />
              ) : (
                <AiOutlineStar className="star-icn" />
              )}
            </span>
          ))}
      </span>
    </div>
  );
};

ScoreInformation.propTypes = {
  score: PropTypes.number,
};

export default ScoreInformation;

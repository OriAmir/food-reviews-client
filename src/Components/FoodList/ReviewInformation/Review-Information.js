import { useDispatch, useSelector } from "react-redux";
import Modal from "Components/Common/Modal/Modal";
import { useEffect, useState } from "react";
import { resetCurrentSelectedReview } from "store/FoodList/foodList.actions";
import DetailInformation from "./DetailInformation";
import ScoreInformation from "./ScoreInformation";
import "./review-information.scss";

const ReviewInformation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedReview = useSelector((state) => state.foodList.selectedReview);
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedReview) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [selectedReview]);

  const onClose = () => {
    dispatch(resetCurrentSelectedReview());
  };

  return (
    <Modal isOpen={isOpen} closeModal={() => onClose()} title="Review">
      <div className="review-info-wrapper">
        {/* <div className="review-title">Review</div> */}
        <DetailInformation title="Id" value={selectedReview?.id} />
        <DetailInformation
          title="Product Id"
          value={selectedReview?.productId}
        />
        <DetailInformation
          title="Reviewer"
          value={selectedReview?.profileName}
        />
        <DetailInformation
          title="Likes"
          value={selectedReview?.helpfulnessDenominator}
        />
        <DetailInformation
          title="Dislike"
          value={selectedReview?.helpfulnessNumerator}
        />
        <ScoreInformation score={selectedReview?.score} />
        <DetailInformation title="Review" value="" />
        <div>{selectedReview?.text}</div>
      </div>
    </Modal>
  );
};

export default ReviewInformation;

import ReactModal from "react-modal";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";
import "./modal.scss";

const Modal = ({ isOpen, closeModal, children, title }) => (
  <ReactModal
    isOpen={isOpen}
    className="modal-wrapper"
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    ariaHideApp={false}
  >
    <div className="close-icon-row" onClick={() => closeModal()}>
      <IoMdClose className="close-icn" />
    </div>
    {title && <div className="modal-title">{title}</div>}
    <div className="modal-body">{children}</div>

    {closeModal && (
      <div className="close-modal-row">
        <button className="close-modal-btn" onClick={() => closeModal()}>
          Close
        </button>
      </div>
    )}
  </ReactModal>
);

Modal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Modal;

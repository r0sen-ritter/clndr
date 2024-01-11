import Modal from "react-modal";
import DatePicker from "react-datepicker";
import { ReactNode } from "react";
import "./AddEventModal.css";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";

interface EventModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  confirmModal: () => void;
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
  setEventName: (name: string) => void;
}

const EventModal: React.FC<EventModalProps> = ({
  modalIsOpen,
  closeModal,
  confirmModal,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setEventName,
}) => {
  const PopperContainer = ({ children }: { children: ReactNode }) => {
    return <div className="date-picker-popper">{children}</div>;
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <h2>Add New Event</h2>
        <input
          type="text"
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Event Name"
          className="input-field"
        />
        <div className="date-picker-wrapper">
          <div style={{ display: "flex", alignItems: "center" }}>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              className="date-picker"
              popperContainer={PopperContainer}
              dateFormat="PP"
            />
            <CiCalendar style={{ marginLeft: 15, color: "blanchedalmond" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              className="date-picker"
              popperClassName="date-picker-popper"
              popperContainer={PopperContainer}
              dateFormat="PP"
            />
            <CiCalendar style={{ marginLeft: 15, color: "blanchedalmond" }} />
          </div>
        </div>
        <div className="section-modal">
          <button className="btn-modal" onClick={closeModal}>
            Close
          </button>
        </div>
        <div className="section-modal">
          <button className="btn-modal" onClick={confirmModal}>
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default EventModal;

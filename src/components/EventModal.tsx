import Modal from "react-modal";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { ReactNode } from "react";
import "./EventModal.css";
import "react-datepicker/dist/react-datepicker.css";

interface EventModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  confirmModal: () => void;
}

const EventModal: React.FC<EventModalProps> = ({
  modalIsOpen,
  closeModal,
  confirmModal,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [eventName, setEventName] = useState("");

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
      >
        <h2>Add New Event</h2>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Event Name"
          className="input-field"
        />
        <div className="date-picker-wrapper">
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            className="date-picker"
            popperContainer={PopperContainer}
          />
          <DatePicker
            selected={endDate}
            onChange={(date: Date) => setEndDate(date)}
            className="date-picker"
            popperClassName="date-picker-popper"
            popperContainer={PopperContainer}
          />
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

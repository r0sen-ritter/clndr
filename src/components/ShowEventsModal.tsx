import Modal from "react-modal";
import "./ShowEventsModal.css";
import { format } from "date-fns";

interface EventRecord {
  name: string;
  startDate: Date;
  endDate: Date;
}

interface ShowEventsModalProps {
  currentEventsList: EventRecord[];
  ShowEventsModalIsOpen: boolean;
  closeShowEventsModal: () => void;
}

const ShowEventsModal: React.FC<ShowEventsModalProps> = ({
  currentEventsList,
  ShowEventsModalIsOpen,
  closeShowEventsModal,
}) => {
  return (
    <div>
      <Modal
        isOpen={ShowEventsModalIsOpen}
        onRequestClose={closeShowEventsModal}
        className="Modal-show-events"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <div>
          {currentEventsList.map((event, index) => (
            <div key={index} className="section-modal-events">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 style={{ color: "blanchedalmond" }}>{event.name}</h4>
                <div>Start Date: {format(event.startDate, "MMMM d, yyyy")}</div>
                <div>End Date: {format(event.endDate, "MMMM d, yyyy")}</div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default ShowEventsModal;

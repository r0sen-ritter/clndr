import Modal from "react-modal";
import "./ShowEventsModal.css";
import { format } from "date-fns";
import { MdOutlineEvent } from "react-icons/md";

interface EventRecord {
  name: string;
  description: string;
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
          <h2>Events Today</h2>
          {currentEventsList.map((event, index) => (
            <div key={index} className="section-modal-events">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <MdOutlineEvent
                    style={{
                      color: "blanchedalmond",
                      scale: "200%",
                      marginTop: 10,
                    }}
                  />
                  <h3 style={{ color: "blanchedalmond", margin: "0" }}>
                    {event.name}
                  </h3>
                </div>
                <div style={{ margin: "10px" }}>{event.description}</div>
                {event.startDate === event.endDate ? (
                  <div style={{ color: "blanchedalmond" }}>Event is Today</div>
                ) : (
                  <>
                    <div style={{ margin: "5px" }}>
                      Start Date: {format(event.startDate, "MMMM d, yyyy")}
                    </div>
                    <div style={{ margin: "5px", color: "blanchedalmond" }}>
                      End Date: {format(event.endDate, "MMMM d, yyyy")}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default ShowEventsModal;

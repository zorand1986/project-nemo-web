import { ReactComponent as FishBowl } from "../assets/fish-bowl.svg";
import Countdown from "react-countdown";

const CountdownPage = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const formatTime = (time) => (time < 10 ? `0${time}` : time);
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span style={{ fontFamily: "Roboto", fontWeight: 100, color: "#444" }}>
          {`${days} days ${formatTime(hours)}:${formatTime(
            minutes
          )}:${formatTime(seconds)}`}
        </span>
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ maxWidth: "100vw", maxHeight: "50vh" }}>
        <FishBowl style={{ maxWidth: "70%" }} width={500} />
      </div>
      <div
        style={{
          fontFamily: "Roboto",
          fontSize: 70,
          fontWeight: 100,
          textAlign: "center",
          marginLeft: 20,
          marginRight: 20,
          color: "#aaa",
        }}
      >
        COMING SOON
      </div>
      <div>
        <Countdown
          date={"2022-03-01T00:00:00"}
          intervalDelay={0}
          precision={3}
          renderer={renderer}
          formatTimeDelta={{
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
          }}
        />
      </div>
      <footer>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 50,
            backgroundColor: "#585EC7",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            justifyContent: "space-between",
          }}
        >
          <a
            style={{
              color: "#eee",
              textDecoration: "none",
              fontFamily: "Roboto",
            }}
            href="mailto:contact@smartpets.me"
          >
            Contact Us
          </a>
          <div
            style={{
              color: "#eee",
              textDecoration: "none",
              fontFamily: "Roboto",
            }}
          >
            &copy; SmartPets Ltd
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CountdownPage;

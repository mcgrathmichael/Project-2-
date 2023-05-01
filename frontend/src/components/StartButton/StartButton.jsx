import { useNavigate } from "react-router";
import "./StartButton.scss";
import PropTypes from "prop-types";

function StartButton({ apiData, apiName, apiList }) {
  // The start button only appears when another button is clicked.
  // Animation should be smooth

  // when start btn is clicked, navigate to the game page
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`/game`, { state: { apiData, apiName, apiList } });
  };

  return (
    <>
      {/* Once the user enters his name and chosses a theme and clicks the Start btn, 
    he can go the game route */}

      {/* onClick, timer starts */}
      <button
        type="submit"
        className="myButton"
        id="start"
        onClick={() => {
          routeChange();
        }}
      >
        Start
      </button>
    </>
  );
}
StartButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  apiData: PropTypes.object.isRequired,
  apiName: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  apiList: PropTypes.array.isRequired,
};
export default StartButton;

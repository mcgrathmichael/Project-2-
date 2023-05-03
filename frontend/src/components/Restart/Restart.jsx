function Restart() {
  const restart = () => {
    window.location.reload();
  };

  return (
    <>
      {" "}
      <button type="submit" className="myButton" onClick={restart}>
        Restart
      </button>
    </>
  );
}
export default Restart;

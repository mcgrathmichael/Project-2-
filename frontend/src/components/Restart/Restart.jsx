function Restart() {
  const restart = () => {
    window.location.reload();
  };

  return (
    <>
      {" "}
      <button type="submit" id="restart" onClick={restart}>
        Restart
      </button>
    </>
  );
}
export default Restart;

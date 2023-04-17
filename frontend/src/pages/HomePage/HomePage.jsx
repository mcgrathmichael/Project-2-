import InputUserName from "../../components/InputUsername/InputUsername";
import FetchButtons from "../../components/FetchButtons/FetchButtons";
import StartButton from "../../components/StartButton/StartButton";

function Home() {
  return (
    <>
      <h1>Mashup Memo</h1>
      <InputUserName />
      <FetchButtons />
      <StartButton />
    </>
  );
}

export default Home;
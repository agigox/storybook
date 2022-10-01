import "./App.css";
import Button from "./components/Button";
import Stack from "./components/Stack";

function App() {
  const handleClick = () => "Hello";
  const style = {
    width: "50px",
    height: "50px",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <h1>COMPONENT 1</h1>
      <Button
        label="Press Me"
        backgroundColor="red"
        size="md"
        handleClick={handleClick}
      ></Button>
      <h1>COMPONENT 2</h1>
      <Stack>
        <div style={style}>1</div>
        <div style={style}>2</div>
        <div style={style}>3</div>
        <div style={style}>4</div>
        <div style={style}>5</div>
        <div style={style}>6</div>
        <div style={style}>7</div>
        <div style={style}>8</div>
      </Stack>
    </>
  );
}

export default App;

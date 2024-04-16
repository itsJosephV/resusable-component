import Button from "./components/Button";

function App() {
  const alertFn = () => {
    confirm("asd");
  };

  return (
    <main className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
      <header className="text-xl font-bold leading-[4rem]">Reusable Component</header>
      <div className="space-x-4 space-y-4">
        <Button id="btn" size={"sm"} variant={"secondary"} onClick={() => console.log("clicked")}>
          press
        </Button>
        <Button id="btn" size={"md"} variant={"primary"} onClick={alertFn}>
          delete
        </Button>
        <Button
          id="btn"
          size={"lg"}
          variant={"danger"}
          onClick={alertFn}
          onMouseEnter={() => alert("asd")}
        >
          delete
        </Button>
      </div>
    </main>
  );
}

export default App;

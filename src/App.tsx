import Button from "./components/Button";

function App() {
  return (
    <main className="container flex min-h-screen items-center justify-center px-4 antialiased">
      <div className="space-x-4 space-y-4">
        <Button id="btn" size={"sm"} variant={"secondary"} onClick={() => {}}>
          press1
        </Button>
        <Button id="btn" size={"md"} variant={"primary"} onClick={() => {}}>
          press2
        </Button>
        <Button id="btn" size={"lg"} variant={"danger"} onClick={() => {}}>
          press3
        </Button>
      </div>
    </main>
  );
}

export default App;

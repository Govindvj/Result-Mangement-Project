import 'bootstrap/dist/css/bootstrap.min.css'
import Landing_page from "./components/Landing_page";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Result Managemnt Project{" "}
        <Landing_page/>
        <Footer/>
      </h1>
    </>
  );
}

export default App;

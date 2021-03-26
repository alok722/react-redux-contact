import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/elements/Navbar";
import "./styles/App.scss";

function App() {
  return (
    <div>
      <div className="jumbotron text-center bg-primary text-white">
        <h1>Contact Management</h1>
        <p>MEAN App - It remembers Everything.</p>
      </div>
      <Navbar />
      <div className="container">
        <div className="py-3">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;

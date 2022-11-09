import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";

function App() {
  return (
    <div className="App container mx-auto mt-3">
      <h1 className="flex font-bold p-3">
      <BiArchive className="text-2xl text-red-300 inline-block align-top" />Your Appointments</h1>
      <AddAppointment />
      <Search />
    </div>
  );
}

export default App;

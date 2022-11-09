import { useState, useEffect, useCallback } from 'react';
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import ComponentInfo from "./components/AppointmentInfo";

function App() {

  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {setAppointmentList(data)}, [])
  })

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="App container mx-auto mt-3">
      <h1 className="flex font-bold p-3 mb-3">
      <BiCalendar className="text-2xl text-red-300 inline-block align-top" />Your Appointments</h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointmentList.map(appointment => (
            <ComponentInfo key={appointment.id}
              appointment={appointment}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;

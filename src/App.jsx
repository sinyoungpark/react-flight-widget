import axios from "axios";

const Table = () => {
  let flights;

  const getFlight = () => {
    axios.get("http://localhost:8000/flights")
    .then((data) => flights = data)
    .error((err) => console.error(err));
  }

  getFlight();

  return (
    <div className="departures">
      {
      console.log(flights)
    }
      <h1>DEPARTURES</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th id="time">TIME</th>
            <th id="destination">DESTINATION</th>
            <th id="flight">FLIGHT</th>
            <th id="gate">GATE</th>
            <th id="remarks">REMARKS</th>
          </tr>
        </thead>
        <tbody id="table-body"></tbody>
      </table>
    </div>
  );
}

export default Table;

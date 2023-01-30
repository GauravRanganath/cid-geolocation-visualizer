import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import axios from "axios";
import { useState } from "react";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

function App() {
  const [cid, setCid] = useState(0);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/location/${name}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMinerGeoLocations = (cid) => {
    axios
      .get("//api.estuary.tech/public/by-cid/" + cid)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      {cid}
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <button type="submit">Click to submit</button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <ComposableMap>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
          </ComposableMap>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

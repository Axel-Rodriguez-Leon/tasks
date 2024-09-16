import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "blue" }}>
                Hello World UD CISC275 with React Hooks and TypeScript
                <h1>Axel Rodriguez-Leon</h1>
                <img
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    src={require("./assets/growlithe.png")}
                    alt="A picture of my favorite pokemon"
                    style={{ width: "20%", height: "20%" }}
                />
            </header>
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "10%",
                                height: "20%",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        hellooooo
                        <div
                            style={{
                                width: "10%",
                                height: "20%",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

import React, { useState } from "react"; 
import "bootstrap/dist/css/bootstrap.css"; 
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import Button from "react-bootstrap/Button"; 
import InputGroup from "react-bootstrap/InputGroup"; 
import FormControl from "react-bootstrap/FormControl"; 
import ListGroup from "react-bootstrap/ListGroup"; 

function TodoList({ list, addItem, deleteItem, editItem }) {
    const [userI, setUserI] = useState("");
    const [newValue, setNewValue] = useState("");

    const updateInput = (value) => {
        setUserI(value);
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 5, offset: 4 }}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="add item . . ."
                            size="lg"
                            value={userI}
                            onChange={(item) => updateInput(item.target.value)}
                            aria-label="add something"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup>
                            <Button
                                variant="dark"
                                className="mt-2"
                                onClick={() => {
                                    addItem(userI);
                                    setUserI("");
                                }}
                            >
                                ADD
                            </Button>
                        </InputGroup>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 4 }}>
                    <ListGroup>
                        {list && list.map((items, index) => (
                            <div key={index}>
                                <ListGroup.Item
                                    variant="dark"
                                    action
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <p>{items.value}</p>
                                    <span>
                                        <Button
                                            style={{ marginRight: "10px" }}
                                            variant="light"
                                            onClick={() => deleteItem(items.id)}
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            variant="light"
                                            onClick={() => {
                                                editItem(items.id, newValue);
                                                setNewValue(""); 
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </span>
                                </ListGroup.Item>
                            </div>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default TodoList;

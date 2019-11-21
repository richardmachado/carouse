import React from 'react';

import {ButtonGroup, Button, ButtonToolbar, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'

const Buttons = (props) =>  {
    return (
        <div>
            <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>

        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button variant="secondary">1</Button>
            <Button variant="secondary">2</Button>
            <Button variant="secondary">3</Button>
            <Button variant="secondary">4</Button>
          </ButtonGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="btnGroupAddon">Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Input group example"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
          </InputGroup>
        </ButtonToolbar>
      
        <ButtonToolbar
          className="justify-content-between"
          aria-label="Toolbar with Button groups"
        >
          <ButtonGroup aria-label="First group">
            <Button variant="secondary">1</Button>
            <Button variant="secondary">2</Button>
            <Button variant="secondary">3</Button>
            <Button variant="secondary">4</Button>
          </ButtonGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              type="text"
              placeholder="Input group example"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon2"
            />
          </InputGroup>
        </ButtonToolbar>
        <ButtonGroup>
  <Button>1</Button>
  <Button>2</Button>
  <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
      </div>
    )
}

export default Buttons;
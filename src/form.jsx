import React, { useState } from 'react'
import './App.css'
import object from './object'
import { Button, Form, } from 'react-bootstrap'

  function Registration() {
    const [count, setCount] = useState(0)
    function Click(e)
  {
    console.log("hello");
  } 
  return (    
<div className="form">
    <h1 class="Style2">Registration Form</h1>
  <Form class="style1">
    <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Name" />
    </Form.Group>

    <Form.Group controlId="age">
        <Form.Label>Age:</Form.Label>
        <Form.Control name="age" type="number" placeholder="Enter Age" />
    </Form.Group>

      <label htmlFor="gender">Gender:</label>
      <select name="gender" id="gender">
          <option value="male" >Male</option>
          <option value="female" >Female</option>
          <option value="other" >Other</option>
      </select>

      <Form.Group >
          <Form.Label>Address:</Form.Label>
          <Form.Control name="address" as="textarea" rows={2} />
      </Form.Group>
      <Form.Group controlId="contact">
          <Form.Label>Contact No. :</Form.Label>
          <Form.Control name="contact" type="text" placeholder="Enter Number" />
      </Form.Group>

      <Form.Group controlId="adhar">
          <Form.Label>Adhar No. :</Form.Label>
          <Form.Control name="adhar" type="text" placeholder="Enter Aadhar" />
      </Form.Group>
      
      <label htmlFor="covid">Covid Test:</label>
      <select name="covid" id="covid">
          <option value="antigen" >Antigen</option>
          <option value="rtpcr" >RT-PCR</option>
          <option value="none" >None</option>
      </select>
      <Form.Group >
          <Form.Label>Symptoms:</Form.Label>
          <Form.Control name="symptoms" as="textarea" rows={2} />
      </Form.Group>
      <Form.Group >
          <Form.Label>Medication:</Form.Label>
          <Form.Control name="medication" as="textarea" rows={2} />
      </Form.Group>
      <Form.Group >
          <Form.Label>Cormobodities:</Form.Label>
          <Form.Control name="cormobodities" as="textarea" rows={2} />
      </Form.Group>
      <Form.Group >
          <Form.Label>Allergic to:</Form.Label>
          <Form.Control name="allergy" as="textarea" rows={2} />
      </Form.Group>
      <Form.Group >
      <Form.Label>SpO2 level:</Form.Label>
          <Form.Control name="SpO2" type="number" placeholder="Enter the SpO2 level" />
      </Form.Group>

      <label htmlFor="Immune">Immunization:</label>
      <select name="immune" id = "immune">
          <option value="dose1" >Dose-1</option>
          <option value="dose2" >Dose-2</option>
          <option value="none" >None</option>
      </select>

      <br></br>
      <Button variant="primary" type="submit" onClick={Click}>Submit</Button>
  </Form>
</div>
  )
}

export default Registration
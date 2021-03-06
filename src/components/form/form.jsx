import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import './form.css'

const Registration = () => {

    const[form,setForm] = useState({
        name:"",
        age:0,
        gender:"Male",
        covidTest:"None",
        immunization:"None",
        address:"",
        contact:0,
        adhaar:0,
        symptoms:"",
        medication:"",
        cormobodities:"",
        allergies:"",
        spO2:0
    
    });
    function Click(){
      console.log("hello");
      }  

      
    const handleSubmit = async (e) =>
    {
      e.preventDefault();
      try{
        const resp = await axios.post("http://127.0.0.1:5000/new",{

            "Name": form.name,
            "AdhaarNo": form.adhaar,
            "Age": form.age,
            "Contact": form.contact,
            "Medication": form.medication,
            "Symptoms": form.symptoms,
            "CovidTest": form.covidTest,
            "PlaceofLiving": form.address,
            "Gender": form.gender,
            "Immunization": form.immunization,
            "Allergy": form.allergies,
            "Cormebodies": form.cormobodities,
            "SPO2": form.spO2

        });
        if(resp.status === 200){
          alert("Added");
        }

      }
      catch(e){
        alert("Already Added");
      }
        
    }

    return ( 
      <div className="Form">
        <h1 class="Style2">Patient Registration Form</h1>
        <div class="Style1" >
        <mb-form class="flex flex-col gap-5">
          <mb-context path="resource" value="patient"></mb-context>
          <mb-input path="name[0].given" label="Name"></mb-input>
          <mb-input  Label="Age" path="age"></mb-input>
          <mb-date path="birthdate" label="Date of Birth"></mb-date>
          <div style={{display:"flex"}} >
            <mb-buttons type="code" label="Gender" path="gender">
            <mb-option label="Male" value="male"></mb-option>
            <mb-option label="Female" value="female"></mb-option>
            <mb-option label="Other" value="other"></mb-option>
          </mb-buttons>
          </div>
          <mb-input Label="Address" textarea path="address[0].text"></mb-input>
          <div style={{display:"flex"}} >
          <mb-buttons type="code" label="Covid Test" path="covid test">
            <mb-option label="Antigen" value="antigen"></mb-option>
            <mb-option label="RTPCR" value="RTPCR"></mb-option>
            <mb-option label="None" value="none"></mb-option>
          </mb-buttons></div>
          <mb-input label="Symptoms" path="symptoms" color="blue"></mb-input>
          <mb-input label="Medication" path="medication" ></mb-input>
          <mb-input label="Cormobodities" path="cormobodities" ></mb-input>
          <mb-input label="SpO2 Level" path="SpO2 level" ></mb-input>
          <mb-input label="Allergic To" path="allergy"></mb-input>
          <mb-input label="Aadhar No." path="identifier[0].value"></mb-input>
          <mb-input path="telecome[0].value" label="Phone No."></mb-input>
         
          <div style={{display:"flex"}} >
          <mb-buttons label="Immunization" type="code" path="Immunization" data={{
              code: 'dose1',
              value: 'Dose-1',
              terminology: 'local',
            }}>
            <mb-option value="dose1" label="Dose-1"></mb-option>
            <mb-option value="dose2" label="Dose-2"></mb-option>
            <mb-option value="none" label="None"></mb-option>
          </mb-buttons></div>
          
          <mb-submit>
             <sl-button onClick={Click} type="info">Submit</sl-button>
           </mb-submit>
        </mb-form>
        </div>
      </div>
    )
}

export default Registration
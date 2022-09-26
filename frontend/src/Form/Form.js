import { useState } from 'react'
import Header from "../NavBar/Header"
import "./form1.css"
function Form() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [startupName, setStartupName] = useState('')
    const [problemSolving, setProblemSolving] = useState('')
    const [startupDesc, setStartupDesc] = useState('')
    const approvalStatus = "Pending"

    async function sendApplication(e) {
        e.preventDefault();
        let token = localStorage.getItem('token');

        const response = await fetch('https://crawler-backend.vercel.app/api/sendApplication', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
                'Authentication': token,
			},
			body: JSON.stringify({
				name,
				email,
                contact,
                city,
                state,
                startupName,
                problemSolving,
                startupDesc,
                approvalStatus,
			}),
		})

		const data = await response.json()

        console.log(data);
        if(data.status === "ok"){
            window.alert("Your Form Has Been Submitted! Please Wait 6-7 days. If youre startup is approved, you will receive an email with login data on the given email id. Thank you!");
            window.location.href="/" 
        }
        else
        {
            window.alert("Invalid Attempt.");    
        }
    }

    return <div>
    <Header />
        <form className='applyForm' action="/login" method="POST" onSubmit={sendApplication}>
            <br />
                Your name:<br /> <br />
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" required />
            <br /> <br />
                Your email:<br /><br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required />
            <br /> <br />
                Your contact number:<br /><br />
            <input type="text" name="contact" value={contact} onChange={(e) => setContact(e.target.value)}  required pattern="[1-9]{1}[0-9]{9}" />
            <br /> <br />
                City of Present Residence:<br /><br />
            <input type="text" name="address" value={city} onChange={(e) => setCity(e.target.value)} required />
            <br /> <br />
            State/UT:<br /><br />
            <select name="states" id="states" value={state} onChange={(e) => setState(e.target.value)}>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Delhi">Delhi</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chattisgarh">Chattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkand">Jharkand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="West Bengal">West Bengal</option>
        </select>
        <br /> <br />
        Startup Name/Idea Name:<br /><br />
        <input type="textarea" value={startupName} onChange={(e) => setStartupName(e.target.value)} required rows="4" cols="50" />
        <br /> <br />
        What problem are you solving?<br /><br />
        <input type="textarea" value={problemSolving} onChange={(e) => setProblemSolving(e.target.value)} required rows="4" cols="50" />
        <br /> <br />
        Brief Description of your startup:<br /><br />
        <input type="textarea" value={startupDesc} onChange={(e) => setStartupDesc(e.target.value)} required rows="10" cols="150" />
        <br /> <br />
        Have you registered a company/entity for your startup?<br /><br />
        <input type="radio"  id="Proprietorship" name="typeofcompany" value="Proprietorship" />
        Proprietorship
        <br />
        <input type="radio" id="Partnership" name="typeofcompany" value="Partnership" />
        <label for="Partnership">Partnership</label><br />
        <input type="radio" id="LLP" name="typeofcompany" value="LLP" />
        <label for="LLP">LLP</label><br/>
        <input type="radio" id="Private Limited" name="typeofcompany" value="Private Limited" />
        <label for="Private Limited">Private Limited</label> <br/>
        <input type="radio" id="OPC" name="typeofcompany" value="OPC" />
        <label for="OPC">One Person Company</label><br />
        <input type="radio" id="Not registered" name="typeofcompany" value="Not registered" />
        <label for="Not registered">Not registered</label>
        <br /> <br />
        Stage of startup:
        <br />        <br/>
        <input type="radio" id="idea" name="Stage" value="idea" />
        <label for="idea">I just have an idea</label><br />
        <input type="radio" id="poc" name="Stage" value="poc" />
        <label for="poc">I have worked towards my idea and have created a proof of its concept(POC)</label><br/>
        <input type="radio" id="MVP" name="Stage" value="MVP" />
        <label for="MVP">I have created a minimum viable product (MVP) and I am ready for a pilot testing (or have started working on pilot)</label><br />
        <input type="radio" id="business" name="Stage" value="business" />
        <label for="business">My startup idea is generating business and is already in market</label><br/>
        <input type="radio" id="scale" name="Stage" value="scale" /> 
        <label for="scale">My startup idea has been in business for some time and we are ready for scaling this rapidly</label><br />
        <br />
        <input type="submit" className='submitButton' value="Submit"></input>
        </form>
    </div>
}

export default Form;
import React,{useState} from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import {MdEmail,MdLocationPin} from 'react-icons/md'
import img1 from '../images/contactaa.png'
import img2 from '../images/contact.png'

const initialData = {
    name:"",
    email:"",
    phone:0,
    date:"",
    time:"",
    message:""
}

function ContactPageComp() {
    const [user,setUser] = useState(initialData)
    const handleSubmit = () => {
        const {name,email,phone,date,time,message} = user;
        if(name&&email&&phone&&date&&time&&message){
            try {
                const res = fetch("https://aasthaprojectswebsite-default-rtdb.firebaseio.com/contactaastha.json",{
                    method:'POST',
                    body:JSON.stringify({
                        name,email,phone,date,time,message
                    })
                });
                alert("Your resposnse has been added successfully");
                setUser(initialData);
            } catch (error) {
                console.log(error);
                alert("something went wrong!");
                setUser(initialData);
            }
        }else{
            alert("please provide correct information");
        }
    }
    return (
        <div className="contact-form">
            <div className="contact-details-page">
                <div className="contact-details-inner">
                    {/* <div className="address-contact"><span><MdLocationPin size="2rem" color="rgb(116, 52, 0)"></MdLocationPin></span>154, Chalandri, Ahmedabad, 3880015</div>
                    <div className="address-contact"><span><FiPhoneCall size="2rem" color="rgb(116, 52, 0)"></FiPhoneCall></span>+91 9898024771</div>
                    <div className="address-contact"><span><MdEmail size="2rem" color="rgb(116, 52, 0)"></MdEmail></span>aasthaprojectsamd@gmail.com</div> */}
                <img src={img1}></img>
                </div>
                <div className="contact-form-inner">
                    <div className="contact-wrapper">
                    <h1>fill the form</h1>
                    <input className="input" type="text" name="name" id="name" placeholder="FULL NAME" onChange={(e)=>{setUser({...user,name:e.target.value})}} value={user.name}></input>
                    <input className="input" type="email" name="email" id="email" placeholder="EMAIL" onChange={(e)=>{setUser({...user,email:e.target.value})}} value={user.email}></input>
                    <input className="input" type="number" name="phone" id="phone" placeholder="MOBILE" onChange={(e)=>{setUser({...user,phone:e.target.value})}} value={user.phone}></input>
                    <div className="date-time">
                        <div className="date">
                            <input className="input" type="date" name="date" id="date" onChange={(e)=>{setUser({...user,date:e.target.value})}} value={user.date}></input>
                        </div>
                        <div className="date">
                            <input className="input"  name="time" id="time" type="time" onChange={(e)=>{setUser({...user,time:e.target.value})}} value={user.time}></input>
                        </div>
                    </div>
                    <textarea className="input" name="message" id="message" placeholder="MESSAGE" onChange={(e)=>{setUser({...user,message:e.target.value})}} value={user.message}></textarea>
                    <button className="btn-contact" type="button" onClick={()=>{handleSubmit()}}>submit</button>
                    </div>
                </div>
            </div>
            <div className="map">
                <img src={img2}></img>
            {/* <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="http://www.gps.ie/">sport gps</a></iframe> */}
            </div>
        </div>
    )
}

export default ContactPageComp

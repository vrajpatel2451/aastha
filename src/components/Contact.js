import React,{useState} from 'react'
const initialData = {
    name:"",
    email:"",
    phone:0,
    date:"",
    time:"",
    message:""
}

function Contact() {
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
        <div className="contact-main">
            <div className="contact-bg">
                <div className="contact">
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
            <div className="space"></div>
        </div>
    )
}

export default Contact

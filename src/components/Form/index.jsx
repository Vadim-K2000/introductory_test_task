import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./Form.css";

const Form = () => {
    const [formValue, setFormValue] = useState({color: "", user_gender: "male", user_name: "", user_phone: ""});
    const [formError, setFormError] = useState({color: "", user_name: "", user_phone: ""});
    const [logData, setLogData] = useState({})
    const [statusCode, setStatusCode] = useState("");

    useEffect(() => {console.log("logData", logData)}, [logData])

    const handleChange = (value, attribute) => {
        if (value.target.value !== "") {
            setFormError({...formError, [attribute]: ""})
        if (attribute === "user_phone") {
            const re = /^\d+$/;  // Regular expression for phone number validation
            if (!re.test(String(value.target.value).toLowerCase()) && value.target.value !== "") {
                setFormError({...formError, user_phone: "Invalid phone number!"})
            } else {setFormError({...formError, user_phone: ""})}
        }}
            setFormValue({...formValue, [attribute]: value.target.value});
    }

    const handleSubmit = () => {
        let tempError = {...formError};
        for (let key in formValue) {
            if (formValue[key] === '') {
                tempError = {...tempError, [key]: "Required value!"}
            }
        }
        setFormError(tempError);
        if (Object.values(tempError).filter(Boolean).length === 0) {  //Check if there are errors in the data

        // A different url was specified in the task, 
        // but it does not send anything in response, 
        // so I replaced it with a different one.

        fetch('https://jsonplaceholder.typicode.com/users', { // URL to POST request
            method: 'POST',
            //mode: 'no-cors',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValue)
            }).then(res => {
                setStatusCode(res.status);
                console.log("res", res)
                if (res.body) {return res.json()}
                else {return {}}
            })
            .then(json => setLogData(json))
            .catch(res => console.log(res))

            setFormValue({color: "", user_gender: "male", user_name: "", user_phone: ""})
    }}

    return <div style={{display: "flex", flexDirection: "row"}}>
        <form className="Form" onSubmit={handleSubmit}>
                <div className="FormItem">
                    <label for="user_name">Name:</label>
                    <input value={formValue.user_name} type="text" id="user_name" name="user_name"
                    onChange={(value) => {handleChange(value, "user_name")}} style={{marginLeft: 3}}/>
                </div>
                {formError.user_name && <div style={{color: "red", paddingBottom: 5}}>{formError.user_name}</div>}
                <div className="FormItem">
                    <label for="user_phone">Phone:</label>
                    <input value={formValue.user_phone} type="text" id="user_phone" 
                    onChange={(value) => {handleChange(value, "user_phone")}}/>
                </div>
                {formError.user_phone && <div style={{color: "red"}}>{formError.user_phone}</div>}
                <div className="FormItem">
                    <label for="choiceGender">Gender:</label>
                    <div id="choiceGender">
                        <div>
                            <input type="radio" id="male" name="user_gender" value="male" 
                            onClick={(value) => {handleChange(value, "user_gender")}} checked={formValue.user_gender === 'male'}/>
                            <label for="male">Male</label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="user_gender" value="female" 
                            onClick={(value) => {handleChange(value, "user_gender")}} checked={formValue.user_gender === 'female'}/>
                            <label for="female">Female</label>
                        </div>
                    </div>
                </div>
                <div className="FormItem">
                    <label for="color">Favorite color:</label>
                    <select value={formValue.color} onChange={(value) => {handleChange(value, "color")}}>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="blue">Blue</option>
                        <option value="violet">Violet</option>
                        <option style={{display: "none"}} value=""></option>
                    </select>
                </div>
                {formError.color && <div style={{color: "red"}}>{formError.color}</div>}
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <div className="Submit" onClick={handleSubmit}>Send</div>
                </div>
        </form><div className="Log">{statusCode !== "" && <p>{`status_code: ${statusCode}`}</p>}{
            Object.keys(logData).map(key => {
              return (<p>{`${key}: ${logData[key]}`}</p>)
            })
        }</div></div>;
}

export default Form;

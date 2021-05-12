import React from 'react'

export default function Form(props) {
    const {email, password} = props.state;
    console.log(email, password);
    return (
        <form onSubmit={props.handleFormSubmit}>
        {
            props.fields.map(el => {
                console.log(el);
                return(
                    <div>
                        <label>{el}</label>
                        <input type={el} name={el} value={email} ></input>
                    </div>
                );
            })
        }
            
        </form>
    )
}

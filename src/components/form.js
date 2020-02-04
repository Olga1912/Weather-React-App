import React from 'react';

const Form = props => {
    return (
        <form onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="City" />
            <button>Get the forecast</button>
        </form>
    );
}

export default Form;


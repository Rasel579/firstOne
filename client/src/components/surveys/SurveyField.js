//SurveyField contains logic to render a single lable and input
import React from 'react';


export default ({ input, label, meta }) => {
    console.log(meta);
    return (
       <div>
           <label>{label}</label>
           <input {...input} style = {{marginBottom: '5px'}} />
           <div className = "red-text" style = {{marginBottom: '20px'}}>{meta.touched && meta.error}</div>
       </div>
    );
};
import styled from "./textarea.module.css";

function Textarea(props) {
    return ( 
        <div className={styled.container}>
            <label>{props.label}</label>
            <textarea onChange={props.handleChange}></textarea>
        </div>
     );
}

export default Textarea;
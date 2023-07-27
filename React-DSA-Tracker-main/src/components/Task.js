import React, { useEffect } from 'react';
import useLocalStorage from '../hooks/UseLocalStorage';

export default function Task (props) {

    const [data, setCodeData] = useLocalStorage( props.id,

        {
            code : "",
            solved : false
        }
    )

    function handleCode (event) {
        setCodeData ( prevData => {
            return {
                ...prevData,
                code : event.target.value
            }
        })
    }

    function handleSolved () {
        setCodeData ( prevData => {
            return {
                ...prevData,
                solved : !prevData.solved
            }
        })
    }

    const styles = {
        marginTop: "30px",
        marginBottom: "30px",
        fontFamily : "Inter"
    }

    const textAreaStyle = {
        borderColor : "white", 
        width : "100%",
        height : "250px",
        backgroundColor : "#1e1e1e", 
        fontFamily: 'Source Code Pro',
        color : 'white',
        padding : "5px"
    }

    const accordianHeader = {
        fontSize : "20px", 
        color : "black",
        fontFamily : "Inter",
        fontWeight : "500",
        backgroundColor : data.solved ? "#78DEC7" : "white"
    }

    const btnStyles = {
        backgroundColor : "#78DEC7",
        fontWeight : "600"
    }

    const linkStyle = {
        fontWeight : "600",
        backgroundColor : "#DFF6FF",
        marginRight : "10px"
    
    }

    console.log(data);

    return (
        <div className = "task" style={styles}>
            <div className="accordion" id = {"accordian" + String(props.id)}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id = {"heading" + String(props.id)} >
                        <button className="accordion-button collapsed" style={accordianHeader} type="button" data-bs-toggle="collapse" data-bs-target= {"#collapse" + String(props.id)} aria-expanded="false" aria-controls= {"collapse" + String(props.id)}>
                            {props.name}
                        </button>
                    </h2>
                    <div id={"collapse" + String(props.id)} className="accordion-collapse collapse" aria-labelledby = {"heading" + String(props.id)} data-bs-parent={"accordian" + String(props.id)}>
                        <div className="accordion-body">
                            <textarea 
                                style={textAreaStyle}
                                onChange={handleCode}
                                defaultValue = {data.code}
                                spellCheck = {false}
                                placeholder='Save your code here'
                            />
                            <a href = {props.link} target="_blank" rel="noreferrer noopener"><button type="button" class="btn" style={linkStyle}>Link</button></a>
                            <button type="button" className="btn" onClick={handleSolved} style={btnStyles}>Solved</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

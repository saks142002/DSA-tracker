import Task from "../components/Task"

export default function(props) {

    const questions = props.topic

    const styles = {
        marginRight : "100px",
        marginLeft : "100px", 
        color : "black",
        fontFamily : 'Inter'
    }

    const headingStyles = {
        marginTop : "75px",
        marginBottom : "75px",
        fontWeight : "700"
    }

    return (
        <div className={props.topicName} id = {props.topicName} style={styles}>
            <h1 className="text-center" style={headingStyles} > {props.heading} </h1>
            {
                questions.map(question => {
                    return < Task name = {question.name} link = {question.link} id = {question.id} /> 
                })
            }

        </div>
        
    )

}
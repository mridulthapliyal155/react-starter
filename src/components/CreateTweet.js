import React,{useState} from 'react'

const CreateTweet = () => {
    // State
    const [textInput, setTextInput] = useState("");
    // Functions
    const userInputHandler = (e) => {
        setTextInput(e.target.value)
    }
    return(
        <form >
            <textarea value={textInput} onChange={userInputHandler} cols="30" rows="10"></textarea>
            <button>Submit</button>
            <h1 onClick={() => {setTextInput("")}}>{textInput}</h1>
        </form>
    )
}

export default CreateTweet
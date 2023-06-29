import React, {useState} from "react";
// import components
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";
function App() {
  const name = "Dev Ed"
  const message = "My first tweet"
  return (
    <div className="App">
      <CreateTweet/>
      <TweetList name={name} message={message}/>
    </div>
  );
}

export default App;
 
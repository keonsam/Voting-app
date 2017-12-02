import React from "react";
import ReactDOM from "react-dom";

const Banner = () => {
  return (
  <main>
   <div className="text-center banner">
      <h2>Votex App</h2>
      <p>Custom Online Polls at a few Clicks. Join for Free.</p>
      <button className="btn btn-success">Sign up</button>
   </div>
  </main>
  );
}

ReactDOM.render(<Banner />, document.getElementById('app'));

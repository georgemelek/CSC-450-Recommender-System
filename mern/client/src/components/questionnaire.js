import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/modern.min.css";
import { questionsJson } from "./questionsJson";

function Questionnaire() {
  const survey = new Model(questionsJson);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  survey.showProgressBar = "bottom";
  console.log(survey.data); //Returns the results after outputting
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <Survey style={{}} model={survey} />
    </div>
  );
}

export default Questionnaire;

// import React from 'react';

// class MovieForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'TV Show'};

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//       alert('Your favorite flavor is: ' + this.state.value);
//       event.preventDefault();
//     }

//     render() {
//       return (
//         <div style={{textAlign: "center"}}>
//             <form onSubmit={this.handleSubmit}>
//             <label>
//                 Would you like to watch a TV Show or Movie?
//                 <select value={this.state.value} onChange={this.handleChange}>
//                 <option value="tvShow">TV Show</option>
//                 <option value="movie">Movie</option>
//                 <option value="dontCare">I don't care</option>
//                 </select>
//             </label>
//             <input type="submit" value="Submit" />
//             <br />
//             </form>
//             <form>
//             <label>
//             Is going:
//             <input
//                 name="isGoing"
//                 type="checkbox"
//                 checked={this.state.isGoing}
//                 onChange={this.handleInputChange} />
//             </label>
//             <br />
//             <label>
//             Number of guests:
//             <input
//                 name="numberOfGuests"
//                 type="number"
//                 value={this.state.numberOfGuests}
//                 onChange={this.handleInputChange} />
//             </label>
//         </form>
//       </div>
//       );
//     }
//   }

// export default MovieForm

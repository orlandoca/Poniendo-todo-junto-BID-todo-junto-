import React, { useState } from "react";

function PersonCard(props) {
  const [age, setAge] = useState(props.age);
  return (
    <div className="containt-person">
      <p className="first-person">
        <strong>
          {props.first} , {props.last}
        </strong>
      </p>

      <p className="age-person">Age: {age}</p>
      <p className="hair-person"> Hair Color: {props.hair}</p>
      <button onClick={() => setAge(age + 1)}>
        Birthday Button For {props.first} {props.last}{" "}
      </button>
    </div>
  );
}
export default PersonCard;

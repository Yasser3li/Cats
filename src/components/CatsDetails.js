import { useState } from "react";
// const [catArray, setCatArray] = useState([]);
const CatsDetails = (catDetail) => {
  return (
    <div>
      {console.log(catDetail.catDetail)}
      <h1>
        {catDetail.catDetail.map((catD, index) => (
          <h3 key={index}>{catD.name}</h3>
        ))}
      </h1>
    </div>
  );
};

export default CatsDetails;

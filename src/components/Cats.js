import "./styling.css";

import CatsDetails from "./CatsDetails";
export default function Cats() {
  const cats = [
    {
      species: "Ragdoll",
      catsDetails: [
        { name: "Lily", age: 13, color: "Dark Grey", weight: "4kg" },
        { name: "Misha", age: 4, color: "Brown", weight: "3kg" },
        { name: "Smokey", age: 6, color: "White and brown", weight: "5kg" },
      ],
    },
    {
      species: "Ragamuffin",
      catsDetails: [{ name: "Tommy", age: 12, color: "Grey", weight: "7kg" }],
    },
    {
      species: "Scottish fold",
      catsDetails: [{ name: "Ash", age: 1, color: "Black", weight: "2kg" }],
    },
  ];

  return (
    <div>
      <h2>Cat species</h2>
      {cats.map((cat) => (
        <div>
          <h2
            onClick={() => {
              cat.catsDetails.map((det) => {
                console.log(det.name, det.age, det.color, det.weight);
              });
            }}
          >
            {cat.species}
          </h2>
        </div>
      ))}
      {/* <CatsDetails catDetail={cats} /> */}
    </div>
  );
}

import { useParams } from "react-router-dom";

function SpecificCountry() {
  const { country } = useParams();

  return (
    <div>
      <h1>this is {country}</h1>
    </div>
  );
}

export default SpecificCountry;

import { useState } from "react";
import { useDispatch } from "react-redux";
const AjouterClinet = () => {
  const [code, setCode] = useState();
  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "add_user", payload: { code, nom, prenom } });
  };
  return (
    <div>
      Code :{" "}
      <input type="number" onChange={(e) => setCode(e.target.value)} id="" />{" "}
      <br />
      Nom : <input
        type="text"
        onChange={(e) => setNom(e.target.value)}
        id=""
      />{" "}
      <br />
      Prenom :{" "}
      <input
        type="text"
        onChange={(e) => setPrenom(e.target.value)}
        id=""
      />{" "}
      <br />
      <input type="button" onClick={handleClick} value="Ajouter " />
    </div>
  );
};
export default AjouterClinet;

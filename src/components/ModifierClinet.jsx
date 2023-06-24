import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const ModifierClient = () => {
  const users = useSelector((data) => data.users);
  const [item, setItem] = useState({});
  const { id } = useParams();
  console.log(users);

  useEffect(() => {
    const foundItem = users.find((u) => u.code === id);
    setItem(foundItem);
  }, [users, id]);

  const [code, setCode] = useState(id || "");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setNom(item.nom || ""); // Set initial value of 'nom' input
    setPrenom(item.prenom || ""); // Set initial value of 'prenom' input
  }, [item]);

  const dispatch = useDispatch();
  const handleClick = () => {
    const user = { code, nom, prenom };
    dispatch({ type: "edit_user", payload: user });
    navigate("/");
  };

  return (
    <div>
      Nom:{" "}
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        id=""
      />{" "}
      <br />
      Prenom:{" "}
      <input
        value={prenom}
        type="text"
        onChange={(e) => setPrenom(e.target.value)}
        id=""
      />{" "}
      <br />
      <input type="button" onClick={handleClick} value="Modifier" />
    </div>
  );
};

export default ModifierClient;

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ListeClients = () => {
  const users = useSelector((data) => data.users);
  const dispatch = useDispatch();
  const supprimer = (code) => {
    dispatch({ type: "delete_user", payload: code });
  };
  return (
    <table style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
      <tr>
        <th>Code</th>
        <th>Nom</th>
        <th>Prenom</th>
      </tr>

      {users.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user.code}</td>
            <td>{user.nom}</td>
            <td>{user.prenom}</td>
            <td>
              <input
                type="submit"
                value="supprimer"
                onClick={() => supprimer(user.code)}
              />
            </td>
            <td>
              <Link to={"/Modifier/" + user.code}>Modifier</Link>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default ListeClients;

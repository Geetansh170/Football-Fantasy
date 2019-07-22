import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FootContext from "../../context/foot/footContext";

const Standingitem = ({
  standing: {
    position,
    team: { name, id },
    playedGames,
    won,
    lost,
    draw,
    goalDifference,
    points
  }
}) => {
  const footContext = useContext(FootContext);

  //console.log(stand);
  const onClick4 = () => {
    //console.log("hahahhahahahahah");
    footContext.getTeam(JSON.stringify(id));
    console.log(JSON.stringify(id));
  };

  return (
    <div className='table-responsive'>
      <table className='table table-striped table-dark sm lg xl md'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Postion</th>
            <th className='col' scope='col'>
              Team Name
            </th>
            <th scope='col'>Games Played</th>
            <th scope='col'>Won</th>
            <th scope='col'>Lost</th>
            <th scope='col'>Draw</th>
            <th scope='col'>Goal Difference</th>
            <th scope='col'>Points</th>
            <th scope='col'>More</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{position}</td>
            <td>{name}</td>
            <td>{playedGames}</td>
            <td>{won}</td>
            <td>{lost}</td>
            <td>{draw}</td>
            <td>{goalDifference}</td>
            <td>{points}</td>
            <td>
              {" "}
              <Link to='/teams'>
                <li
                  style={{ color: "white", backgroundColor: "grey" }}
                  //type='button'
                  //className='btn btn-success btn-sm  shadow p-3 mb-5 rounded bg-dark'
                  type='submit'
                  onClick={onClick4}
                >
                  Know more
                </li>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Standingitem;

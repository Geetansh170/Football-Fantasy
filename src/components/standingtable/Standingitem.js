import React, { useContext } from "react";
import FootContext from "../../context/foot/footContext";

const Standingitem = ({
  standing: {
    position,
    team,
    playedGames,
    won,
    lost,
    draw,
    goalDifference,
    points
  }
}) => {
  const footContext = useContext(FootContext);

  const {
    stand: { competition }
  } = footContext;

  //console.log(stand);

  return (
    <div>
      <table className='table table-striped table-dark'>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{position}</td>
            <td>{team.name}</td>
            <td>{playedGames}</td>
            <td>{won}</td>
            <td>{lost}</td>
            <td>{draw}</td>
            <td>{goalDifference}</td>
            <td>{points}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Standingitem;

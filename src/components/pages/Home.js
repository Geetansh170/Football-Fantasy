import React, { Fragment } from "react";
import Search from "../layout/Search";
import Standings from "../standingtable/Standings";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <br />
      <Standings />
    </Fragment>
  );
};

export default Home;

import React from "react";
import Logout from "./Logout";

const Home = ({ email }: { email: string }) => {
  return (
    <>
      <Logout />
      <div>Hello {email}</div>
    </>
  );
};

export default Home;

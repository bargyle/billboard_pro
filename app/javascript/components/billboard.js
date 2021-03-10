import React from "react";

const billboard = ({ billboard }) => {
  const { title, id} = billboard;
  return (
    <>
      <h1>billboard: {title}</h1>
      <h3>the best songs and artist</h3>
      <hr />
      <a href={`/billboards`} > back</a>
      <br> </br>
      <a href={`/billboards/${id}/artists`}>Artists</a>
    </>
  );
}

export default billboard;
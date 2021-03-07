import React from "react";

const billboard = ({ billboard }) => {
  const { id, title, created_at } = billboard;
  return (
    <>
      <h1>billboard: {title}</h1>
      <h3>{the best songs and artist}</h3>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a href={`/billboards`} > back</a>
      <br> </br>
      <a href={`/billboards/${id}/artists`}>Artists</a>
    </>
  );
}

export default Billboard;
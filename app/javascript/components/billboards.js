import React from "react";

const url = "http://localhost:3000/billboards/";

const Billboards = ({ billboards }) => {
  return (
    <>
      <h1>Billboard Top 100</h1>
      <a href={ url + "new" }>Add Billboard</a>
      { billboards.map((billboard) => (
        <div>
          <h3>{billboard.title}</h3>
          <a href={ url + billboard.id }>show</a>
          <a href={ url + billboard.id + '/edit' }>edit</a>
          <a
            href={ url + billboard.id }
            data-method="delete"
          >
            delete
          </a>
        </div>
      ))}
    </>
  )
}

export default Billboards;
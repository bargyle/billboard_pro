import React from "react";

const billboardEdit = ({ billboard }) => {
    const { title, id } = billboard;
    const defaultTitle = title ? title : "";
    return (
      <>
        <h1>Billboard </h1>
        <form action={`/billboards/${id}`} method="post">
          {/* need this for edit! */}
          <input type="hidden" name="_method" value="patch" /> 
          <input
            placeholder="title"
            type="text"
            defaultValue={defaultTitle}
            title="billboard[title]"
          />
          <button type="submit">add</button>
        </form>
      </>
    );
}

export default billboardEdit;
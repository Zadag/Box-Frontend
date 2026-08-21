import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { BoxItem } from "../components/BoxItem";

export const Route = createFileRoute("/box")({
  component: Box,
});

export type BoxItemType = {
  id: number;
  name: string;
};

function Box() {
  const [boxContents, setBoxContents] = useState<BoxItemType[]>([
    { id: 0, name: "test" },
  ]);

  const handleAddContent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const newId = boxContents[boxContents.length - 1].id + 1;
    setBoxContents([...boxContents, { id: newId, name: "" }]);
  };

  const handleContentInput = (
    boxItem: BoxItemType,
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setBoxContents((prevContents) => {
      return prevContents.map((content) => {
        return content.id === boxItem.id
          ? { id: boxItem.id, name: e.target.value }
          : content;
      });
    });
  };

  const handleRemoveContent = (boxItem: BoxItemType) => {
    return setBoxContents((prevContents) => {
      return prevContents.reduce((acc, curr) => {
        if (curr.id !== boxItem.id) {
          acc.push(curr);
        }
        return acc;
      }, [] as BoxItemType[]);
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(boxContents);
  };

  return (
    <div id="container">
      <h1>Box Demo</h1>
      <form>
        <div className="form-row">
          <label>
            Name
            <input type="text" placeholder="Box name"></input>
          </label>
        </div>
        <img
          className="box-image"
          src="https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fHww"
        />
        {boxContents.map((boxItem) => {
          return (
            <BoxItem
              item={boxItem}
              handleContentInput={handleContentInput}
              handleRemoveContent={handleRemoveContent}
              key={boxItem.id}
            />
          );
        })}
        <div id="form-buttons">
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
          <button onClick={(e) => handleAddContent(e)}>Add content</button>
        </div>
      </form>
    </div>
  );
}

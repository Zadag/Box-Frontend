import React, { useState } from "react";
import "./App.css";

function App() {
  type BoxItem = {
    id: number;
    name: string;
  };

  const [boxContents, setBoxContents] = useState<BoxItem[]>([
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
    boxItem: BoxItem,
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

  const handleRemoveContent = (boxItem: BoxItem) => {
    return setBoxContents((prevContents) => {
      return prevContents.reduce((acc, curr) => {
        if (curr.id !== boxItem.id) {
          acc.push(curr);
        }
        return acc;
      }, [] as BoxItem[]);
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
        {boxContents.map((boxItem) => {
          return (
            <div key={boxItem.id} className="form-row">
              <label>
                Content
                <input
                  type="text"
                  value={boxItem.name}
                  onChange={(e) => handleContentInput(boxItem, e)}
                />
              </label>
              <button onClick={() => handleRemoveContent(boxItem)}>X</button>
            </div>
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

export default App;

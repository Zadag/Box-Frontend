import { useState } from "react";
import "./App.css";

function App() {
  type BoxContent = {
    name: string;
    contents: string[];
  };

  const [boxContent, setBoxContent] = useState<null | BoxContent>(null);

  return (
    <div id="container">
      <h1>Box Demo</h1>
      <form>
        <div className="form-row">
          <label>Name</label>
          <input type="text" placeholder="Box name"></input>
        </div>
        <div className="form-row">
          <label>Content</label>
          <input type="text" placeholder="Box Content"></input>
        </div>
        <div id="form-buttons">
          <button>Submit</button>
          <button>Add content</button>
        </div>
      </form>
    </div>
  );
}

export default App;

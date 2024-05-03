import React, { useContext, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { NotesContext } from "../contex/Notes-Context";

function Input() {
  let [value, setValue] = useState({ title: "", text: "" });
  const [isRender, setIsRender] = useState(true);
    const { addNotes } = useContext(NotesContext);

  function changeHandler(e) {
    e.preventDefault();
    const data = e.target.value;
    const name = e.target.name;
    setValue({ ...value, [name]: data });
  }
  return (
    <div className="form-container">
      {isRender ? (
        <h5 onClick={() => setIsRender(!isRender)} className="clicklble-text">
          click here to write a note
        </h5>
      ) : (
        <form onSubmit={(e) => e.preventDefault()} className="Input" action="">
          <input
            onChange={changeHandler}
            placeholder="Add Title..."
            type="text"
            name="title"
            id=""
            value={value.title}
          />

          <textarea
            onChange={changeHandler}
            rows="4"
            name="text"
            id=""
            placeholder="Input Text..."
            value={value.text}
          />
          <AddCircleIcon
            onClick={(e) => {
              e.preventDefault();
              if (value.title !== "") {
                addNotes(value);
                setIsRender(!isRender);
              } else {
                alert("...Bsdk kuch likh to de phle 🙄");
              }
              setValue({ title: "", text: "" });
            }}
            className="button"
            fontSize="large"
          />
        </form>
      )}
    </div>
  );
}
export default Input;

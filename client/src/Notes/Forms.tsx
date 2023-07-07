import axios from "axios";
import authHeader from "../components/services/auth-header";
const url = `http://localhost:3001/api/notes`;

const Forms = ({ title, setTitle, content, setContent, notes, setNotes }) => {
  const inputHandler = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };

  const addNotesHandler = async (e) => {
    e.preventDefault();
    if (title === "") {
      alert("title cannot be empty");
    } else if (content === "") {
      alert("content cannot be empty");
    } else {
      try {
        let res = await axios.post(
          `${url}`,
          { title, content },
          { headers: authHeader() }
        );
        console.log("res", res.data.notes);
        setNotes((prev) => [res.data.notes, ...prev]);
        alert(`Note successfully added`);
        setTitle("");
        setContent("");
      } catch (error) {
        console.error("Error creating note:", error);
        alert(`Trouble creating note`);
      }
    }
  };

  return (
    <>
      <div className="container my-3">
        <div className="row-justify-content-center">
          <div className="col-md-10">
            <form
              style={{
                border: "2px solid #ced4da",
                borderRadius: "10px",
                padding: "30px",
              }}
            >
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter your title"
                  value={title}
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  rows={3}
                  className="form-control"
                  placeholder="Enter About your description"
                  value={content}
                  onChange={inputHandler}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addNotesHandler}
              >
                Add Notes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;

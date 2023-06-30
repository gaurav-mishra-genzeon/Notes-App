import axios from "axios";
import authHeader from "../services/auth-header";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Edit = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const url = `http://localhost:3001/api/notes`;

  //GET Notes
  const fetchNotes = async () => {
    try {
      const res = await axios.get(`${url}`, { headers: authHeader() });
      if (res.data) {
        setNotes(res.data.notes);
      }
    } catch (error) {
      console.error("Error getting notes:", error);
    }
  };

  
  const inputHandler = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };

  const editNoteHandler = async (e) => {
    e.preventDefault();
    if (title === "") {
      alert("title cannot be empty");
    } else if (content === "") {
      alert("content cannot be empty");
    } else {
      try {
        let res = await axios.patch(
          `${url}/${id}`,
          { title, content },
          { headers: authHeader() }
        );
        setNotes((prev) => [res.data.notes, ...prev]);
        alert(`Note successfully edited`);
        setTitle("");
        setContent("");
        fetchNotes();
        nav("/dashboard");
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
                  value={title}
                  onChange={inputHandler}
                  placeholder="Enter your title"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  rows={3}
                  className="form-control"
                  value={content}
                  onChange={inputHandler}
                  placeholder="Enter About your description"
                />
              </div>
              <button
                onClick={editNoteHandler}
                type="submit"
                className="btn btn-primary"
              >
                Edit Note
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;

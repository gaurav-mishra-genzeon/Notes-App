import { useEffect, useState } from "react";
import { Button, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Forms from "../../Notes/Forms";
import axios from "axios";
import authHeader from "../services/auth-header";
import _ from "lodash";
import Notes from "../../Notes/Notes";

export let fetchNotes;
const pageSize = 4;
const Dashboard = () => {
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState<any[]>([]);
  const [done, setDone] = useState(false);
  const [paginatedPosts, setPaginatedPosts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchNotes();
  },[]);


  const url = `http://localhost:3001/api/notes`;

  const pageCount = notes ? Math.ceil(notes.length / pageSize) : 0;
  if (pageCount === 1) {
    return null;
  }
  const pages = _.range(1, pageCount);

  const paginationFunc=(pageNo)=>{
        setCurrentPage(pageNo);
        const startIndex= (pageNo-1)* pageSize
        const paginatedPosts = _(notes).slice(startIndex).take(pageSize).value()
        setPaginatedPosts(paginatedPosts)
  }

  //GET Notes
fetchNotes = async () => {
    try {
      const res = await axios.get(`${url}`, { headers: authHeader() });
      if (res.data) {
        setNotes(res.data.notes);
        // setPaginatedPosts(_(res.data.notes).slice(0).take(pageSize).value());
      }
    } catch (error) {
      console.error("Error getting notes:", error);
    }
  };

  // Delete Notes
  const deleteNote = async (id) => {
    try {
      await axios.delete(`${url}/${id}`, { headers: authHeader() });
      setNotes(notes.filter((note) => note.id !== id));
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  //Status Note
  const statusNote = async (id) => {
    console.log("Status",id);
    try {
     await axios.patch(`${url}/status/${id}`);
   
    } catch (error) {
      console.error('Error toggling note:', error);
    }
  };

  const removeHandler = (id) => {
    deleteNote(id);
  };

  const statusHandler = (id) => {
    statusNote(id);
  };

  return (
    <div>
      <>
        <Forms
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          notes={notes}
          setNotes={setNotes}
        />

        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h1 className="mb-3">Your Notes</h1>
              {notes.length === 0 ? (
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Message</h5>
                    <p className="card-text">
                      No notes are Available for Reading
                    </p>
                  </div>
                </div>
              ) : (
               notes.map((element) => {
                  return (
                    <Notes
                      key={element.id}
                      id={element.id}
                      title={element.title}
                      content={element.content}
                      // status={element.done}
                      removeHandler={removeHandler}
                      notes={notes}
                      setNotes={setNotes}
                      statusHandler={statusHandler}
                      done={element.done}
                      setDone={setDone}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <p  onClick={()=>paginationFunc(page)} className="page-link">{page}</p>
              </li>
            ))}
          </ul>
        </nav>
        {/* <Pagination notes={notes} setNotes={setNotes}/> */}
        {/* <Button className="ml-auto" onClick={userlogout}>LogOut</Button> */}
      </>
    </div>
  );
};

export default Dashboard;

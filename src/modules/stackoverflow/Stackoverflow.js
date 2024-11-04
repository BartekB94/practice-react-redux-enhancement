import React from "react";
import { getPosts, setTitle } from "./stackoverflow.actions";
import { useSelector, useDispatch } from "react-redux";

function Stackoverflow() {
  const dispatch = useDispatch();
  const { posts, title } = useSelector((state) => state.stackoverflow);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPosts(title));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          value={title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Stackoverflow;

import React from "react";
import { getPosts, setTitle, setOption } from "./stackoverflow.actions";
import { useSelector, useDispatch } from "react-redux";

function Stackoverflow() {
  const dispatch = useDispatch();
  const { items, title, option } = useSelector((state) => state.stackoverflow);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPosts(title, option));
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
        <select
          name="sort"
          value={option}
          onChange={(e) => dispatch(setOption(e.target.value))}
        >
          <option value="activity">activity</option>
          <option value="votes">votes</option>
        </select>
        <button type="submit">Search</button>
      </form>
      <div>
        <ul>
          {items.map((post, index) => (
            <li key={index}>
              <a href={post.link}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Stackoverflow;

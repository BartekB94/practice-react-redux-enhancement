import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRepositories, setUsername, setSearchQuery } from "./github.actions";

function Github() {
  const dispatch = useDispatch();
  const { repositories, username, searchQuery } = useSelector(
    (state) => state.github
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRepositories(username));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <input
          type="text"
          placeholder="filter"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <ul>
          {repositories
            .filter((name) => {
              return searchQuery.toLowerCase() === ""
                ? name
                : name.name.toLowerCase().includes(searchQuery);
            })
            .map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Github;

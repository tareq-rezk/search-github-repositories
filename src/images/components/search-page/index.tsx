import React, { useState, Fragment } from "react";
import DropDownMenu from "../drop-down";
import RepoCard from "../repo-card";
import "./search-page.css";

let githubLogo = require('../../images/githubLogo.png');
let searchIcon = require('../../images/searchIcon.svg');

interface RepoDataInterface{
  id:string;
  fullName?:string;
  name?:string;
  description?:string;
  stargazers_count?:number;
  forks?:number
}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [orderBy,setOrderBy] = useState('asc') //asc || desc
  const [sortBy,setSortBy] = useState('') // stars || forks
  const [reposData, setReposData] = useState([]);

  const sortingOptions = [
    {
      id: "1",
      value: "stars",
    },
    { id: "2", value: "forks" },
  ];
  // const orderingOptions = [
  //   {
  //     id: "1",
  //     value: "desc",
  //   },
  //   { id: "2", value: "asc" },
  // ];
  const handleSearch =(
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newQuery = e.currentTarget.value;
    setSearchQuery(newQuery);
    console.log(newQuery);
  };

  const searchRepos = async (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    const repoUrl = `https://api.github.com/search/repositories?q=${
      searchQuery
    }&sort=${sortBy}`;
    await fetch(repoUrl)
      .then((response) => response.json())
      .then((data) => {
        setReposData(data?.items);
        console.log(data.items);
      });
  };

  return (
    <>
      <main>
        <h1>Github Search App</h1>
        <div className="search-repos">
          <div className="search-repos__img">
            <img src={githubLogo} alt="github logo" />
          </div>
          <form onSubmit={searchRepos}>
            <img src={searchIcon} alt="search icon" />
            <input
              type="text"
              name="search"
              autoComplete="off"
              placeholder="Search for Github repositories"
              value={searchQuery}
              onChange={handleSearch}
            />
          </form>
        </div>
        <div className="search-filters">
          <DropDownMenu options={sortingOptions} setSortBy={setSortBy} sortBy={sortBy} />
          {/* <DropDownMenu options={orderingOptions} /> */}
          <button>Reset</button>
        </div>
        {reposData ? (
          <section className="result-list">
            {reposData?.map((item:RepoDataInterface) => (
              <Fragment key={item.id}>
                <RepoCard
                  fullName={item.fullName}
                  name={item.name}
                  description={item.description}
                  starsCount={item.stargazers_count}
                  forksCount={item.forks}
                />
              </Fragment>
            ))}
          </section>
        ) : (
         <h1>Search to see Result</h1>
        )}
      </main>
    </>
  );
};
export default Search;

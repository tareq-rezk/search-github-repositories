import React, { useState } from "react";
import DropDownMenu from "../drop-down";
import {FilterBtn, FiltersContainer, Form, GitHubLogo, Main, MainHeading, SearchBtn, SearchHead, SearchIcon, SearchInput, Warning} from './search.styles'
import searchIcon from "../../images/searchIcon.svg";
import githubLogo from "../../images/githubLogo.png";
import ReposList from "../repo-list";

const Search = () => {
  const [loadingData, setLoadingData] = useState(false);
  const [reposData, setReposData] = useState([]);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [orderBy, setOrderBy] = useState(""); //asc || desc
  const [sortBy, setSortBy] = useState(""); // stars || forks

  const sortingOptions = [
    {
      id: "1",
      value: "stars",
    },
    { id: "2", value: "forks" },
  ];
  const orderingOptions = [
    {
      id: "1",
      value: "desc",
    },
    { id: "2", value: "asc" },
  ];

  //

  // call github search API and get data
  const searchRepos = async (event) => {
    event?.preventDefault();
    setLoadingData(true);
    setError(false)
    setReposData([]);
    const baseUrl = "https://api.github.com/search/repositories?q=";
    const getReposUrl = `${baseUrl}${searchQuery}&sort=${sortBy}&order=${orderBy}`;
    await fetch(getReposUrl)
      .then((response) => response.json())
      .then((data) => {
        if (!data?.errors) {
          setReposData(data?.items || []);
          setLoadingData(false);
          setError(false);
        }
       else {
        setLoadingData(false) 
        setError(true);}
      });
  };

  // reset filters values
  const resetFilters = () => {
    setOrderBy("");
    setSortBy("");
  };

  // the next useEffect: if we want to apply reset button and search immediately
  // eslint-disable-next-line no-lone-blocks
  {
    /*   React.useEffect(() => {
     if (searchQuery) {
       searchRepos();
     }
     return () => {};
   }, [orderBy, sortBy]);
  */
  }

  return (
    <>
      <Main>
        <MainHeading>Github Search App</MainHeading>
        <SearchHead>
          <SearchHead>
            <GitHubLogo src={githubLogo} alt="github logo" />
          </SearchHead>
          <div>
            <Form onSubmit={searchRepos}>
              <SearchBtn type="submit">
                <SearchIcon src={searchIcon} alt="search icon" />
              </SearchBtn>
              <SearchInput
                type="text"
                name="search"
                autoComplete="off"
                placeholder="Search for Github repositories"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form>
            {error ? (
              <Warning>
                please type any word in search input
              </Warning>
            ) : (
              ""
            )}
          </div>
        </SearchHead>
        <FiltersContainer>
          <DropDownMenu
            options={sortingOptions}
            defaultValue="Sort By"
            setFilterValue={setSortBy}
            filterValue={sortBy}
          />
          <DropDownMenu
            options={orderingOptions}
            defaultValue="Order By"
            filterValue={orderBy}
            setFilterValue={setOrderBy}
          />
          {orderBy || sortBy ? (
            <FilterBtn primary onClick={searchRepos} className="btn-apply">
              Apply filters
            </FilterBtn>
          ) : (
            ""
          )}
          <FilterBtn warning onClick={resetFilters}>
            Reset
          </FilterBtn>
        </FiltersContainer>
        {loadingData ? <h1>Loading Data</h1> : ""}
        {reposData?.length ? <ReposList data={reposData} /> : ""}
        {error ? <h2>Type any word in search input to see results</h2> : ""}
      </Main>
    </>
  );
};
export default Search;

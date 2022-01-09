import { Fragment } from "react";
import RepoCard from "../repo-card";
import styled from "styled-components";

const List = styled.section`  width: 100%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-gap: 1em;
gap: 20px;`

const ReposList = (props) => {
  const { data } = props;
  return (
    <List>
      {data?.map((item) => (
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
    </List>
  );
};
export default ReposList;

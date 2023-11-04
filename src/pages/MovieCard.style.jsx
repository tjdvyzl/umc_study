import styled from "styled-components";

const StyledMovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledMovieImg = styled.img`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.imgurl || ""}) no-repeat center center;
  background-size: cover;
`;

const StyledMovieCardOverview = styled.div`
  display: none;
  position: absolute;
  text-overflow: ellipsis;
  width: 300px;
  height: 400px;
`;

const StyledMovieCard = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 400px;
  margin: 15px;
  &:hover {
    ${StyledMovieCardOverview} {
      display: block;
    }
    ${StyledMovieImg} {
      opacity: 0.5;
    }
  }
`;

export function MyMovieContainer({ children }) {
  return <StyledMovieContainer>{children}</StyledMovieContainer>;
}

export function MyMovieImg({ children, imgurl }) {
  return <StyledMovieImg imgurl={imgurl}>{children}</StyledMovieImg>;
}

export function MyMovieCardOverview({ children }) {
  return <StyledMovieCardOverview>{children}</StyledMovieCardOverview>;
}

export function MyMovieCard({ children, onClickHandler }) {
  return <StyledMovieCard onClick={onClickHandler}>{children}</StyledMovieCard>;
}

import styled from "styled-components";

const StyledMovieContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
`;

const StyledMovieImg = styled.img`
    width: 100%;
    height:100%;
    background: url(${(props) => props.imgUrl || ""}) no-repeat center center;
    background-size: cover;
`;

const StyledMovieCardOverview = styled.div`
    display: none;
    position: absolute;
    text-overflow: ellipsis;
    width:300px;
    height:400px;
`;

const StyledMovieCard = styled.div`
    border:1px solid black;
    width: 300px;
    height:400px;
    &:hover {
        ${StyledMovieCardOverview} {
            display: block;
        }
        ${StyledMovieImg} {
            opacity: 0.5;
        }
    }
`;

export function MyMovieContainer({children}){
    return <StyledMovieContainer>{children}</StyledMovieContainer>
}

export function MyMovieImg({children, imgUrl}){
    return <StyledMovieImg imgUrl={imgUrl}>{children}</StyledMovieImg>
}

export function MyMovieCardOverview({children}){
    return <StyledMovieCardOverview>{children}</StyledMovieCardOverview>
}

export function MyMovieCard({children}){
    return <StyledMovieCard>{children}</StyledMovieCard>
}
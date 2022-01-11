import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  /* padding: 0 50px; */
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  /* text-align: justify; */
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`

export const Container = styled.div`
    padding: 10px 20px 10px 20px;
    margin:10px;
    background-color:#0e1421;
    background-size: cover;
    background-repeat: no-repeat;
    transition: opacity 0.4s ease-in;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    aspect-ratio:1/ 1.6;
    /* min-height:500px; */
    align-items:center;
    justify-content: center;
    /* border:1px solid #222222; */
    & > h2 {
        color:white;
        margin:0;
    }
`;
export const Cover = styled.div`
    width:100%;
    aspect-ratio: 1 / 1;
    display:flex;
    object-fit:cover;
    overflow:hidden;
    /* border:1px solid purple; */
    & > img {
        height:100%;
        width:100%;
        object-fit:cover;
        overflow: hidden;
    }
`;

export const Info = styled.div`
width:100%;
display:flex;
flex-direction:column;
/* border:1px solid purple; */
padding:10px 0px 0px 0px;
min-height:250px;
    & > h2{
        color:white;
        margin:0;
        font-size:20px;
    }
    & > p{
        color:white;
        margin:0;
        font-size:14px;
        font-weight:700;
    }

`;


export const Container2 = styled.div`
    display:flex;
    flex-direction:row;
    /* padding-bottom:3rem; */
    z-index:1;
    min-height:auto;
    /* @media ${(props) => props.theme.breakpoints.md} {
      margin-top:50px;
}
    @media ${(props) => props.theme.breakpoints.sm} {
      margin-top:80px;
  } */
    /* background-color:#BBB; */
    @media (max-width: 768px) {
      flex-direction:column;
    }
`;
export const Title = styled.div`
    flex:1;
    width:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:-1;
    /* background-color:green; */
    & > h2 {
        transform: rotate(270deg);
    }
    @media (max-width: 768px) {
        & > h2 {
        transform: rotate(0)
    }
    }
`;
export const Content = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: minmax(200px, auto);
    /* grid-gap: 20px; */
    min-height: auto;
    @media (min-width: 550px) {
        grid-template-columns:${({ toggle }) => toggle ? 'repeat(2, minmax(200px, 1fr))' : null};
        padding: 10px;
    }
    @media (min-width: 750px) {
        grid-template-columns:${({ toggle }) => toggle ? 'repeat(3, minmax(200px, 1fr))' : null};
        padding: 10px;
    }
    @media (min-width: 980px) {
        grid-template-columns:${({ toggle }) => toggle ? 'repeat(4, minmax(200px, 1fr))' : null};
        padding: 10px;
    }
    @media (min-width: 1200px) {
        grid-template-columns:${({ toggle }) => toggle ? 'repeat(5, minmax(200px, 1fr))' : null};
        padding: 10px;
    }
    @media (min-width: 1650px) {
        grid-template-columns:${({ toggle }) => toggle ? 'repeat(6, minmax(200px, 1fr))' : null};
        padding: 10px;
    }
    @media (min-width: 1900px) {
        grid-template-columns:${({ toggle }) => toggle ? 'repeat(7, minmax(200px, 1fr))' : null};
        padding: 20px;
    }

    @media (min-width: 750px) {
        grid-template-columns:${({ toggle }) => toggle ? null : 'repeat(2, minmax(200px, 1fr))'};
        padding: 10px;
    }
    @media (min-width: 1000px) {
        grid-template-columns:${({ toggle }) => toggle ? null : 'repeat(3, minmax(200px, 1fr))'};
        padding: 10px;
    }
    @media (min-width: 1250px) {
        grid-template-columns:${({ toggle }) => toggle ? null : 'repeat(4, minmax(200px, 1fr))'};
        padding: 10px;
    }
    @media (min-width: 1450px) {
        grid-template-columns:${({ toggle }) => toggle ? null : 'repeat(5, minmax(200px, 1fr))'};
        padding: 10px;
    }
    @media (min-width: 1750px) {
        grid-template-columns:${({ toggle }) => toggle ? null : 'repeat(6, minmax(200px, 1fr))'};
        padding: 10px;
    }
    @media (min-width: 2090px) {
        grid-template-columns:${({ toggle }) => toggle ? null : 'repeat(7, minmax(200px, 1fr))'};
        padding: 20px;
    } 
`;


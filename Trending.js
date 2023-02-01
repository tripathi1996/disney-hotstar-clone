import styled from "styled-components";

const Trending = (props) => {

    return ( <
        Container >
        <
        Movesec > Trending < /Movesec> <
        Content >

        <
        Wrap >
        <
        img src = "https://www.newszii.com/wp-content/uploads/2020/04/URI-Full-Movie-Watch-Online.jpg"
        alt = "" / >
        <
        /Wrap> <
        Wrap >
        <
        img src = "https://www.quirkybyte.com/wp-content/uploads/2021/05/John-wick-4.jpg"
        alt = "" / >
        <
        /Wrap> <
        Wrap >
        <
        img src = "https://i.ytimg.com/vi/Y7GT5_sFtUA/maxresdefault.jpg"
        alt = "" / >
        <
        /Wrap>

        <
        Wrap >
        <
        img src = "https://th.bing.com/th/id/OIP.i9tnd3Ggf-bg1QOCmr08MwHaDt?pid=ImgDet&rs=1"
        alt = "" / >
        <
        /Wrap> <
        Wrap >
        <
        img src = "https://th.bing.com/th/id/OIP.duoiQlReS7EASt8313WgtQHaEK?pid=ImgDet&rs=1"
        alt = "" / >
        <
        /Wrap> <
        Wrap >
        <
        img src = "https://th.bing.com/th/id/OIP.Meu4fPJrkkct5U_qHdO69wHaEI?pid=ImgDet&rs=1"
        alt = "" / >
        <
        /Wrap> <
        Wrap >
        <
        img src = "https://th.bing.com/th/id/OIP.oD4XnHdZBD--SdiyU4qLHQHaLH?pid=ImgDet&rs=1"
        alt = "" / >
        <
        /Wrap>

        <
        Wrap >
        <
        img src = "https://th.bing.com/th/id/OIP.wgSTFn0etFUBg4OZMfCN4QHaLH?pid=ImgDet&rs=1"
        alt = "" / >
        <
        /Wrap>


        <
        /Content> <
        /Container>
    );
};
const Movesec = styled.h1 `
  padding: 0 0 26px;
  color: 	#800000;
`;

const Container = styled.div `
  padding: 0 0 26px;
`;

const Content = styled.div `
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div `
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Trending;
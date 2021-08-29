import styled from "styled-components";

export const Container = styled.div.attrs({
  className:"caixaimagens"
})`  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  
`;

export const Preview = styled.div.attrs({
  className:"previewPhoto"
})`
  width: 32%;
  height: 15vh;
  display: block;
  margin-bottom: 10px;
  box-shadow: 0px 1px 6px #00000055;
    
  
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  &:first-child{
    width: 100%;
    height: 35vh;
  }
`;
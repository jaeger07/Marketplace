import styled from "styled-components";

export const Container = styled.div.attrs({
  className:"caixaimagens"
})`  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  
`;

export const Preview = styled.div`
  width: 32%;
  height: 15vh;
  display: block;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 4px #00000092;
    
  
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  &:first-child{
    width: 100%;
    height: 35vh;
  }
`;
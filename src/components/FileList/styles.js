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
  width: 150px;
  height: 150px;
  display: block;
  margin-bottom: 5px;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
    
  
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  &:first-child{
    width: 100%;
    height: 220px;
  }
`;
import styled from "styled-components";


export const ReplysSection = styled.section`
    position:relative;
    display: flex;
    width: 500px;
    padding: 10px;
    border-radius: 20px;
    flex-direction:column;
    background-color: #F7F1ED;
`;
export const ReplysUl = styled.ul`
  /* width: 470px; */
  height: 200px;
  background-color: yellow;
  list-style: none;
  padding: 0;


  overflow-wrap: break-word;
  /* overflow-overflow-x */
  /* position: absolute;
  top: 0; */
  position: relative;

  border: 1px solid #ccc;
`

export const ReplyLi = styled.li`
  position: relative;
  /* background-color: beige; */
  /* margin-bottom: 7px; */
  /* padding-top: 10px; */
  width: 420px;
  background-color: red;
  position: relative;
  /* margin-top: -10px; */
  white-space: pre-wrap;
  /* width: 300px; */
  border-bottom: 1px solid #ccc;
  border-width: 20%;
  margin-left: 20px;
`;

export const ReplyTextContent = styled.input`

  font-size: 16px;
  width: 350px;
  padding: 5px;
align-items: center;
  margin-left: 10px;
  border: 0;
`;

export const CreateReplyBox = styled.div`
    border-radius: 20px;
    height: 50px;
    background-color: white;
    flex-direction: row;
    align-items: center;
    display:flex;
    align-items:center;
    justify-content: center;
`;

export const ReplyBtn = styled.button`
  /* background-color: chartreuse; */
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin-left: 25px;
`;

export const ReplyDeleteBtn = styled.button`
  background-color: transparent;
  padding: 5px 0;
  width: 20px;
  height: 20px;
  top: 0px;
  border: 0;
  background-image: url(${(props) => props.src || ""});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 0px;
  cursor: pointer;
`;

export const ReplyP = styled.p``;
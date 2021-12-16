import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';
import Icon2 from "../../assets/img/icons/Icon.png";

const CommentInput = ({ onInsert }) => {
    const [value, setValue] = useState({
        name: '',
        content: ''
    });

    const onChangeName = useCallback(
        (e) => {
            setValue({
                name: e.target.value,
                content: value.content,
            });
        },
        [value]
    );

    const onChangeContent = useCallback(
        (e) => {
            setValue({
                name: value.name,
                content: e.target.value,
            });
        },
        [value]
    );


    const onSubmit = useCallback(
        e => {
            onInsert(value.name, value.content);
            setValue({
                name: '',
                content: ''
            });

            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <>
        <CommentInsert
        className="CommentInsert"
        onSubmit={onSubmit}>
         
        
            <InputTexts>
            <input placeholder="댓글로 소통해요!"
                value={value.content}
                onChange={onChangeContent}
            /></InputTexts>
      <Button type="submit">
          <img src={Icon2} alt={''} 
          />
      </Button>
    
     </CommentInsert>
     </>
    )
}
const Button = styled.button`
    cursor: pointer;
    padding: 0;
border: none;
background: none;

`

const CommentInsert =styled.form`
    border-radius: 20px;
    display: flex;
    flex-direction: row;

    /* justify-content: flex-start; */
    align-items: center;
    padding: 10px 12px;
    /* margin : 2rem;
    margin-bottom: 3rem; */
    background-color: white;
    
    bottom: 0px;
    display: flex;
    box-sizing: border-box;
    margin-bottom: 1.5rem;

    & input {
      border: none;
      width: 100%;
      height:50%;
      background-color: transparent;
      font-size: 2rem;
      outline: none;
      flex: 0.75;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.pointColor2};
    }
`

const InputTexts = styled.div`
background: white;
width: 100%;
`
export default CommentInput;
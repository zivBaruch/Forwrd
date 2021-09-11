import styled from 'styled-components';
import Select from 'react-select';

export const Page = styled.div`
    background: #fcfaff;
    padding: 20px;
    height: 100vh;
    width: 100vw;
`;

export const Input = styled.input`
    margin: 5px 15px;
    padding: 2.5px 10px;
    min-height: 30px;
    background-color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    width: 258px;  
   
  font-family: system-ui;
  font-size: inherit;
    &:focus {
        outline: none;
        border-color: rgb(38,132,255);
        box-shadow: rgb(38,132,255) 0px 0px 0px 1px ;
    }

`;

export const StyledSelect = styled(Select)`
    width: 300px;
    display: inline-block;
    margin: 5px;
    padding: 2.5px 10px;
`;

export const Button = styled.button`
    background:  #eee;
    color: #468ff0;
    font-size: 16px;
    margin: 15px;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
`;

export const Remove = styled(Button)`
    color: #d75555;
`;



export const SelectComp = styled.select`
    margin: 5px;
    padding: 2.5px 10px;
    border-radius: 4px;
    border-width: 1px;
    width: 300px;

    align-items: center;
    background-color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    min-height: 38px;
`;


export const SwichHolder = styled.div`
    display: inline-block;
    margin: 5px 10px;
    position: relative;
    padding: 0px 5px;
    vertical-align: middle;
`;

export const OutPut = styled.div`
    font-family: monospace;
    font-size: 14px;
    margin: 5px 15px;
`;
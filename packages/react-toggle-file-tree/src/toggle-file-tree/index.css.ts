import styled from '@emotion/styled';

const Container = styled.div`
  & * {
    margin: 0px;
    padding: 0px;
  }
`;
const DepthContainer = styled.div`
  padding: 10px 0px;
  padding-left: 22px;
`;
const CheckboxContainer = styled.label`
  display: block;
  font-size: 14px;
  & > p {
    cursor: pointer;
  }
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;
const Checkbox = styled.input`
  width: 0px;
  height: 0px;
  visibility: hidden;
  position: absolute;
  left: 0;
  &:checked ~ div {
    display: block;
  }
  & ~ div {
    display: none;
  }
  & ~ .checkbox-container > div > .right {
    display: block;
  }
  & ~ .checkbox-container > div > .down {
    display: none;
  }
  &:checked ~ .checkbox-container > div > .right {
    display: none;
  }
  &:checked ~ .checkbox-container > div > .down {
    display: block;
  }
`;
const FileContainer = styled.div`
  padding-left: 22px;
  & > p {
    line-height: 24px;
  }
`;
const File = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 10px 0px;
  p {
    font-size: 15px;
    margin-left: 6px;
  }
`;
const Locale = styled.span`
  padding: 1px 5px;
  background-color: #959dad;
  color: white;
  border-radius: 4px;
  margin-left: 8px;
  font-size: 12px;
  font-weight: bold;
`;

export {
  Container,
  DepthContainer,
  CheckboxContainer,
  Checkbox,
  FileContainer,
  File,
  Locale,
};

import styled from '@emotion/styled';

const Container = styled.div`
  & * {
    margin: 0px;
    padding: 0px;
  }
`;
const DepthContainer = styled.div`
  padding-left: 22px;
`;
const CheckboxContainer = styled.label`
  display: block;
  line-height: 15px;
  font-size: 14px;
  & > p {
    cursor: pointer;
  }
`;
const Checkbox = styled.input`
  width: 1px;
  height: 1px;
  visibility: hidden;
  &:checked ~ div {
    display: block;
  }
  & ~ div {
    display: none;
  }
`;
const FileContainer = styled.div`
  padding-left: 22px;
  padding-bottom: 5px;
  & > p {
    line-height: 24px;
    padding-bottom: 20px;
  }
`;
const File = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
  cursor: pointer;
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

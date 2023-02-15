import styled from "@emotion/styled";

const UploadDiv = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const UploadForm = styled.form`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    &:active,
    &:focus {
      outline: none;
    }
  }
  textarea {
    min-height: 350px;
    resize: none;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    &:active,
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 15px;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: #c6c6c6;
      border-radius: 15px;
      box-shadow: 0 0 5px whitesmoke inset;
      border: 2px solid transparent;
    }
  }
  label {
    display: #333;
    font-weight: bold;
    margin-top: 20px;
  }
`;

const UploadButtonDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;

  button {
    padding: 10px;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    border: 1px solid #333;
    font-size: 1rem;
    transition: all 0.25s ease-in-out;
    &:hover {
      background-color: #fff;
      color: #333;
    }
  }
`;

export { UploadDiv, UploadForm, UploadButtonDiv };

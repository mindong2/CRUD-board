// 스타일링
import styled from "@emotion/styled";

const MypageDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  max-width: 1920px;
`;

const MypageForm = styled.form`
  text-align: center;
  h2 {
    margin-top: 2rem;
  }
  button {
    margin-top: 2rem;
    padding: 1rem 3rem;
    background-color: #74b9ff;
    color: #fff;
    border-radius: 4px;
    border: 1px solid #74b9ff;
    font-size: 2rem;
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
    &:hover {
      background-color: #0984e3;
    }
  }
`;

export { MypageDiv, MypageForm };

// 스타일링
import styled from "@emotion/styled";

const RepleDiv = styled.div`
  max-width: 76rem;
  width: 90%;
  margin: 2rem auto;

  textarea {
    width: 100%;
    min-height: 10rem;
    padding: 1rem;
    font-size: 2rem;
    border: 1px solid #c3c3c3;
    border-radius: 4px;
    resize: none;
    outline: none;
  }

  button {
    font-size: 1.6rem;
  }

  .reple-content {
    margin-top: 2rem;
  }
`;

const RepleListDiv = styled.div`
  margin-top: 2rem;

  &:first-of-type {
    margin-top: 0;
  }

  p {
    margin-top: 1rem;
    font-size: 2.4rem;
  }
`;

const RepleForm = styled.form`
  textarea {
    height: 15rem;
  }
`;

export { RepleDiv, RepleListDiv, RepleForm };

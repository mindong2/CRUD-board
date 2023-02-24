// 스타일링
import styled from "@emotion/styled";

const ListParent = styled.div`
  max-width: 1920px;
  width: 90%;
  margin: 5rem auto;
  ul {
    position: relative;
  }

  ul li {
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    margin-top: 20px;
    list-style: none;
    box-shadow: 2px 4px 10px 0 #a1a1a1;
    transition: all 0.25s ease-in-out;

    &:hover {
      transform: scale(1.01);
    }

    &:first-of-type {
      margin-top: 0;
    }
    a {
      display: inline-block;
      width: 100%;
      padding: 20px;
      color: #333;
      text-decoration: none;
    }
  }
`;

export { ListParent };

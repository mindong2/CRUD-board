import styled from "@emotion/styled";
const LoginInputDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 5px 0 #333;
  font-size: 26px;
  @media screen and (max-width: 500px) {
    width: 90%;
    margin: 0 auto;
    font-size: 18px;
  }
  .input_box {
    margin-top: 20px;
    &:first-of-type {
      margin-top: 0;
    }
  }
  input {
    outline: none;
    border: 2px solid #e1e1e1;
    width: 100%;
    padding: 5px 10px;
  }
  label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .btn_area {
    margin-top: 20px;
    text-align: right;
    button {
      border: none;
      background-color: #333;
      color: #fff;
      padding: 10px;
      margin-left: 15px;
      &:first-of-type {
        margin-left: 0;
      }
    }
  }
`;

export default LoginInputDiv;

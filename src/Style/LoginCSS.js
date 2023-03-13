import styled from "@emotion/styled";
const LoginInputDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50rem;
    padding: 3rem;
    border-radius: 2rem;
    box-shadow: 0 0 0.5rem 0 #333;
    font-size: 2.6rem;
    @media screen and (max-width: 50rem) {
        width: 90%;
        margin: 0 auto;
        font-size: 1.8rem;
    }
    .input_box {
        margin-top: 2rem;
        &:first-of-type {
            margin-top: 0;
        }
        input {
            outline: none;
            border: 2px solid #e1e1e1;
            border-radius: 4px;
            width: 100%;
            padding: 0.5rem 1rem;
        }
        label {
            display: block;
            margin-bottom: 1rem;
            font-weight: bold;
        }
    }

    .btn_area {
        margin-top: 2rem;
        text-align: right;
        button {
            padding: 1rem 3rem;
            background-color: #74b9ff;
            color: #fff;
            border-radius: 4px;
            border: 1px solid #74b9ff;
            font-size: 2rem;
            transition: all 0.25s ease-in-out;
            &:hover {
                background-color: #0984e3;
            }
        }
    }
`;

export default LoginInputDiv;

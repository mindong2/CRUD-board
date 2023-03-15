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
    margin-top: 3rem;

    &:first-of-type {
        margin-top: 0;
    }

    h5 {
        display: flex;
        align-items: center;
    }

    p {
        margin-top: 2rem;
        font-size: 2.4rem;
    }

    .reple-info {
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
        b {
            font-size: 1.6rem;
            color: #c3c3c3;
        }
    }

    .modalDiv {
        position: absolute;
        top: 3rem;
        right: -0.5rem;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: #fff;
        border: 1px solid #c3c3c3;
        border-radius: 0.6rem;
    }
`;

const RepleForm = styled.form`
    textarea {
        height: 15rem;
    }
`;

export { RepleDiv, RepleListDiv, RepleForm };

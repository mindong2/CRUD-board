import styled from "@emotion/styled";

const MainPageDiv = styled.div`
    display: flex;
    max-width: 1920px;
    width: 90%;
    margin: 5rem auto;
    font-size: 2rem;
    button {
        font-family: "Noto Sans KR", sans-serif;
        margin-right: 1rem;
        font-size: 2rem;
    }
    a {
        font-size: 1.6rem;
    }
    .btn-check:checked + .btn,
    .btn.active,
    .btn.show,
    .btn:first-of-type:active,
    :not(.btn-check) + .btn:active,
    .btn:hover {
        font-family: "Noto Sans KR", sans-serif;
        background-color: rgb(116, 185, 255);
        border-color: rgb(116, 185, 255);
    }
    input[type="text"] {
        padding: 0 1rem;
        border: 1px solid #e3e3e3;
        border-radius: 4px;
        outline: none;
    }

    @media screen and (max-width: 760px) {
        input[type="text"] {
            width: 100%;
        }
    }
`;

const MainPageButtonDiv = styled.div`
    margin: 3rem 0;
    display: flex;
    justify-content: center;

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
`;

export { MainPageDiv, MainPageButtonDiv };

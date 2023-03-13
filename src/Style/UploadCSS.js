import styled from "@emotion/styled";

const UploadDiv = styled.div`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 2.4rem;
`;

const UploadForm = styled.form`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    #title {
        width: 100%;
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid #c6c6c6;
        &:active,
        &:focus {
            outline: none;
        }
    }
    input[type="file"] {
        font-size: 1.6rem;
    }
    textarea {
        min-height: 35rem;
        resize: none;
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid #c6c6c6;
        &:active,
        &:focus {
            outline: none;
        }
        &::-webkit-scrollbar-thumb {
            background-color: grey;
            border-radius: 1.5rem;
            border: 2px solid transparent;
        }
        &::-webkit-scrollbar-track {
            background-color: #c6c6c6;
            border-radius: 1rem;
            box-shadow: 0 0 5px whitesmoke inset;
            border: 2px solid transparent;
        }
    }
    label {
        display: #333;
        font-weight: bold;
        margin: 2rem 0 1rem 0;
    }
`;

const UploadButtonDiv = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;

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

export { UploadDiv, UploadForm, UploadButtonDiv };

import styled from "@emotion/styled";

const DetailPageDiv = styled.div`
    max-width: 760px;
    width: 90%;
    margin: 5rem auto;
    p {
        margin-top: 2rem;
        font-size: 1.6rem;
        white-space: pre-line;
    }
    h3 {
        display: flex;
        align-items: center;
        margin: 2rem 0;
        font-size: 2rem;
        > div {
            margin-right: 1rem;
        }
    }
`;

export { DetailPageDiv };

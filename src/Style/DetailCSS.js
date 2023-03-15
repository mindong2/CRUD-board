import styled from "@emotion/styled";

const DetailPageDiv = styled.div`
    max-width: 760px;
    width: 90%;
    margin: 5rem auto;
    p {
        font-family: "GangwonEdu_OTFBoldA";
        margin-top: 2rem;
        font-size: 2.4rem;
        white-space: pre-line;
        line-height: 1.5;
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

    .btnDiv {
        font-size: 1.6rem;
        button {
            padding-left: 0;
        }
    }
`;

export { DetailPageDiv };

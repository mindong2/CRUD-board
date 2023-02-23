// 스타일링
import styled from '@emotion/styled';

const ListParent = styled.div`
    max-width: 1920px;
    width: 90%;
    margin:5rem auto;

    ul{
        position: relative;
    }

    ul li {
        padding: 20px;
        border: 1px solid #e3e3e3;
        border-radius: 10px;
        margin-top: 20px;
        list-style: none;
        transition: all .25s ease-in-out;

        &:hover{
            box-shadow: 0 0 0 2px #333 inset;
        }

        &:first-child{
            margin-top: 0;
        }
        a{
            color: #333;
            text-decoration: none;
        }
    }
`

export {ListParent};
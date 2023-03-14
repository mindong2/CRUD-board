// 스타일링
import styled from "@emotion/styled";

const ListParent = styled.div`
  max-width: 1920px;
  width: 90%;
  margin: 5rem auto;
  ul {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }

  ul li {
    position: relative;
    width: 40rem;
    border-radius: 1rem;
    list-style: none;
    overflow: hidden;
    box-shadow: 2px 4px 10px 0 #a1a1a1;
    transition: all 0.25s ease-in-out;

    &:hover {
      transform: translateY(-1rem);
    }

    a {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      color: #333;
      text-decoration: none;

      .padding-side {
        padding: 1rem 2rem;
        h4 {
          margin-top: 2rem;
          font-size: 3.2rem;
          font-weight: bold;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: normal;
        }
        h5 {
          display: flex;
          align-items: center;
          margin-top: 1rem;
          font-size: 2.2rem;
        }
      }
    }

    .post-img {
      position: relative;
      padding-top: 56.25%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .post-img-none {
      padding-top: 56.25%;
      background-color: #b2bec3;

      span {
        position: absolute;
        top: 20%;
        left: 50%;
        color: #fff;
        font-family: yg-jalnan;
        font-size: 2.8rem;
        transform: translate(-50%, -20%);
      }
    }

    .post-content {
      margin-top: 2rem;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: keep-all;
      font-size: 2rem;
      line-height: 1.4;
    }

    .timeout {
      margin-top: 0;
      padding: 2rem;
    }
  }

  @media screen and (max-width: 760px) {
    ul li {
      width: 100%;
    }
  }
`;

export { ListParent };

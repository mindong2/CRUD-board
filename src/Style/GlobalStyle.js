import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
    return (
        <Global
            styles={css`
                @font-face {
                    font-family: "yg-jalnan";
                    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff") format("woff");
                    font-weight: normal;
                    font-style: normal;
                }

                html,
                body,
                div,
                span,
                applet,
                object,
                iframe,
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p,
                blockquote,
                pre,
                a,
                abbr,
                acronym,
                address,
                big,
                cite,
                code,
                del,
                dfn,
                em,
                img,
                ins,
                kbd,
                q,
                s,
                samp,
                small,
                strike,
                strong,
                sub,
                sup,
                tt,
                var,
                b,
                u,
                i,
                center,
                dl,
                dt,
                dd,
                ol,
                ul,
                li,
                fieldset,
                form,
                label,
                legend,
                table,
                caption,
                tbody,
                tfoot,
                thead,
                tr,
                th,
                td,
                article,
                aside,
                canvas,
                details,
                embed,
                figure,
                figcaption,
                footer,
                header,
                hgroup,
                menu,
                nav,
                output,
                ruby,
                section,
                summary,
                time,
                mark,
                audio,
                video {
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font-size: 100%;
                    vertical-align: baseline;
                }
                /* HTML5 display-role reset for older browsers */
                article,
                aside,
                details,
                figcaption,
                figure,
                footer,
                header,
                hgroup,
                menu,
                nav,
                section {
                    display: block;
                }
                body {
                    line-height: 1;
                }
                ol,
                ul {
                    list-style: none;
                }
                blockquote,
                q {
                    quotes: none;
                }
                blockquote:before,
                blockquote:after,
                q:before,
                q:after {
                    content: "";
                    content: none;
                }
                table {
                    border-collapse: collapse;
                    border-spacing: 0;
                }
                html,
                body {
                    font-family: "Noto Sans KR", sans-serif;
                    font-size: 62.5%;
                    line-height: 1.3;
                }
                h1 {
                    font-size: 4rem;
                }
                h2 {
                    font-size: 3.6rem;
                }
                h3 {
                    font-size: 3.2rem;
                }
                h4 {
                    font-size: 2.8rem;
                }
                h5 {
                    font-size: 2.4rem;
                }
                p {
                    font-size: 1.6rem;
                }
                button {
                    border: none;
                    border-radius: 5px;
                    outline: none;
                    background-color: #fff;
                }
            `}
        />
    );
};

export default GlobalStyle;

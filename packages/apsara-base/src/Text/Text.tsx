import { Typography } from "antd";
import { TextProps } from "antd/lib/typography/Text";

import * as React from "react";
import styled from "styled-components";

const styleMap = {
    11: {
        fontSize: "11px",
        lineHeight: "15px",
        letterSpacing: "0.11px",
    },
    12: {
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.12px",
    },
    14: {
        fontSize: "14px",
        lineHeight: "19px",
        letterSpacing: "0.14px",
    },
    16: {
        fontSize: "16px",
        lineHeight: "21px",
        letterSpacing: "0.16px",
    },
    18: {
        fontSize: "18px",
        lineHeight: "24px",
        letterSpacing: "0.18px",
    },
    20: {
        fontSize: "20px",
        lineHeight: "27px",
        letterSpacing: "0.20px",
    },
    22: {
        fontSize: "22px",
        lineHeight: "29px",
        letterSpacing: "0.22px",
    },
    25: {
        fontSize: "25px",
        lineHeight: "33px",
        letterSpacing: "0.25px",
    },
    28: {
        fontSize: "28px",
        lineHeight: "37px",
        letterSpacing: "0.28px",
    },
    32: {
        fontSize: "32px",
        lineHeight: "43px",
        letterSpacing: "0.32px",
    },
    36: {
        fontSize: "36px",
        lineHeight: "48px",
        letterSpacing: "0.36px",
    },
    40: {
        fontSize: "40px",
        lineHeight: "53px",
        letterSpacing: "0.40px",
    },
    45: {
        fontSize: "45px",
        lineHeight: "60px",
        letterSpacing: "0.45px",
    },
    50: {
        fontSize: "50px",
        lineHeight: "67px",
        letterSpacing: "0.50px",
    },
    60: {
        fontSize: "60px",
        lineHeight: "80px",
        letterSpacing: "0.60px",
    },
};

const { Text: AntText } = Typography;
interface IText extends TextProps {
    size?: number;
}

const Text: React.FC<IText> = styled(AntText).attrs((props: IText) => ({
    size: props.size || 14,
}))`
    font-size: ${(props) => styleMap[props.size].fontSize};
    line-height: ${(props) => styleMap[props.size].lineHeight};
    letter-spacing: ${(props) => styleMap[props.size].letterSpacing};
`;

export default Text;

import React from "react";
import styled from "styled-components";
const Text = styled.span`
  font-size: ${(props) => props.size ?? "14"}px;
`;

export default function Texts({ ...props }) {
  return <Text {...props} />;
}

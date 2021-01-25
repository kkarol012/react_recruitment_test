import React from "react";
import styled from "styled-components";
import Texts from "../UI/Texts";

const Item = styled.div`
  grid-template-columns: auto 1fr;
  display: grid;
`;

const JustifiedText = styled(Texts)`
  justify-self: end;
`;
export default function ProductItem({ item, ...props }) {
  return (
    <Item {...props}>
      <Texts size="16">{item.name}</Texts>
      <JustifiedText size="18">
        {parseFloat(item.price).toFixed(2)} zł
      </JustifiedText>
    </Item>
  );
}

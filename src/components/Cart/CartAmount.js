import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Texts from "../UI/Texts";
import styled, { css } from "styled-components";

const BlockedIcon = css`
  color: gray;
`;

const ActiveIcon = css`
  cursor: pointer;
`;

const FontAwesomeIconClickable = styled(FontAwesomeIcon)`
  ${(props) => (props.isBlocked ? BlockedIcon : ActiveIcon)}
`;

const Container = styled.div`
  width: 80px;
  grid-template-columns: 16px 21px 16px;
  display: grid;
  grid-gap: 8px;
`;

export default function CartAmount({ min, max, isBlocked }) {
  const [amount, setAmount] = useState(min);

  function decreaseAmount() {
    if (!isBlocked && amount > min) {
      setAmount(amount - 1);
    }
  }

  function increaseAmount() {
    if (!isBlocked && amount < max) {
      setAmount(amount + 1);
    }
  }

  return (
    <Container>
      <FontAwesomeIconClickable
        isBlocked={isBlocked}
        icon={faMinus}
        color={"red"}
        onClick={decreaseAmount}
      />
      <Texts align="center">{amount}</Texts>
      <FontAwesomeIconClickable
        isBlocked={isBlocked}
        icon={faPlus}
        color={"green"}
        onClick={increaseAmount}
      />
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Texts from "../UI/Texts";
import styled, { css } from "styled-components";
import { checkProduct } from "../../api/actions";

const BlockedIcon = css`
  color: gray;
`;

const ActiveIcon = css`
  cursor: pointer;
`;

const FontAwesomeIconClickable = styled(FontAwesomeIcon)`
  ${(props) => (props.is_blocked ? BlockedIcon : ActiveIcon)}
`;

const Container = styled.div`
  width: 80px;
  grid-template-columns: 16px 21px 16px;
  display: grid;
  grid-gap: 8px;
`;

export default function CartAmount({ min, max, is_blocked = false, pid }) {
  const [amount, setAmount] = useState(min);

  function decreaseAmount() {
    if (is_blocked || amount <= min) {
      return;
    }
    setAmount(amount - 1);
    verifyAmount(amount - 1);
  }

  function increaseAmount() {
    if (is_blocked || amount >= max) {
      return;
    }
    setAmount(amount + 1);
    verifyAmount(amount + 1);
  }

  function verifyAmount(quantity) {
    const data = {
      quantity: quantity,
      pid: pid,
    };
    checkProduct(data, () => setAmount(min));
  }

  return (
    <Container>
      <FontAwesomeIconClickable
        is_blocked={is_blocked ? 1 : 0}
        icon={faMinus}
        color={"red"}
        onClick={decreaseAmount}
      />
      <Texts align="center">{amount}</Texts>
      <FontAwesomeIconClickable
        is_blocked={is_blocked ? 1 : 0}
        icon={faPlus}
        color={"green"}
        onClick={increaseAmount}
      />
    </Container>
  );
}

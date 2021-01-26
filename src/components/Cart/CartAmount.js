import React from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Texts from "../UI/Texts";
import styled, { css } from "styled-components";
import { checkProduct } from "../../api/actions";
import { useDispatch, useSelector } from "react-redux";
import { getProductQuantity, setProductQuantity } from "../../app/cartSlice";

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
  const quantity = useSelector((state) => getProductQuantity(state, pid));
  const dispatch = useDispatch();

  function setQuantity(newQuantity) {
    dispatch(setProductQuantity({ pid: pid, quantity: newQuantity }));
  }
  function decreaseAmount() {
    if (is_blocked || quantity <= min) {
      return;
    }
    setQuantity(quantity - 1);
    verifyAmount(quantity - 1);
  }

  function increaseAmount() {
    if (is_blocked || quantity >= max) {
      return;
    }
    setQuantity(quantity + 1);
    verifyAmount(quantity + 1);
  }

  function verifyAmount(quantity) {
    const data = {
      quantity: quantity,
      pid: pid,
    };
    checkProduct(data, () => setQuantity(min));
  }

  return (
    <Container>
      <FontAwesomeIconClickable
        is_blocked={is_blocked ? 1 : 0}
        icon={faMinus}
        color={"red"}
        onClick={decreaseAmount}
      />
      <Texts align="center">{quantity}</Texts>
      <FontAwesomeIconClickable
        is_blocked={is_blocked ? 1 : 0}
        icon={faPlus}
        color={"green"}
        onClick={increaseAmount}
      />
    </Container>
  );
}

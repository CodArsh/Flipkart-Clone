import { Box, Button, ButtonGroup, styled } from "@mui/material";
import React, { useState } from "react";

function GroupButton() {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <Component>
      <StyledButton onClick={() => handleDecrement()} disabled={counter == 0}>
        -
      </StyledButton>
      <Button >{counter}</Button>
      <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
    </Component>
  );
}

export default GroupButton;
const Component = styled(ButtonGroup)`
  margin-top: 30px;
  margin-left:10px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

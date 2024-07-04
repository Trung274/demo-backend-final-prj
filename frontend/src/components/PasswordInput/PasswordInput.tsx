import React from "react";
import { ViewIcon } from "@chakra-ui/icons";
import { IconButton, Input, InputGroup, InputProps, InputRightElement } from "@chakra-ui/react";
import { forwardRef, useState } from "react";

export const PasswordInput = forwardRef((props: InputProps & { isError?: boolean }, ref: any) => {
  const { isError, ...rest } = props;
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        variant={isError ? "error" : "outline"}
        ref={ref}
        pr="2.5rem"
        type={show ? "text" : "password"}
        {...rest}
      />
      <InputRightElement width="2.5rem">
        <IconButton
          onClick={handleClick}
          icon={<ViewIcon w={5} h={5} />}
          size={"sm"}
          aria-label={"Toggle password"}
          color={!show ? "neutral.300" : "primary.500"}
          bgColor="transparent"
          _hover={{
            bgColor: "transparent",
          }}
          _active={{
            bgColor: "transparent",
          }}
        />
      </InputRightElement>
    </InputGroup>
  );
});

PasswordInput.displayName = "PasswordInput";

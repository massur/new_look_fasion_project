import { Popover, Text, Button, createStyles, Portal, Overlay, PopoverProps } from "@mantine/core";
import React, { useState } from "react";

export const LitPopover = (props: PopoverProps) => {
  const { onOpen, onClose } = props;
  const [opened, setOpened] = useState(false);

  return (
    <>
      {opened && (
        <Portal>
          <Overlay opacity={0.7} color="#000" zIndex={200} />
        </Portal>
      )}

      <Popover
        {...props}
        onOpen={() => {
          setOpened(true);
          onOpen && onOpen();
        }}
        onClose={() => {
          setOpened(false);
          onClose && onClose();
        }}
        withinPortal={true}
        width={340}
        position="bottom"
        shadow="md"
        radius={24}
        arrowSize={15}
      >
        {props.children}
      </Popover>
    </>
  );
};

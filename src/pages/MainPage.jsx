import { Box, Button, Flex, Input, Stack, Text } from "@mantine/core";
import {
  IconBlur,
  IconColorFilter,
  IconColorPicker,
  IconSettingsAutomation,
} from "@tabler/icons-react";
import React from "react";

export default function MainPage({setType}) {
  
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <div style={{ display: "grid", placeContent: "center", height: "100%" }}>
        <h3 style={{ textAlign: "center", marginBottom: 15 }}>Choose a type</h3>
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Button
            leftIcon={<IconColorFilter size="1rem" />}
            variant="light"
            onClick={() => setType('color_converssion')}
          >
            Color conversion
          </Button>
          <Button
            leftIcon={<IconBlur size="1rem" />}
            variant="light"
            onClick={() => setType('filter_converssion')}

          >
            Applying filters
          </Button>
        </Flex>
      </div>
      <div style={{ position: "fixed", bottom: 0, right: 0 }}>
        <Box p={30}>
          <p style={{color: '#928d8d', fontSize: 14}}>Derf Abdellah</p>
          <p style={{color: '#928d8d', fontSize: 14}}>Djellit Adem</p>
        </Box>
      </div>
    </div>
  );
}

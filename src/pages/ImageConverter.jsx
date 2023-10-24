import {
  Button,
  Center,
  FileInput,
  Flex,
  Group,
  Input,
  Select,
} from "@mantine/core";
import React, { useRef, useState } from "react";
import { IconSettingsAutomation, IconUpload } from "@tabler/icons-react";
import { publicRequest } from "../requestMethods";
import { notifications } from "@mantine/notifications";

export const ImageConverter = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", value);

    if (value.length == 0) {
      notifications.show({
        title: "Please select an image",
        color: 'red',
        // message: "Hey there, your code is awesome! 🤥",
      });
      return
    }

    setLoading(true);
    try {
      const res = await publicRequest.post("/upload_image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ display: "grid", placeContent: "center", height: "100%" }}>
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <FileInput
            sx={{ width: 200 }}
            value={value}
            onChange={setValue}
            label="Your image"
            placeholder="Your image"
            icon={<IconUpload size={14} />}
          />
          <Select
            label="Converting method"
            placeholder="Pick one"
            value={"XYZ"}
            sx={{ width: 120 }}
            data={[
              { value: "XYZ", label: "XYZ" },
              { value: "HSL", label: "HSL" },
              { value: "YUV", label: "YUV" },
            ]}
          />
          <Flex direction="column">
            <Input.Label>Convert</Input.Label>
            <Button
              loading={loading}
              leftIcon={<IconSettingsAutomation size="1rem" />}
              onClick={handleUpload}
            >
              Start
            </Button>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

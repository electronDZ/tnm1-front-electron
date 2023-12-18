import {
  Button,
  Center,
  FileInput,
  Flex,
  Group,
  Input,
  NumberInput,
  Select,
} from "@mantine/core";
import React, { useState } from "react";
import {
  IconHash,
  IconSettingsAutomation,
  IconUpload,
} from "@tabler/icons-react";
import { publicRequest } from "../requestMethods";
import { notifications } from "@mantine/notifications";
import { fork } from "child_process";

export const FilterApplyer = () => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedConversionMode, setSelectedConversionMode] =
    useState("gaussien");
  const [loading, setLoading] = useState(false);
 const [value, setValue] = useState(25)
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("conversion_mode", selectedConversionMode);
    formData.append("value", value);

    if (selectedImage.length == 0) {
      notifications.show({
        title: "Please select an image",
        color: "red",
        // message: "Hey there, your code is awesome! 🤥",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await publicRequest.post("/noise", formData, {
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
        <Select
          label="Pick a type"
          placeholder="Pick a filrt type"
          data={["Noise", "Filter"]}
          icon={<IconHash size="1rem" />}
          variant="unstyled"
          sx={{ width: 300 }}
          mb={3}
        />
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
            value={selectedImage}
            onChange={setSelectedImage}
            label="Your image"
            placeholder="Your image"
            icon={<IconUpload size={14} />}
          />
          <Select
            label="Noise type"
            placeholder="Pick one"
            value={selectedConversionMode}
            onChange={setSelectedConversionMode}
            sx={{ width: 120 }}
            data={[
              { value: "gaussien", label: "gaussien" },
              { value: "poivre et sel", label: "poivre et sel", selected: true },
            ]}
          />
          <NumberInput
            sx={{ width: 100 }}
            label="Value"
            placeholder="Percents"
            suffix="%"
            value={value}
            onChange={setValue}
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

import { useState } from "react";
import "./app.css";
import MainPage from "./pages/MainPage";
import { ImageConverter } from "./pages/imageConverter";
import { IconArrowBack } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { FilterApplyer } from "./pages/FilterApplyer";

const App = () => {
  const [type, setType] = useState("home");

  const render = () => {
    switch (type) {
      case "color_converssion":
        return <ImageConverter />;
      case "filter_converssion":
        return <FilterApplyer />;
      default:
        return <MainPage setType={setType} />;
    }
  };
  return (
    <div style={{ position: "relative" }}>
      {render()}
      {type !== "home" && (
        <div style={{ position: "absolute", top: 0, padding: 10 }}>
          <ActionIcon
            aria-label="Go Home"
            color="blue"
            onClick={() => setType("home")}
          >
            <IconArrowBack />
          </ActionIcon>
        </div>
      )}
    </div>
  );
};

export default App;

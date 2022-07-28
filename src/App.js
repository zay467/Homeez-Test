import { Box } from "@mui/material";
import { Layer, Stage } from "react-konva";
import { Html } from "react-konva-utils";
import Floorplan from "./components/Floorplan";
import floorplan from "./test-resources/floorplan-sample.json";

function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Html
          divProps={{
            style: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // position: "absolute",
              // backgroundColor: "red",
              zIndex: -1,
            },
          }}
        >
          <Box width="700px">
            <Floorplan floorplan={floorplan.layout} />
          </Box>
        </Html>
      </Layer>
    </Stage>
  );
}

export default App;

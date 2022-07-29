import { useState } from "react";
import { Layer, Stage } from "react-konva";
import { Html } from "react-konva-utils";
import Floorplan from "./components/Floorplan";
import SVGFurniture from "./components/SVGFurniture";
import floorplan from "./test-resources/floorplan-sample.json";

function App() {
  const [elements, setElements] = useState([]);
  const [selectedId, selectShape] = useState(null);

  const addElement = () => {
    setElements([
      ...elements,
      {
        x: 150,
        y: 150,
        width: 100,
        height: 100,
        id: `element-${elements.length}`,
      },
    ]);
  };

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
          width: "50px",
          height: "50px",
          zIndex: 10,
        }}
      >
        <button
          style={{
            border: "2px solid #333",
            borderRadius: "100%",
            backgroundColor: "#333",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "24px",
            width: "100%",
            height: "100%",
          }}
          onClick={addElement}
        >
          +
        </button>
      </div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          <Html
            divProps={{
              style: {
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: -10,
              },
            }}
          >
            <Floorplan width="500px" floorplan={floorplan.layout} />
          </Html>
          {elements.map((rect, i) => {
            return (
              <SVGFurniture
                key={i}
                src="/furniture-sample.svg"
                shapeProps={rect}
                isSelected={rect.id === selectedId}
                onSelect={() => {
                  selectShape(rect.id);
                }}
                onChange={(newAttrs) => {
                  const rects = elements.slice();
                  rects[i] = newAttrs;
                  setElements(rects);
                }}
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
}

export default App;

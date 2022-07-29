import { useMemo } from "react";

const Position = ({ elements, selectedId }) => {
  const selectedElement = useMemo(() => {
    return elements.find((e) => e.id === selectedId);
  }, [elements, selectedId]);
  if (!selectedElement) return null;
  return (
    <>
      <p>
        X : {selectedElement.x.toFixed(2)}, Y : {selectedElement.y.toFixed(2)}
      </p>
      <p>
        W : {selectedElement.width.toFixed(2)}, H :{" "}
        {selectedElement.height.toFixed(2)}
      </p>
    </>
  );
};

export default Position;

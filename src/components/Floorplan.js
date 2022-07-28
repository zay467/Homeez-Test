import PropTypes from "prop-types";
import React, { useMemo } from "react";

const Floorplan = ({ width, height, floorplan }) => {
  const elements = useMemo(() => {
    return floorplan.map((f, i) => {
      const { tag, ...rest } = f;
      return React.createElement(
        tag,
        {
          key: i,
          style: { fill: "gray", strokeWidth: "4px", stroke: "black" },
          ...rest,
        },
        null
      );
    });
  }, [floorplan]);

  return (
    <svg
      viewBox="0 0 900 800"
      style={{ width: width, height: height, display: "block" }}
    >
      {elements}
    </svg>
  );
};

Floorplan.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  floorplan: PropTypes.array.isRequired,
};

Floorplan.defaultProps = {
  width: "100%",
  height: "auto",
};

export default Floorplan;

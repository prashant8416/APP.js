// src/components/Grid.js
import React from 'react';
import Node from './Node';

const Grid = ({ grid, onNodeClick }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((node, nodeIndex) => (
            <Node
              key={nodeIndex}
              node={node}
              onClick={() => onNodeClick(rowIndex, nodeIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;

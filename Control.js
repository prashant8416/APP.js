// src/components/Controls.js
import React from 'react';

const Controls = ({ onVisualize, onReset, onAlgorithmChange }) => {
  return (
    <div className="controls">
      <button onClick={onVisualize}>Visualize</button>
      <button onClick={onReset}>Reset</button>
      <select onChange={onAlgorithmChange}>
        <option value="astar">A*</option>
        <option value="dijkstra">Dijkstra's</option>
        <option value="bfs">BFS</option>
        <option value="dfs">DFS</option>
      </select>
    </div>
  );
};

export default Controls;

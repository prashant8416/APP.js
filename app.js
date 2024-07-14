// src/App.js
import React, { useState } from 'react';
import Grid from './components/Grid';
import Controls from './components/Controls';
import { astar } from './algorithms/astar';
import { dijkstra } from './algorithms/dijkstra';
import { bfs } from './algorithms/bfs';
import { dfs } from './algorithms/dfs';
import './styles.css';

const App = () => {
  const [grid, setGrid] = useState(createInitialGrid());
  const [algorithm, setAlgorithm] = useState('astar');

  const handleNodeClick = (row, col) => {
    // Handle node click to set start/end points or walls
  };

  const handleVisualize = () => {
    const startNode = ...; // Find start node
    const endNode = ...; // Find end node
    let newGrid;

    switch (algorithm) {
      case 'astar':
        newGrid = astar(grid, startNode, endNode);
        break;
      case 'dijkstra':
        newGrid = dijkstra(grid, startNode, endNode);
        break;
      case 'bfs':
        newGrid = bfs(grid, startNode, endNode);
        break;
      case 'dfs':
        newGrid = dfs(grid, startNode, endNode);
        break;
      default:
        break;
    }

    setGrid(newGrid);
  };

  const handleReset = () => {
    setGrid(createInitialGrid());
  };

  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
  };

  return (
    <div className="App">
      <Controls
        onVisualize={handleVisualize}
        onReset={handleReset}
        onAlgorithmChange={handleAlgorithmChange}
      />
      <Grid grid={grid} onNodeClick={handleNodeClick} />
    </div>
  );
};

export default App;

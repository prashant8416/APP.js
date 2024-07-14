// src/components/Node.js
import React from 'react';

const Node = ({ node, onClick }) => {
  const { isStart, isEnd, isWall } = node;
  const extraClassName = isStart ? 'node-start' : isEnd ? 'node-end' : isWall ? 'node-wall' : '';

  return (
    <div
      className={`node ${extraClassName}`}
      onClick={onClick}
    ></div>
  );
};

export default Node;

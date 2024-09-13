// Cell.js
import React from 'react';
import './cell.css';

const Cell = ({ type }) => (
	<div className={`cell ${type !== 0 ? 'filled' : ''}`}></div>
);

export default Cell;

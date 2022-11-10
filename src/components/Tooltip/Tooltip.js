import React from 'react';
import './Tooltip.css';

const Tooltip = (props) => {
	return (
		<div className="Tooltip-Wrapper">
			{props.children}
			{props.content && (
				<div className={`Tooltip-Tip ${props.direction || 'right'}`}>
					{props.content}
				</div>
			)}
		</div>
	);
};

export default Tooltip;

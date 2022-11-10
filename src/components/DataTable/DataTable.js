import React from 'react';
import styles from './DataTable.module.css';

const DataTable = ({ tableData }) => {
	console.log('tableData ', tableData);
	return (
		<div>
			<table>
				<tr>
					<th>Date</th>
					<th>Name</th>
					<th>E-mail</th>
				</tr>
				{tableData.map((val, key) => {
					return (
						<tr key={key}>
							<td>{new Date(val.date).toLocaleDateString('en-GB')}</td>
							<td>{val.name}</td>
							<td>{val.email}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
};

export default DataTable;

import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import DataTable from './components/DataTable/DataTable';
import { useState } from 'react';

function App() {
	const [tableData, setTableData] = useState([]);

	const addRegisteredUser = (name, email) => {
		setTableData([
			{
				name,
				email,
				date: new Date(),
			},
			...tableData,
		]);
	};

	return (
		<div className="App">
			<img
				src={
					'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg'
				}
				style={{ height: '100px', width: '100px', marginTop: '20vh' }}
				alt="Logo"
			/>
			<LoginForm addRegisteredUser={addRegisteredUser} />
			{tableData.length !== 0 && <DataTable tableData={tableData} />}
		</div>
	);
}

export default App;

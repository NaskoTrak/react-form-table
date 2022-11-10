import React, { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import styles from './LoginForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const LoginForm = ({ addRegisteredUser }) => {
	const formDefaultState = {
		name: '',
		nameErr: '',
		email: '',
		emailErr: '',
		password: '',
		passwordErr: '',
		termsAndConditions: false,
		termsAndConditionsErr: '',
	};

	const [form, setForm] = useState(formDefaultState);
	const passwordValidationRegex =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

	const emailValidationRegex =
		/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.id]: event.target.value,
			[event.target.id + 'Err']: '',
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (form.name.trim() === '') {
			setForm({ ...form, nameErr: "Please, add 'Username'." });
			return;
		}
		if (form.email.trim() === '') {
			setForm({ ...form, emailErr: "Please, add 'E-mail'." });
			return;
		}
		if (!form.email.match(emailValidationRegex)) {
			setForm({ ...form, emailErr: "Please, enter a valid 'E-mail'." });
			return;
		}
		if (form.password.trim() === '') {
			setForm({ ...form, passwordErr: "Please, add 'Password'." });
			return;
		}
		if (!form.password.match(passwordValidationRegex)) {
			setForm({ ...form, passwordErr: "Please, enter a valid 'Password'." });
			return;
		}
		if (form.termsAndConditions === false) {
			setForm({
				...form,
				termsAndConditionsErr: "Please, agree with 'Terms & Conditions'.",
			});
			return;
		}
		addRegisteredUser(form.name, form.email);
		setForm(formDefaultState);
	};

	return (
		<form onSubmit={handleSubmit} className={styles.formContainer}>
			<div className={styles.inputFieldContainer}>
				<Tooltip content={form.nameErr} className={styles.toolTipContainer}>
					<FontAwesomeIcon icon={faUser} />
					<input
						id="name"
						type="text"
						placeholder="Username"
						value={form.name}
						onChange={handleChange}
					/>
				</Tooltip>
			</div>
			<div className={styles.inputFieldContainer}>
				<Tooltip content={form.emailErr}>
					<FontAwesomeIcon icon={faAt} />
					<input
						id="email"
						type="text"
						placeholder="Email"
						value={form.email}
						onChange={handleChange}
					/>
				</Tooltip>
			</div>
			<div className={styles.inputFieldContainer}>
				<Tooltip content={form.passwordErr} className={styles.toolTipContainer}>
					<FontAwesomeIcon icon={faKey} />
					<input
						id="password"
						type="password"
						placeholder="Password"
						value={form.password}
						onChange={handleChange}
					/>
				</Tooltip>
			</div>
			<div className={styles.inputFieldContainer}>
				<Tooltip content={form.termsAndConditionsErr}>
					<label htmlFor="termsAndConditions">
						Agree with Terms & Conditions
					</label>
					<input
						id="termsAndConditions"
						type="checkbox"
						checked={form.termsAndConditions}
						onChange={() =>
							setForm({
								...form,
								termsAndConditions: !form.termsAndConditions,
							})
						}
					/>
				</Tooltip>
			</div>
			<button type="submit" className={styles.signInButton}>
				Sign Up
			</button>
		</form>
	);
};

export default LoginForm;

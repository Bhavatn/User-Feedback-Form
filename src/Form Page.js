import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './App.css';
function FormPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");
	const [interests, setInterests] = useState([]);
	const [country, setCountry] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
			e.preventDefault();
			const formData = {
				name,
				email,
				gender,
				interests,
				country
			};
			navigate('/thankyou', { state: { formData } });
	};
    const handleReset = () => {
	    setName("");
	    setEmail("");
	    setGender("");
	    setInterests([]);
	    setCountry("");
	};

	const handleInterestChange = (e) => {
		const value = e.target.value;
		setInterests((prev) =>
		  prev.includes(value)
			? prev.filter((i) => i !== value)
			: [...prev, value]
		);
	};


	return (
			<div className="form-bg">
				<form onSubmit={handleSubmit} className="feedback-form">
            <div>
				<label htmlFor="name">Name: <span className="required">*</span></label>
			<input
				id="name"
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
            </div>
            <div>
				<label htmlFor="email">Email: <span className="required">*</span></label>
			<input
				id="email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
            </div>
            
			<div>
					<label>Gender: <span className="required">*</span></label>
				<label>
					<input
						type="radio"
						name="gender"
						value="Male"
						checked={gender === "Male"}
						onChange={(e) => setGender(e.target.value)}
						required
					/>
					Male
				</label>
				<label>
					<input
						type="radio"
						name="gender"
						value="Female"
						checked={gender === "Female"}
						onChange={(e) => setGender(e.target.value)}
					/>
					Female
				</label>
				<label>
					<input
						type="radio"
						name="gender"
						value="Other"
						checked={gender === "Other"}
						onChange={(e) => setGender(e.target.value)}
					/>
					Other
				</label>
			</div>
			<div>
				<label>Interests:</label>
				<label>
					<input
						type="checkbox"
						value="Sports"
						checked={interests.includes("Sports")}
						onChange={handleInterestChange}
					/>
					Sports
				</label>
				<label>
					<input
						type="checkbox"
						value="Music"
						checked={interests.includes("Music")}
						onChange={handleInterestChange}
					/>
					Music
				</label>
				<label>
					<input
						type="checkbox"
						value="Technology"
						checked={interests.includes("Technology")}
						onChange={handleInterestChange}
					/>
					Technology
				</label>
				<label>
					<input
						type="checkbox"
						value="Travel"
						checked={interests.includes("Travel")}
						onChange={handleInterestChange}
					/>
					Travel
				</label>
				<label>
					<input
						type="checkbox"
						value="Volunteering"
						checked={interests.includes("Volunteering")}
						onChange={handleInterestChange}
					/>
					Volunteering
				</label>
				<label>
					<input
						type="checkbox"
						value="Intellectual Hobbies"
						checked={interests.includes("Intellectual Hobbies")}
						onChange={handleInterestChange}
					/>
					Intellectual Hobbies
				</label>
			</div>
			<div>
					<label htmlFor="country">Country: <span className="required">*</span></label>
				<select
					id="country"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
					required
				>
					<option value="" disabled>Select your country</option>
					<option value="India">India</option>
					<option value="United States">United States</option>
					<option value="United Kingdom">United Kingdom</option>
					<option value="Canada">Canada</option>
					<option value="Australia">Australia</option>
					<option value="Germany">Germany</option>
					<option value="France">France</option>
				</select>
			</div>
			<div style={{ marginTop: '1em' }}>
							<div className="button-row">
								<button type="submit">Submit</button>
								<button type="button" onClick={handleReset}>Reset</button>
							</div>
			</div>
		  </form>
		</div>
	);
}

export default FormPage;

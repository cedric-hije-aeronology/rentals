import { useState } from 'react';
import '../styles/RentalForm.css'

function RentalForm() {
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <div className="rental-modal">
            {!showForm && <button onClick={() => setShowForm(true)}>Post Rental</button>}
            {showForm && (
                <form action="" className="form-wrapper">
                    <button type="button" onClick={() => setShowForm(false)}>Cancel</button>

                    <div className="input-wrapper">
                        <label htmlFor="house_number">House Number: </label>
                        <input type="text" name="house_number" id="house_number" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="address_1">Address 1: </label>
                        <input type="text" name="address_1" id="address_1" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="address_2">Address 2: </label>
                        <input type="text" name="address_2" id="address_2" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="barangay">Barangay: </label>
                        <input type="text" name="barangay" id="barangay" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" id="city" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="province">Province: </label>
                        <input type="text" name="province" id="province" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="description">Description: </label>
                        <textarea name="description" id="description" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="monthly">Monthly: </label>
                        <input type="number" min="0" name="monthly" id="monthly" />
                    </div>
                    <button type="submit">Post Rental</button>
                </form>
            )}
        </div>

    )
}

export default RentalForm;
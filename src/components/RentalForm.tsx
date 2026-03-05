import '../styles/RentalForm.css'

function RentalForm() {
    return (
        <div className="rental-form">
            <form action="" className="form-wrapper">
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
        </div>
    )
}

export default RentalForm;
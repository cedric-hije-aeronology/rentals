import '../styles/RentalForm.css'

function RentalForm() {
    return (
        <form action="" className="form-wrapper">
            <label>
                House Number: <input type="text" name="house_number" />
            </label>
            <label>
                Address 1: <input type="text" name="address_1" />
            </label>
            <label>
                Address 2: <input type="text" name="address_2" />
            </label>
            <label>
                Barangay: <input type="text" name="barangay" />
            </label>
            <label>
                City: <input type="text" name="city" />
            </label>
            <label>
                Province: <input type="text" name="province" />
            </label>
            <label>
                Description: <input type="text" name="description" />
            </label>
            <label>
                Monthly: <input type="number" min="0" name="monthly" />
            </label>
            <button type="submit">Post Rental</button>
        </form>
    )
}

export default RentalForm;
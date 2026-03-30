import type { Rental } from "../models/Rental";
import "../styles/RentalCard.css"
import { FaCheck } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";

interface Prop {
    rentals: Rental[]
}

function RentalCard({ rentals } : Prop) {return(
        <div className="rental-card-wrapper">
            {rentals.map((rental, i) => (
                <div className="rental-card" key={i}>
                    <div className="rental-btns">
                        <button>
                            <FaCheck />
                        </button>
                        <button>
                            <IoIosAdd />
                        </button>
                        <button>
                            <IoClose />
                        </button>
                    </div>
                    <div className="rental-item">
                        <h4>{`${rental.monthly} /mo`}</h4>
                        <h4>{`${rental.city}, ${rental.province}`}</h4>
                        <p>{`${rental.house_number} ${rental.address_1}`}</p>
                        {rental.address_2 && <p>{rental.address_2}</p>}
                        <p>{`Barangay ${rental.barangay}`}</p>
                        <p>{`${rental.description}`}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RentalCard;
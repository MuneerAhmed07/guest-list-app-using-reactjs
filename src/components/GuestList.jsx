import { useState } from "react";

const GuestList = () => {

    const [guestName, setGuestName] = useState("");
    const [guestList, setGuestList] = useState([]);

    // add guest to the list 
    const addGuest = () => {
        if(guestName.trim()) {
            setGuestList([...guestList, guestName]);
            setGuestName("");
        } else {
            alert("Please enter a valid name.");
        }
    }

    // Remove guest form list
    const removeGuest = (index) => {
        setGuestList(guestList.filter((_, i) => i !== index));
    }

   

  return (
    <>
     <div className="guest-list">
        <h1>Party Guest List</h1>
        <div className="form">
            <input type="text"
                placeholder='Enter guest name'
                autoComplete='off'
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
            />
            <button onClick={addGuest}>Add Guest</button>
        </div>
        <div className="guest-list">
            {
                guestList.map((guest, index) =>(
                    <li key={index}>
                        {guest}
                        <button onClick={() => removeGuest(index)}>Remove</button>
                    </li>
                ))
            }
        </div>
    </div> 
    </>
  )
}

export default GuestList;

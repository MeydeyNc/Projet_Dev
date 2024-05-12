import React, { useState } from 'react';
import Popup from './Popup';

export default function ParentPopup() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            <button onClick={openPopup}>Open Popup</button>
            {isPopupOpen && <Popup onClose={closePopup} />}
        </div>
    );
};
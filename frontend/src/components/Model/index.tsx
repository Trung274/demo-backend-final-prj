import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
    open: boolean; // Flag to control modal visibility
    onClose: () => void; // Function to handle modal closing
    children: React.ReactNode; // Content displayed within the modal body
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    return (
        // Backdrop
        <div
            onClick={onClose}
            className={`z-[99999] fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'
                }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-xl shadow p-0 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
                    }`}
            >
                <div className="flex justify-between items-center p-6 border-b border-[#ebebeb]">
                    <h2 className="text-3xl font-medium text-[#000]">Login</h2>
                    <button onClick={onClose} className="rounded-[5px] cursor-pointer bg-white hover:bg-gray-400 p-2"                        >
                        <FontAwesomeIcon icon={faXmark} size="lg" className="text-[#ddd] hover:text-gray-600" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}

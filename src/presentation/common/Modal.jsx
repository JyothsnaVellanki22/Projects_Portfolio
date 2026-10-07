import React, { useEffect } from 'react';
import { CloseIcon } from './Icons';
import './modal.css';

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="editorial-modal-overlay" onClick={onClose}>
      <div 
        className="editorial-modal-window" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="editorial-modal-header">
          <h2 id="modal-title" className="editorial-modal-title">
            {title}
          </h2>
          <button 
            type="button" 
            className="editorial-modal-close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        <div className="editorial-modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}

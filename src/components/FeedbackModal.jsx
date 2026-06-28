import React, { useState, useEffect } from 'react';
import { FiX, FiCheck, FiSend } from 'react-icons/fi';
import Logo from './Logo';
import '../assets/css/FeedbackModal.css';

export default function FeedbackModal({ isOpen, onClose, onShowToast }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5); // Default to 5 stars
  const [hoverRating, setHoverRating] = useState(0);
  const [msg, setMsg] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !msg.trim()) {
      onShowToast('Please fill in all fields.');
      return;
    }

    setIsSuccess(true);
    const stars = '⭐'.repeat(rating);
    const body = `Name: ${name}%0AEmail: ${email}%0ARating: ${stars} (${rating}/5)%0A%0A${msg}`;
    
    setTimeout(() => {
      window.location.href = `mailto:closelyinfotech@gmail.com?subject=Feedback from ${name}&body=${body}`;
      
      // Reset form states
      setName('');
      setEmail('');
      setRating(5);
      setMsg('');
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={(e) => e.target.classList.contains('modal-overlay') && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <div className="modal-logo-container">
            <Logo width={110} height={50} />
          </div>
          <button className="modal-close flex items-center justify-center" onClick={onClose} aria-label="Close modal">
            <FiX size={16} />
          </button>
        </div>
        
        {!isSuccess ? (
          <form onSubmit={handleSubmit} id="fbFormWrap">
            <div className="modal-title">Share Your Feedback</div>
            <div className="modal-sub">We'd love to hear what you think — your feedback helps us improve.</div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fb-name">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  id="fb-name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=""
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="fb-email">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  id="fb-email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=""
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Your Rating</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((starVal) => (
                  <button
                    type="button"
                    key={starVal}
                    className={`star-btn ${starVal <= (hoverRating || rating) ? 'active' : ''}`}
                    onClick={() => setRating(starVal)}
                    onMouseEnter={() => setHoverRating(starVal)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`Rate ${starVal} out of 5 stars`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="fb-msg">Your Feedback</label>
              <textarea 
                placeholder="Tell us your thoughts, suggestions, or experience..." 
                id="fb-msg"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className=""
              ></textarea>
            </div>
            
            <button type="submit" className="form-submit flex items-center justify-center gap-2">
              <FiSend /> Submit Feedback
            </button>
          </form>
        ) : (
          <div className="success-msg" id="fbSuccess">
            <div className="check flex items-center justify-center"><FiCheck size={20} /></div>
            <h3>Thank you!</h3>
            <p>Your feedback has been received. We truly appreciate it.</p>
          </div>
        )}
      </div>
    </div>
  );
}

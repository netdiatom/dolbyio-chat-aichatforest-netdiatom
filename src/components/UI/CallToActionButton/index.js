import './CallToActionButton.scss';
export const CallToActionButton = () => (
  <div className="call-to-action-button">
    <div className="cta-text">
      
  Welcome to the forest <br /> Ready to leave this experience?
    </div>
    <a
      href="https://www.aichatforest.com"
      target="_blank"
      rel="noreferrer"
    >
      <button className="cta-button">Back To Aichatforest</button>
    </a>
  </div>
);

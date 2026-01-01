import React from "react";
import { useNavigate } from "react-router-dom";
import "./Help.css";

const HelpPage = () => {
  const navigate = useNavigate();
  return (
    <div className="help-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      <h1>Findo Help & FAQ</h1>
      <p className="intro-text">
        Welcome to Findo Support! Here you'll find answers to common questions, step-by-step guides, and tips to make the most of your experience exploring restaurants, bars, cafes, gyms, and events near you. 
        Some sections of the app are still under development — we appreciate your patience as we continue improving Findo.
      </p>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <div className="faq-question">Q1: How do I find spots near me?</div>
          <div className="faq-answer">
            A: Use the <strong>Discover</strong> tab and allow location access. Findo will show nearby spots based on your location and preferences.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Q2: How do I save a spot?</div>
          <div className="faq-answer">
            A: Tap the <strong>bookmark</strong> icon on any spot card or spot page. Saved spots appear in your profile under “Saved Spots.”
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Q3: How can I report an issue?</div>
          <div className="faq-answer">
            A: On a spot page, use the <strong>Report</strong> button to notify us of any errors or inappropriate content. 
            You can also email us directly at <a href="mailto:support@findo.com">support@findo.com</a>.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Q4: Are all sections fully functional?</div>
          <div className="faq-answer">
            A: Some sections, like <strong>Feed</strong> and certain upcoming event pages, are still under development. You may see placeholders or limited content. 
            We’re continuously improving these features and will update them soon!
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">Q5: How do I share spots or invite friends?</div>
          <div className="faq-answer">
            A: Open a spot page or the Invite section, then choose from WhatsApp, Messenger, Instagram, or copy the referral link to share with friends.
          </div>
        </div>

        <a className="support-link" href="mailto:support@findo.com">Contact Support</a>
      </section>

      {/* Getting Started / Guide */}
      <section className="guide-section">
        <h2>Getting Started with Findo</h2>
        <ol>
          <li>Create an account and set your preferences.</li>
          <li>Browse or search for spots using the <strong>Discover</strong> tab.</li>
          <li>Tap on a spot for details, images, ratings, and upcoming events.</li>
          <li>Save or bookmark spots you love to revisit later.</li>
          <li>Share spots with friends via social media or referral link.</li>
          <li>Check the <strong>Trending</strong> and <strong>Recommended</strong> sections for curated suggestions.</li>
          <li>Explore the <strong>Upcoming Events</strong> section to discover new experiences near you.</li>
          <li>Sections like <strong>Feed</strong> and certain spot features may still be in progress. Some content is limited, but will improve over time.</li>
        </ol>
      </section>

      {/* Tips & Tricks */}
      <section className="tips-section">
        <h2>Tips & Tricks</h2>
        <ul>
          <li>Enable notifications to stay updated on new events and trending spots.</li>
          <li>Use the search filters to narrow spots by category, rating, or distance.</li>
          <li>Check out Similar Spots on each page to discover hidden gems nearby.</li>
          <li>Keep your profile updated to get personalized recommendations.</li>
          <li>Use the referral feature to earn rewards and invite friends to Findo.</li>
          <li>Be aware that some features are placeholders — your feedback helps us improve them faster.</li>
        </ul>
      </section>

      {/* Safety & Etiquette */}
      <section className="safety-section">
        <h2>Safety & Etiquette</h2>
        <p>
          Findo encourages safe and respectful interaction with all venues and users:
        </p>
        <ul>
          <li>Always follow local guidelines and venue rules.</li>
          <li>Respect others' privacy when sharing images or reviews.</li>
          <li>Report any suspicious activity or content immediately.</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <h2>Need More Help?</h2>
        <p>
          Email our support team at <a href="mailto:support@findo.com">support@findo.com</a> or visit our <a href="/help">Help Center</a> for more guides.
        </p>
      </section>
    </div>
  );
};

export default HelpPage;

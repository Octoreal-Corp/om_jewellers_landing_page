import React from "react";

const ContactMap: React.FC = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow">
      <iframe
        title="Om Jewellers Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.599!2d82.0353!3d19.0733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b8b8b8b8b8b8b%3A0x0!2sPalace%20Road%2C%20Jagdalpur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
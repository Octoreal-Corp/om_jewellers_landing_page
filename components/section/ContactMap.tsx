import React from "react";

const ContactMap: React.FC = () => {
  return (
    <div className="h-96 w-full overflow-hidden rounded-lg shadow">
      <iframe
        title="Om Jewellers Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4550492009653!2d82.0204479!3d19.087682999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3013287e1800e7%3A0xc5e7612f0125c6b9!2sOm%20Jewellers!5e0!3m2!1sen!2sin!4v1759155971050!5m2!1sen!2sin"
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

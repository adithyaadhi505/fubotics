import React, { useState } from 'react';

/**
 * Footer Component
 * Professional footer with links, legal information, and branding
 */
interface FooterProps {
  onNavigate: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  const footerLinks = {
    legal: [
      { label: 'Terms and Conditions', modal: { title: 'Terms & Conditions', content: 'Terms and conditions are finalized as per your existing individual contract with Fubotics Pvt Ltd.' } },
      { label: 'Refund and Cancellation Policy', modal: { title: 'Refund & Cancellation Policy', content: 'Fubotics does not refund any money under any circumstance whatsoever.' } },
    ],
  };

  const handleLinkClick = (id?: string) => {
    if (id) {
      onNavigate(id);
    }
  };

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <footer className="glass border-t border-accent-700">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Brand Section */}
          </div>
          {/* Bottom Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Side - Copyright */}
            <div className="text-text-muted text-xs">
              <p className="mb-0.5">
                Copyright &copy; {currentYear} Fubotics Private Limited. All rights reserved.
              </p>
              <p className="text-xs">
                Regus UB City, Level 15, Concorde Tower, No. 24, Vittal Mallya Road, Bengaluru 560001
              </p>
            </div>

            {/* Right Side - Legal Links */}
            <div className="flex flex-col md:flex-row gap-2 md:justify-end text-text-muted text-xs">
              {footerLinks.legal.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => link.modal ? openModal(link.modal.title, link.modal.content) : undefined}
                  className="hover:text-accent-blue transition-colors duration-300 text-left md:text-center underline"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent-blue text-bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-glow-blue-lg transition-all duration-300 z-40"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
        </button>
      </footer>

      {/* Modal - Rendered outside footer */}
      {modalContent && (
        <div
          onClick={closeModal}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl p-8 max-w-md w-full border border-accent-700 mx-auto my-auto"
            style={{ maxHeight: '90vh', overflowY: 'auto' }}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-accent-100">{modalContent.title}</h3>
              <button
                onClick={closeModal}
                className="text-accent-200 hover:text-accent-100 transition-colors flex-shrink-0 ml-4"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-accent-200 leading-relaxed mb-6">
              {modalContent.content}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;

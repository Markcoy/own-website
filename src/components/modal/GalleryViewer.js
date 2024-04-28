import React, { useState } from "react";
import Modal from "react-modal";

// Set app element for accessibility reasons
Modal.setAppElement("#root");

function GalleryViewer({ src, alt = "", description = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Image component */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-100 w-full object-cover object-center transition duration-200 group-hover:opacity-70  cursor-pointer"
        onClick={openModal} // Open modal when the image is clicked
      />

      {/* Modal component */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        // Modal component
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            minHeight: "100px",
            minWidth: "400px",
            maxWidth: "60%",
            maxHeight: "86%",
            background: " rgb(38 38 38)",
            borderRadius: "5px",
            overflow: "auto", // Add overflow:auto to enable scrolling when content overflows
            WebkitOverflowScrolling: "touch", // Enable smooth scrolling on iOS devices
          },
        }}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="close-button text-xl" // Use the CSS class for styles
        >
          x
        </button>

        {/* Display the larger image */}
        <div>
          <img src={src} alt={alt} className="w-full h-full object-cover  " />
        </div>

        {/* Description section */}
        <div className="description mt-4">
          <p
            className="text-gray-500"
            style={{
              maxWidth: "500px",
              maxHeight: "200px", // Set maximum height to 400px
              overflowY: "auto", // Add scroll bars if content exceeds maximum height
              overflowWrap: "break-word",
              textAlign: "justify",
            }}
          >
            {description}
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default GalleryViewer;

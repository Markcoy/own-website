import React, { useState } from "react";
import Modal from "react-modal";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const DescModal = ({ imageSrc, downloadUrl, description }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleDownload = () => {
    // Check if the downloadUrl starts with 'http' or 'https'
    if (downloadUrl.startsWith("http")) {
      // If it starts with 'http' or 'https', open it in a new tab
      window.open(downloadUrl, "_blank");
    } else {
      // Otherwise, assume it's a direct download link
      // Add your logic to initiate download
      window.location.href = downloadUrl;
    }
  };
  return (
    <div className="relative">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleOpenModal();
        }}
      >
        <img
          src={imageSrc}
          loading="lazy"
          alt=""
          className="filter grayscale group-hover:grayscale-0 group-hover:scale-110 h-full w-full object-cover object-center transition duration-200 "
        />
      </a>
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            maxWidth: "700px",
            maxHeight: "500px",
            margin: "auto",
            borderRadius: "20px", // Set the border radius to create rounded corners
            background: " rgb(38 38 38)",
          },
        }}
      >
        <div className="modal-content">
          <button
            className="close absolute top-4 right-4 size-10 text-white text-2xl"
            onClick={handleCloseModal}
          >
            &times;
          </button>
          <span className="mt-4 mx-5 flex relative text-3xl">Description</span>
          <p
            className="mt-3 mx-5 text-white text-md pr-2"
            style={{
              maxWidth: "600px",
              maxHeight: "300px", // Set maximum height to 400px
              overflowY: "auto", // Add scroll bars if content exceeds maximum height
              overflowWrap: "break-word",
              textAlign: "justify", // Justify the text
            }}
          >
            {description}
          </p>

          <button
            className="flex justify-center items-center absolute w-40 gap-2 duration-100 transition-all bottom-4 left-0 right-0 mb-6 border hover:opacity-80  border-gray-200 rounded-md  py-2 bg-neutral-300"
            onClick={handleDownload}
            style={{ marginLeft: "auto", marginRight: "54px" }}
          >
            <span className="text-xl mb-1 text-violet-700">Explore</span>
            <FaRegArrowAltCircleRight
              className="text-violet-700"
              fontSize={25}
            />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DescModal;

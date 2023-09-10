import React, { useContext } from "react";
import Modal from "../Modal";
import { GlobalContext } from "../../contexts/GlobalContextProvider";

const WriteFormModal = () => {
  const { isWriteModalOpen, setIsWriteModalOpen } = useContext(GlobalContext);

  return (
    <Modal isOpen={isWriteModalOpen} onClose={() => setIsWriteModalOpen(false)}>
      <form
        onSubmit={(e) => e.preventDefault}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <input
          type="text"
          name="title"
          id="title"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Title of the blog"
        />
        <input
          type="text"
          name="shortDescription"
          id="shortDescription"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Short description about the blog"
        />
        <textarea
          name="mainBody"
          id="mainBody"
          cols={10}
          rows={10}
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Blog main body....."
        />
      </form>
    </Modal>
  );
};

export default WriteFormModal;

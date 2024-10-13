import { useState } from "react";

function Settings() {
  const [isModalOpen, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isModalOpen);
  };

  return (
    <div className="w-full absolute">
      <div className="w-full flex pt-[8px] pr-[8px] absolute">
        <div
          onClick={toggleModal}
          className="flex items-center justify-center ml-auto w-[32px] h-[32px] rounded-full hover:bg-[#F9FEFF]/[.25] transition cursor-pointer"
        >
          <span className="text-[#F9FEFF] material-symbols-outlined">
            settings
          </span>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
            <h2 className="text-xl font-semibold mb-4">Configurações</h2>
            <p>Aqui você pode ajustar suas configurações.</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={toggleModal} // Fecha o modal
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;

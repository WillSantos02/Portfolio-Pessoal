import { useState, useRef, useEffect } from "react";

function Settings() {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpenModal(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="w-full relative">
      <div className="w-full flex pt-[8px] pr-[8px] absolute">
        <div
          onClick={toggleModal}
          className="relative flex items-center justify-center ml-auto w-[32px] h-[32px] rounded-full hover:bg-[#F9FEFF]/[.25] transition cursor-pointer"
        >
          <span className="text-[#F9FEFF] material-symbols-outlined">
            settings
          </span>
        </div>
      </div>

      {isModalOpen && (
        <div ref={modalRef} className="absolute top-[40px] right-[8px]">
          <div className="w-[198px] py-[16px] rounded-[4px] shadow-[1px_1px_2.5px_1px_rgba(0,0,0,0.55)]">
            <div className="w-full border-[0.5px] border-[#F9FEFF]/[.25] border-l-0 border-r-0">
              <button className="w-full flex flex-row items-center gap-[16px] py-[8px] pl-[8px] pr-[8px] hover:bg-[#F9FEFF]/[.10]">
                <span className="material-symbols-outlined text-[24px]">
                  mode_night
                </span>
                <span className="text-[12px] text-[#F9FEFF]/[.75]">
                  Aparência: tema escuro
                </span>
              </button>
            </div>

            <div className="w-full border-[0.5px] border-[#F9FEFF]/[.25] border-l-0 border-r-0 border-t-0">
              <button className="w-full flex flex-row items-center gap-[16px] py-[8px] pl-[8px] pr-[8px] hover:bg-[#F9FEFF]/[.10]">
                <span className="material-symbols-outlined text-[24px]">
                  translate
                </span>
                <span className="text-[12px] text-[#F9FEFF]/[.75]">
                  Idioma: Português
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;

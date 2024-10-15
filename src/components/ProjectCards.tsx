import odontoAgenda from "../assets/12102024_odonto_icon.svg";
import roletaDosCasaisLogo from "../assets/12102024_roleta_icon.svg";

function ProjectCards() {
  return (
    <div className="container flex flex-row justify-center items-center mt-[48px] gap-[40px]">
      <div className="container flex flex-row w-[413px] h-[148px] border rounded-[8px] border-[#F9FEFF]/[.25] shadow-[5px_5px_10px_2.5px_rgba(0,0,0,0.55)] cursor-pointer hover:border-[#000000]">
        <div className="mt-auto mb-auto ml-[38px]">
          <img
            src={odontoAgenda}
            alt="OdontoAgenda logo"
            className="w-[56px] h-[56px]"
          />
        </div>

        <div className="ml-[46px] flex flex-col py-[16px]">
          <span className="mb-[8px] text-base font-medium text-[#F9FEFF]">
            OdontoAgenda
          </span>
          <span className="text-sm text-[#F9FEFF] max-w-[258px]">
            Sistema de agendamento de pacientes com automação de envio de
            confirma via Whatsapp.
          </span>
          <span className="text-sm italic text-[#F9FEFF]/[.75] mt-auto">
            Em desenvolvimento
          </span>
        </div>
      </div>

      <div className="container flex flex-row w-[413px] h-[148px] border rounded-[8px] border-[#F9FEFF]/[.25] shadow-[5px_5px_10px_2.5px_rgba(0,0,0,0.55)] cursor-pointer hover:border-[#000000]">
        <div className="mt-auto mb-auto ml-[38px]">
          <img
            src={roletaDosCasaisLogo}
            alt="Roleta dos Casais logo"
            className="w-[56px] h-[56px]"
          />
        </div>

        <div className="ml-[46px] flex flex-col py-[16px]">
          <span className="mb-[8px] text-base font-medium text-[#F9FEFF]">
            Roleta dos Casais
          </span>
          <span className="text-sm text-[#F9FEFF] max-w-[258px]">
            Gire uma roleta para dedicir qual a diversão da noite.
          </span>
          <span className="text-sm italic text-[#F9FEFF]/[.75] mt-auto">
            Em desenvolvimento
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;

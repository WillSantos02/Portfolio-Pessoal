import profileImage from "../assets/profile-image.jpeg";
import linkedinImage from "../assets/104493_linkedin_icon.svg";
import instagramImage from "../assets/1161953_instagram_icon.svg";
import threadsImage from "../assets/10984531_threads_thread_app_mobile_icon.svg";
import odontoAgenda from "../assets/12102024_odonto_icon.svg";
import roletaDosCasaisLogo from "../assets/12102024_roleta_icon.svg";

function Home() {
  return (
    <div className="h-[960px] relative container flex flex-col items-center ">
      <div className="w-full flex pt-[8px] pr-[8px] absolute">
        <div className="flex items-center justify-center ml-auto w-[32px] h-[32px] rounded-full hover:bg-[#F9FEFF]/[.25] transition cursor-pointer">
          <span className="text-[#F9FEFF] material-symbols-outlined">
            settings
          </span>
        </div>
      </div>

      <section className="container pt-[167px]">
        <div className="container flex flex-col items-center">
          <div className="w-[192px] h-[192px] overflow-hidden rounded-full mb-[16px]">
            <img
              src={profileImage}
              alt="foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container flex flex-col items-center">
            <span className="mb-[16px] text-2xl	font-semibold	text-[#F9FEFF]">
              Wirlley Santos
            </span>

            <div className="container flex flex-row gap-[24px] justify-center items-center text-center mb-[24px]">
              <span className="text-xs text-[#F9FEFF]/[0.5] w-[296px]">
                Desenvolvedor RPA com experiência no estudo de automações para
                Redes (NOC).
              </span>

              <span className="text-base text-[#F9FEFF] w-[296px]">
                Desenvolvedor Web que ama UI/UX sempre buscando aprender mais!
              </span>

              <span className="text-xs text-[#f9feff]/[0.5] w-[296px]">
                Guitarrista nas horas vagas. Não vivo da música, mas vivo com
                ela
              </span>
            </div>
          </div>

          <div className="container flex flex-row items-center justify-center gap-[24px]">
            <a href="#">
              <img
                src={instagramImage}
                alt="Perfil no Instagram"
                className="w-[24px] h-[24px]"
              />
            </a>

            <a href="#">
              <img
                src={threadsImage}
                alt="Perfil no Threads"
                className="w-[24px] h-[24px]"
              />
            </a>

            <a href="#">
              <img
                src={linkedinImage}
                alt="Perfil no Linkedin"
                className="w-[24px] h-[24px]"
              />
            </a>
          </div>
        </div>

        <div className="container flex flex-row justify-center items-center mt-[48px] gap-[40px]">
          <div className="container flex flex-row w-[413px] h-[148px] border rounded-[8px] border-[#F9FEFF]/[.25] shadow-[5px_5px_10px_2.5px_rgba(249,254,255,0.25)]">
            <div className="mt-[38px] ml-[38px]">
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

          <div className="container flex flex-row w-[413px] h-[148px] border rounded-[8px] border-[#F9FEFF]/[.25] shadow-[5px_5px_10px_2.5px_rgba(249,254,255,0.25)]">
            <div className="mt-[38px] ml-[38px]">
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
      </section>

      <footer className="container w-full mt-auto flex justify-center items-center h-[40px] mb-[16px]">
        <p>Todos os direitos reservados © 2024</p>
      </footer>
    </div>
  );
}

export default Home;

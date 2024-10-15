import styles from 'PhraseDisplay.module.scss'

function PhraseDisplay() {
  return (
    <div className="container flex flex-col items-center">
      <span className="mb-[16px] text-2xl	font-semibold	text-[#F9FEFF]">
        Wirlley Santos
      </span>

      <div className="container flex flex-row gap-[24px] justify-center items-center text-center mb-[24px]">
        <span className="text-xs text-[#F9FEFF]/[0.5] w-[296px] transition-all duration-500 transform">
          Desenvolvedor RPA com experiência no estudo de automações para Redes
          (NOC).
        </span>

        <span className="text-base text-[#F9FEFF] w-[296px] transition-all duration-500 transform">
          Desenvolvedor Web que ama UI/UX sempre buscando aprender mais!
        </span>

        <span className="text-xs text-[#f9feff]/[0.5] w-[296px] transition-all duration-500 transform">
          Guitarrista nas horas vagas. Não vivo da música, mas vivo com ela.
        </span>
      </div>
    </div>
  );
}

export default PhraseDisplay;

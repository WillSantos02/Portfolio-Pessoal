import profileImage from "../assets/profile-image.jpeg";

function Perfil() {
  return (
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
            Desenvolvedor RPA com experiência no estudo de automações para Redes
            (NOC).
          </span>

          <span className="text-base text-[#F9FEFF] w-[296px]">
            Desenvolvedor Web que ama UI/UX sempre buscando aprender mais!
          </span>

          <span className="text-xs text-[#f9feff]/[0.5] w-[296px]">
            Guitarrista nas horas vagas. Não vivo da música, mas vivo com ela
          </span>
        </div>
      </div>

      <div className="container flex flex-row items-center justify-center gap-[16px]">
        <a
          href="#"
          className="flex items-center justify-center w-[32px] h-[32px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#F9FEFF] hover:text-[#C13584]"
            fill="currentColor"
            viewBox="0 0 56.7 56.7"
          >
            <path
              d="M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8S41 36.5 41 29.5s-5.8-12.8-12.8-12.8zm0 21c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"
              fill="currentColor"
            ></path>
            <circle cx="41.5" cy="16.4" r="2.9" fill="currentColor"></circle>
            <path
              d="M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3c0-4.2-1.4-7.8-4-10.4zm-.4 31c0 3.1-1.1 5.6-2.9 7.3s-4.3 2.6-7.3 2.6H18c-3 0-5.5-.9-7.3-2.6C8.9 45.4 8 42.9 8 39.8V19.3c0-3 .9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2v20.6z"
              fill="currentColor"
            ></path>
          </svg>
        </a>

        <a
          href="#"
          className="flex items-center justify-center w-[32px] h-[32px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#F9FEFF] hover:text-[#000000]"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <path
              d="M48.793 51.383c-2.204.298-3.997 1.235-5.035 2.644-.85 1.148-1.145 2.546-.88 4.139.25 1.484.71 4.252 7.99 4.252 6.972 0 8.895-7.01 9.426-10.856-1.853-.369-3.868-.558-6.019-.558-1.75 0-3.58.124-5.482.379z"
              fill="currentColor"
            ></path>
            <path
              d="M97.432 20.541C95.764 11.247 88.7 4.188 79.437 2.557c-19.5-3.429-39.563-3.39-58.888.003-9.257 1.663-16.316 8.722-17.981 17.994A171.192 171.192 0 0 0 0 50.077c0 9.779.864 19.66 2.568 29.358 1.63 9.264 8.688 16.328 17.998 18.002A171.463 171.463 0 0 0 50.083 100c9.772 0 19.647-.861 29.354-2.563 9.442-1.663 16.338-8.56 18-18.002A170.58 170.58 0 0 0 100 50.077c0-9.881-.861-19.812-2.568-29.536zM79.854 40.407c-1.771.59-3.678-.439-4.23-2.224-3.987-12.831-11.436-18.065-25.704-18.065-17.323 0-25.392 10.02-25.392 31.53 0 18.16 8.911 27.922 25.771 28.226 7.15.249 13.57-2.043 17.633-6.02 2.773-2.713 4.241-6.045 4.241-9.626 0-3.776-1.284-6.815-3.819-9.036a12.92 12.92 0 0 0-1.609-1.198c-1.771 9.443-7.692 15.186-15.877 15.186-10.75 0-13.905-5.385-14.658-9.898-.572-3.424.16-6.631 2.107-9.27 2.134-2.893 5.536-4.789 9.583-5.33 4.382-.586 8.477-.575 12.155-.038-.606-2.612-1.814-4.746-3.51-6.017-3.797-2.792-10.698-2.527-14.485 2.354a3.372 3.372 0 0 1-4.743.602 3.381 3.381 0 0 1-.603-4.743c6.256-8.073 17.377-8.4 23.861-3.644 3.825 2.872 6.154 7.699 6.598 13.414 2.129.91 4.02 2.075 5.64 3.494 4.002 3.511 6.12 8.392 6.12 14.124 0 5.363-2.226 10.5-6.272 14.46-5.19 5.076-13.045 7.958-21.658 7.958-.281 0-.557-.006-.834-.011-20.587-.368-32.401-13.121-32.401-34.987 0-25.408 10.817-38.29 32.152-38.29 17.334 0 27.253 7.037 32.16 22.82a3.38 3.38 0 0 1-2.226 4.229z"
              fill="currentColor"
            ></path>
          </svg>
        </a>

        <a
          href="#"
          className="flex items-center justify-center w-[32px] h-[32px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#F9FEFF] hover:text-[#0E76A8]"
            fill="currentColor"
            viewBox="0 0 56.693 56.693"
          >
            <path
              d="M30.071 27.101v-.077a2.031 2.031 0 0 1-.05.077h.05z"
              fill="currentColor"
            ></path>
            <path
              d="M49.265 4.667H7.145c-2.016 0-3.651 1.596-3.651 3.563v42.613c0 1.966 1.635 3.562 3.651 3.562h42.12c2.019 0 3.654-1.597 3.654-3.562V8.23c0-1.968-1.636-3.563-3.654-3.563zm-30.79 41.637H11.01V23.845h7.465v22.459zm-3.732-25.527h-.05c-2.504 0-4.124-1.725-4.124-3.88 0-2.203 1.67-3.88 4.223-3.88 2.554 0 4.125 1.677 4.175 3.88 0 2.155-1.622 3.88-4.224 3.88zm30.651 25.527h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078-2.062 0-3.29 1.389-3.831 2.731-.197.479-.245 1.149-.245 1.821v12.543h-7.465s.098-20.354 0-22.459h7.465v3.179c.992-1.53 2.766-3.709 6.729-3.709 4.911 0 8.594 3.211 8.594 10.11v12.88z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Perfil;

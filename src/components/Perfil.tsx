import profileImage from "../assets/profile-image.jpeg";
import SocialMedias from "./SocialMedias";
import PhraseDisplay from "./PhraseDisplay";

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

      <PhraseDisplay />

      <SocialMedias />
    </div>
  );
}

export default Perfil;

import ProjectCards from "./ProjectCards";
import Settings from "./Settings";
import Perfil from "./Perfil";

function Home() {
  return (
    <div className="h-[960px] relative container flex flex-col items-center ">
      <Settings />

      <section className="container pt-[167px] mb-[128px]">
        <Perfil />

        <ProjectCards />
      </section>

      <footer className="container w-full mt-auto flex justify-center items-center h-[40px] mb-[16px]">
        <p className="text-sm italic">Todos os direitos reservados © 2024</p>
      </footer>
    </div>
  );
}

export default Home;

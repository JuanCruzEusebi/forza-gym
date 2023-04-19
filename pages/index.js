import Head from "next/head";
import Navbar from "@/components/Navbar/Navbarapp";
import Hero from "@/components/Hero/Heroapp";
import NuevoConcepto from "@/components/NuevoConcepto/NuevoConceptoapp";
import ExpForza from "@/components/ExperienciaForza/ExperienciaForzaapp";
import NuestroEspacio from "@/components/NuestroEspacio/NuestroEspacioapp";
import Actividades from "@/components/Actividades/Actividadesapp";
import Contact from "@/components/Contact/Contactapp";
import Forzamed from "@/components/Forzamed/Forzamedapp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ scrollBehavior: "smooth" }}>
        <Navbar></Navbar>
        <Hero></Hero>
        <NuevoConcepto></NuevoConcepto>
        <ExpForza></ExpForza>
        <NuestroEspacio></NuestroEspacio>
        <Actividades></Actividades>
        <Contact></Contact>
        <Forzamed></Forzamed>
      </main>
    </>
  );
}

import Header from "@/components/school/Header";
import Hero from "@/components/school/Hero";
import About from "@/components/school/About";
import Academics from "@/components/school/Academics";
import Admissions from "@/components/school/Admissions";
import Teachers from "@/components/school/Teachers";
import Gallery from "@/components/school/Gallery";
import Contact from "@/components/school/Contact";
import Footer from "@/components/school/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Academics />
        <Admissions />
        <Teachers />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

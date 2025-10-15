import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutAssociation from "@/components/AboutAssociation";
import ProblemStatement from "@/components/ProblemStatement";
import Solution from "@/components/Solution";
import Team from "@/components/Team";
import Implementation from "@/components/Implementation";
import Impact from "@/components/Impact";
import NextSteps from "@/components/NextSteps";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutAssociation />
        <ProblemStatement />
        <Solution />
        <Team />
        <Implementation />
        <Impact />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

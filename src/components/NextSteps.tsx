import { MapPin, Zap, Handshake, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NextSteps = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Geographic Expansion",
      description: "Scale across multiple agro-climatic zones beyond Karnataka and Maharashtra"
    },
    {
      icon: Zap,
      title: "Advanced API Integration",
      description: "Integrate real-time analysis APIs for enhanced satellite data processing"
    },
    {
      icon: Handshake,
      title: "B2B Partnerships",
      description: "Build strategic partnerships with FPOs and agritech firms for wider reach"
    }
  ];

  const sdgs = [
    { number: 2, title: "Zero Hunger", description: "Promoting food security through improved yields" },
    { number: 13, title: "Climate Action", description: "Enabling climate-smart farming practices" },
    { number: 15, title: "Life on Land", description: "Restoring soil health and regenerative agriculture" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Next Steps</h2>
            <p className="text-xl text-muted-foreground">
              Our roadmap for scaling impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="p-3 gradient-secondary rounded-lg w-fit mb-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">UN Sustainable Development Goals</h3>
            </div>
            
            <p className="text-lg mb-6">
              SparkyAI is committed to advancing the UN SDGs through sustainable agricultural innovation:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sdgs.map((sdg, index) => (
                <div key={index} className="bg-background rounded-lg p-4 border-2 border-primary/20">
                  <div className="flex items-start gap-3">
                    <Badge className="gradient-primary text-white border-0 text-lg px-3 py-1">
                      {sdg.number}
                    </Badge>
                    <div>
                      <h4 className="font-semibold mb-1">{sdg.title}</h4>
                      <p className="text-sm text-muted-foreground">{sdg.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;

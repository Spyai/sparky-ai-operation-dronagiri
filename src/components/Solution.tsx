import { Satellite, Droplets, Sprout, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Solution = () => {
  const features = [
    {
      icon: Satellite,
      title: "Multispectral Imagery",
      description: "NDVI, NDWI, and SAVI satellite analysis for comprehensive farm monitoring"
    },
    {
      icon: Droplets,
      title: "Precision Irrigation",
      description: "Real-time water management advisory based on soil moisture and weather data"
    },
    {
      icon: Sprout,
      title: "Crop Planning",
      description: "Data-driven recommendations for optimal crop selection and rotation"
    },
    {
      icon: TrendingUp,
      title: "Soil Restoration",
      description: "Analytics-based guidance for sustainable soil health improvement"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Solution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered platform integrating multispectral imagery with soil, water, and weather datasets 
              to deliver real-time farm insights and precision advisory
            </p>
          </div>

          <div className="mb-12 p-8 bg-primary/5 rounded-xl border-2 border-primary/20">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Geospatial Data Integration (GDI)</h3>
            <p className="text-lg leading-relaxed">
              SparkyAI leverages advanced geospatial datasets to provide precision advisory on irrigation, 
              crop planning, and soil restoration. By combining satellite imagery with on-ground data, 
              we enable smallholder farmers to make informed, data-driven decisions that improve productivity 
              and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 gradient-primary rounded-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

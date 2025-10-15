import { TrendingUp, Users, Droplets, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Impact = () => {
  const metrics = [
    {
      icon: Users,
      value: "10,000+",
      label: "Farmers to be Reached",
      sublabel: "In the next 2 years",
      color: "text-primary"
    },
    {
      icon: Target,
      value: "500+",
      label: "Rural Jobs Created",
      sublabel: "Over next 3 financial years",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      value: "25%",
      label: "Input Efficiency",
      sublabel: "Improved resource utilization",
      color: "text-accent"
    },
    {
      icon: Droplets,
      value: "20%",
      label: "Water Efficiency",
      sublabel: "Through precision irrigation",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Impact & Outcomes</h2>
            <p className="text-xl text-muted-foreground">
              Measurable results from our pilot programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                  <CardHeader>
                    <div className="mx-auto p-3 gradient-primary rounded-lg w-fit mb-3">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className={`text-4xl font-bold ${metric.color}`}>
                      {metric.value}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold mb-1">{metric.label}</div>
                    <div className="text-sm text-muted-foreground">{metric.sublabel}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Pilot Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-background rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 gradient-primary rounded-lg">
                    <Droplets className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Water Efficiency Improvement</h4>
                    <p className="text-muted-foreground">
                      Initial pilots in Karnataka and Maharashtra demonstrated <strong>20% increase in water efficiency</strong> through 
                      multispectral analysis and precision irrigation advisory.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-background rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 gradient-primary rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Yield Predictability</h4>
                    <p className="text-muted-foreground">
                      Achieved <strong>15% better yield predictability</strong> through advanced NDVI, NDWI, and SAVI 
                      satellite imagery analysis, enabling better crop planning.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Impact;

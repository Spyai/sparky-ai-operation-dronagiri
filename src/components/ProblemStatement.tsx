import { AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProblemStatement = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-destructive/20 shadow-lg">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/10 rounded-lg">
                  <AlertCircle className="h-8 w-8 text-destructive" />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">Problem Statement</CardTitle>
                  <p className="text-muted-foreground">The challenge we're addressing</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold">
                Low crop yields and inefficient resource allocation
              </h3>
              <p className="text-lg leading-relaxed">
                Farmers face critical issues with low productivity, poor water management, and soil degradation 
                due to excessive fertilizer use. Traditional farming methods lack data-driven insights, leading 
                to resource wastage and reduced agricultural sustainability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                  <div className="font-semibold text-destructive mb-1">Low Productivity</div>
                  <div className="text-sm text-muted-foreground">Suboptimal crop yields</div>
                </div>
                <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                  <div className="font-semibold text-destructive mb-1">Water Waste</div>
                  <div className="text-sm text-muted-foreground">Inefficient irrigation</div>
                </div>
                <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                  <div className="font-semibold text-destructive mb-1">Soil Degradation</div>
                  <div className="text-sm text-muted-foreground">Excessive fertilizer use</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;

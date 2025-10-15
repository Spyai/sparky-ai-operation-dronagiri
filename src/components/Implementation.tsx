import field1 from "@/assets/field-1.jpeg";
import field2 from "@/assets/field-2.jpeg";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Implementation = () => {
  const images = [
    { src: field1, alt: "Field visit - Team working with farmers" },
    { src: field2, alt: "Field visit - Farmers using SparkyAI platform" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Pilot Status: Ongoing</Badge>
            <h2 className="text-4xl font-bold mb-4">Implementation Updates</h2>
            <p className="text-xl text-muted-foreground">
              On-ground deployment in Bidar, Karnataka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-secondary/5 rounded-xl border-2 border-secondary/20">
            <h3 className="text-xl font-semibold mb-3 text-secondary">Field Engagement</h3>
            <p className="text-lg">
              Our team is actively working with local farmers in Bidar district, conducting field surveys, 
              collecting data, and demonstrating the platform's capabilities for real-time farm advisory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;

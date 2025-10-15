import { ExternalLink } from "lucide-react";

const AboutAssociation = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          About the Association
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            This startup is associated with the Technology Innovation Hub (TIH) on Positioning and Precision Technologies (PPT) at IIT Tirupati Navavishkar I-Hub Foundation (IITTNiF) through <span className="font-semibold text-foreground">Operation Dronagiri</span>, a flagship initiative of the Department of Science & Technology (DST) Geospatial Data Promotion and Development Committee (GDPDC) and the Geospatial Innovation Cell (GIC) under the National Geospatial Policy (NGP).
          </p>
          <p className="text-lg leading-relaxed">
            Operation Dronagiri demonstrates the power of geospatial technology in transforming Agriculture, Transportation & Infrastructure, and Livelihood & Skilling, aligning with the national vision of <span className="font-semibold text-foreground">Viksit Bharat 2047</span>.
          </p>
          <p className="text-lg leading-relaxed">
            The initiative is powered by the <span className="font-semibold text-foreground">Geo-Intel Lab</span>, the Geospatial Intelligence and Applications Laboratory of IITTNiF, which develops applications and platforms for public good and digital governance. The lab integrates GIS, Remote Sensing, GNSS, and Data Analytics to deliver scalable decision-support systems and hosts India's first Federated Geospatial Data Interface (GDI) node, enabling seamless data access and collaboration across the national geospatial ecosystem.
          </p>
          <div className="pt-6 border-t border-border">
            <p className="text-lg leading-relaxed flex items-center gap-2 flex-wrap">
              All products and platforms developed under this collaboration will be featured on the National Geo-Intel Portal:{" "}
              <a 
                href="https://geo.intel.iittnif.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
              >
                geo.intel.iittnif.com
                <ExternalLink className="h-4 w-4" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAssociation;

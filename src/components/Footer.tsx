import sparkyLogo from "@/assets/sparky-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src={sparkyLogo} alt="SparkyAI" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-bold text-lg">SparkyAI</div>
                <div className="text-sm text-muted-foreground">Precision Agriculture for Sustainable Farming</div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-sm text-muted-foreground mb-2">Supported by</div>
              <div className="font-semibold">Geospatial Innovation Accelerator (GIA)</div>
              <div className="text-sm text-muted-foreground">IIT Tirupati Navavishkar I-Hub Foundation</div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 SparkyAI. Part of Operation Dronagiri initiative.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import sparkyLogo from "@/assets/sparky-logo.png";
import iitLogo from "@/assets/iit-logo-full.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <img src={sparkyLogo} alt="SparkyAI Logo" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">SparkyAI</h1>
              <p className="text-sm text-muted-foreground">Operation Dronagiri</p>
            </div>
          </div>
          <img src={iitLogo} alt="IIT Tirupati Navavishkar I-Hub Foundation - Geo-Intel Lab" className="h-16 object-contain" />
        </div>
      </div>
    </header>
  );
};

export default Header;

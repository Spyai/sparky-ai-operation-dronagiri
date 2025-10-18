import sparkyLogo from "@/assets/sparky-logo.png";
import iit_full_Logo from "@/assets/iit-logo-full.png";
import iit_short_Logo from "@/assets/iit-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center xs:gap-2 sm:gap-6">
            <img src={sparkyLogo} alt="SparkyAI Logo" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">SparkyAI</h1>
              <p className="text-sm text-muted-foreground">Operation Dronagiri</p>
            </div>
          </div>
          <div>
            <img src={iit_full_Logo} alt="IIT Tirupati Navavishkar I-Hub Foundation - Geo-Intel Lab" className="hidden sm:block h-16 object-contain" />
            <img src={iit_short_Logo} alt="IIT Tirupati - Geo-Intel Lab" className="block sm:hidden h-16 object-contain" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

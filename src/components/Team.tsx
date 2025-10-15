import anuragPhoto from "@/assets/anurag.jpeg";
import kumarPhoto from "@/assets/kumar.jpeg";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const members = [
    {
      name: "Anurag Kunde",
      role: "Founder & CEO",
      bio: "B.Tech (Artificial Intelligence & Machine Learning)",
      photo: anuragPhoto
    },
    {
      name: "Kumar Patil",
      role: "Co-Founder & COO",
      bio: "Information Science Engineering",
      photo: kumarPhoto
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate innovators bringing AI to agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {members.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

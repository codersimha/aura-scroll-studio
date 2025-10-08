import { CustomCursor } from "@/components/CustomCursor";
import { Portfolio3D } from "@/components/Portfolio3D";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <CustomCursor />
      
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(291_83%_71%/0.15),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,hsl(282_100%_65%/0.1),transparent_50%)]" />
      </div>

      <Portfolio3D />
    </div>
  );
};

export default Index;

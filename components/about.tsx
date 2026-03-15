import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <Card
      id="about"
      className="ring-0"
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          About
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Card className="rounded-none ring-0">
          <CardHeader>
            <CardTitle>
              Hi, my name is Chan Koh.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>I'm currently working as a Full Stack Developer at VisaFlo, building B2B SaaS solutions for immigration professionals.</p>
            <p>I'm looking for new challenges and opportunities to grow as a developer.</p>
          </CardContent>
        </Card>
        <Separator />
      </CardContent>
    </Card>
  );
}
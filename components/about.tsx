import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          About
        </CardTitle>
      </CardHeader>
      <CardContent>
        content
      </CardContent>
    </Card>
  );
}
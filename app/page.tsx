import { Card, CardContent } from "./_components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <Card>
        <CardContent>
          <h1 className="text-2xl font-bold">Welcome!</h1>
          <p>This is a simple Next.js application.</p>
        </CardContent>
      </Card>
    </div>
  );
}

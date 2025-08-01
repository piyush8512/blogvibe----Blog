

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  return (
    <div>
      <p className="text-3xl">Home Pagejjjjj</p>
    </div>
  );
}

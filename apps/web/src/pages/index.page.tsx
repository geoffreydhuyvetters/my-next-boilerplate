import { DefaultLayout } from '@/layouts/DefaultLayout';

const Index = () => {
  return (
    <DefaultLayout>
      <div className="flex gap-y-4 flex-col">
        <h1 className="text-3xl font-semibold">Hello World</h1>
        <p className="max-w-2xl">start hacking!</p>
      </div>
    </DefaultLayout>
  );
};

export default Index;

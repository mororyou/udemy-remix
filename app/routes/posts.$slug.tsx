import { json, LoaderFunctionArgs } from '@remix-run/node';

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;
  console.log(slug);

  return json({ slug });
}

export default function Post() {
  return (
    <div>
      <h1>Single Post</h1>
    </div>
  );
}

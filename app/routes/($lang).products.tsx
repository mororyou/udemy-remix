import { LoaderFunctionArgs } from '@remix-run/node';

export async function loader({ params }: LoaderFunctionArgs) {
  const lang = params.lang;
  console.log(lang);
  return { lang };
}

export default function Products() {
  return <div>($lang).products</div>;
}

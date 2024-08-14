import { LoaderFunctionArgs } from '@remix-run/node';

export const loader = ({ params }: LoaderFunctionArgs) => {
  const param = params['*'];

  // sample path
  // path: /category/how-to -> param: how-to
  // path: /category/sub-category/sub-cat-2/how-to -> param: sub-category/sub-cat-2/how-to
  console.log('param:', param);
  return param;
};

export default function Category() {
  return (
    <div>
      <h1>Category Layout</h1>
    </div>
  );
}

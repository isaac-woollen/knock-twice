import { json } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';
import { TabBar } from '~/components/Header';

export default function Policies() {

  return (
    <div className="policies">
      <TabBar />
      <h1>Policies</h1>
      <div>
        we dont care lmao
      </div>
    </div>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */

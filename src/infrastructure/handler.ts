import getHealthcheckCollaboration from "../application/collaborations/get-healthcheck";
import doSomethingCollaboration from "../application/collaborations/do-something";

const handler = async (req: Request) => {
  const requestURL = new URL(req.url);

  if (requestURL.pathname === '/healthcheck') {
    const res = getHealthcheckCollaboration();
    return new Response(res, { status: 200 });
  }

  if (requestURL.pathname === '/something') {
    const res = await doSomethingCollaboration();
    return new Response(JSON.stringify(res), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }

  return new Response('Not found', { status: 404 });
}

export default handler;

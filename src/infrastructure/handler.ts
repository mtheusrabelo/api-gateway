import getHealthcheckCollaboration from "../application/collaborations/get-healthcheck";

const handler = (req: Request) => {
  const requestURL = new URL(req.url);

  if (requestURL.pathname === '/healthcheck') {
    const res = getHealthcheckCollaboration();
    return new Response(res, { status: 200 });
  }

  return new Response('Not found', { status: 404 });
}

export default handler;

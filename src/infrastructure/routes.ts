import getHealthcheckCollaboration from "../application/collaborations/get-healthcheck";
import doSomethingCollaboration from "../application/collaborations/do-something";

export const getHealthcheck = () => {
  const res = getHealthcheckCollaboration();
  return new Response(res, { status: 200 });
};

export const doSomething = async () => {
  const res = await doSomethingCollaboration();
  return new Response(JSON.stringify(res), { status: 200, headers: { 'Content-Type': 'application/json' } });
};

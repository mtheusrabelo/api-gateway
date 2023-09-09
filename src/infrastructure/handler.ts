const handler = (req: Request) => {

  return new Response(`Bun! ${req.url}`);
}

export default handler;

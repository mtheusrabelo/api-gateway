
const BASE_URL = 'https://httpbin.org';

const doSomething = async () => {
  const response = await fetch(`${BASE_URL}/anything`);
  const data = await response.json();

  return data;
}

export default doSomething;

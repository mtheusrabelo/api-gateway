import HttpBin from '../../infrastructure/gateways/httpBin';

const doSomethingCollaboration = async () => {
  const data = await HttpBin.doSomething();

  return data;
}

export default doSomethingCollaboration;

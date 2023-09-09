const BASE_URL = 'https://httpbin.org';

class HttpBinGateway {
  public static async doSomething() {
    const response = await fetch(`${BASE_URL}/anything`);
    const data = await response.json();

    return data;
  }
}

export default HttpBinGateway;

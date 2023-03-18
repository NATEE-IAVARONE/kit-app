import type { AddressComponents } from '.';



export const LOCALHOST_COMPONENTS: AddressComponents = {
  protocol: 'http',
  baseUrl: 'localhost',
  port: 5173,
};



class KitServer_UI {

  private address = this.composeAddress(this.addressComponents);

  constructor(private addressComponents: AddressComponents) {
    
  }

  private composeAddress({ protocol, baseUrl, port }: AddressComponents) {
    return `${protocol}://${baseUrl}${port ? ':' + port : ''}`;
  }

  async fetchJSON<T = any>(endpoint: string): Promise<T> {
    return await fetch(
      `${this.address}/${endpoint}`,
      {
        method: 'GET',
        headers: { 'content-type': 'application/json' }
      }
    ).then(res => res.json());
  }

}

export const kitServer_UI = new KitServer_UI(LOCALHOST_COMPONENTS);
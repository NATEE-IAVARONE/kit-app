export interface AddressComponents {
  // e.g: http, https
  protocol: string;

  // e.g: localhost
  baseUrl: string;
  
  // e.g: 5173
  port: number;
}
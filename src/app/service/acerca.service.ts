import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AcercaService {
  URL = 'https://backend-deploy-portfolio.up.railway.app/acerca/';

  constructor(private httpClient: HttpClient) {}
}

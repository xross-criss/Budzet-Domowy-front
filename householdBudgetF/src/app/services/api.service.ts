import {HttpClient} from "@angular/common/http";

export class ApiService {

  baseUrl = "http://localhost:8080";

  constructor(httpClient: HttpClient) {
  }

}

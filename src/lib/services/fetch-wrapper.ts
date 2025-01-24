export type TFetchResult<T> = {
  status: number;
  message: string;
  data: T | null;
};

type FetchMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export class MyFetch {
  private _baseUrl = "";
  private _url = "";
  private _bearerToken: string | null = null;
  private _headers: Record<string, string> = {
    "content-type": "application/json",
  };
  private _method: FetchMethod = "GET";
  private _body: any;
  private _errMesage = "Request error";

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  method(method: FetchMethod) {
    this._method = method;
    return this;
  }

  url(url: string) {
    this._url = url;
    return this;
  }

  bearer(token?: string | null) {
    if (token) this._bearerToken = token;
    return this;
  }

  body(body: any) {
    this._body = body;
    return this;
  }

  errorMessage(errMesage: string) {
    this._errMesage = errMesage;
    return this;
  }

  async execute<T>() {
    if (this._bearerToken)
      this._headers["authorization"] = `Bearer ${this._bearerToken}`;

    const opts: Record<string, any> = {
      method: this._method,
      headers: this._headers,
    };
    if (this._method !== "GET" && this._body) {
      if (this._body instanceof FormData) {
        opts.body = this._body;
        opts.headers = { authorization: opts.headers.authorization };
      } else opts.body = JSON.stringify(this._body);
    }

    const res = await fetch(`${this._baseUrl}${this._url}`, opts);
    const json = await res.json().catch((err) => {
      console.log(`fetch ${this._url} error:`, err);
      return null;
    });
    if (!res.ok) {
      throw new Error(json?.message || this._errMesage);
    } else {
      return json as T;
    }
  }
}

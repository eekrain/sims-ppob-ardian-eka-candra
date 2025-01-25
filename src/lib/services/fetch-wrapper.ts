export type TFetchResult<T> = {
  status: number;
  message: string;
  data: T | null;
};

type FetchMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export class MyFetch {
  private _baseUrl = "";
  private _url = "";
  private _headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  private _method: FetchMethod = "GET";
  private _body: any;
  private _errMesage = "Request error";

  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  method(method: FetchMethod) {
    if (method === "GET") this._body = undefined;
    this._method = method;
    return this;
  }

  url(url: string) {
    this._url = url;
    return this;
  }

  bearer(token?: string | null) {
    if (token) this._headers["Authorization"] = `Bearer ${token}`;
    return this;
  }

  body(body: any) {
    if (body instanceof FormData) {
      this._body = body;
      delete this._headers["Content-Type"];
    } else if (body !== undefined) this._body = JSON.stringify(body);
    return this;
  }

  errorMessage(errMesage: string) {
    this._errMesage = errMesage;
    return this;
  }

  async execute<T>() {
    const controller = new AbortController();
    const opts: RequestInit = {
      method: this._method,
      headers: this._headers,
      signal: controller.signal,
    };
    if (this._body) opts.body = this._body;

    try {
      const res = await fetch(`${this._baseUrl}${this._url}`, opts);
      const json = await res.json().catch(() => null);

      if (!res.ok) throw new Error(json?.message || this._errMesage);
      else return json as T;
    } catch (err) {
      throw err;
    } finally {
      controller.abort();
    }
  }
}

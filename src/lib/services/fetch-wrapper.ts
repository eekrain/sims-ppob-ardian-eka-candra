export type TFetchResult<T> = {
  status: number;
  message: string;
  data: T | null;
};
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

const initHeaders = (body?: any) =>
  body instanceof FormData
    ? { body: body }
    : {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
const GET = (url: string) =>
  new MyFetch({ url, opts: { method: "GET", ...initHeaders() } });
const POST = (url: string, body: any) =>
  new MyFetch({ url, opts: { method: "POST", ...initHeaders(body) } });
const PUT = (url: string, body: any) =>
  new MyFetch({ url, opts: { method: "PUT", ...initHeaders(body) } });
const PATCH = (url: string, body: any) =>
  new MyFetch({ url, opts: { method: "PATCH", ...initHeaders(body) } });
const DELETE = (url: string) =>
  new MyFetch({ url, opts: { method: "DELETE", ...initHeaders() } });

export const myfetch = { GET, POST, PUT, PATCH, DELETE };

class MyFetch {
  private _url = "";
  private _opts: any = {};
  private _errMesage = "Request error";

  constructor(opts: { url: string; opts: RequestInit }) {
    this._opts = opts.opts;
    this._url = opts.url;
  }

  errorMessage(errMesage: string) {
    this._errMesage = errMesage;
    return this;
  }

  async execute<T>() {
    const controller = new AbortController();
    const token = localStorage.getItem("accessToken");
    if (token) this._opts.headers["Authorization"] = `Bearer ${token}`;

    try {
      const res = await fetch(`${BASE_URL}${this._url}`, this._opts);
      const json = await res.json().catch(() => null);

      if (!res.ok) throw new Error(json?.message || this._errMesage);
      else return json as T;
    } catch (err: any) {
      throw new Error(err.message);
    } finally {
      controller.abort();
    }
  }
}

export type TFetchResult<T> = {
  status: number;
  message: string;
  data: T | null;
};
const BASE_URL = import.meta.env.VITE_BASE_API_URL as string;

const initBody = (body?: any) => {
  const headers: any = { "Content-Type": "application/json" };
  if (!body) return { headers };
  if (body instanceof FormData) return { body };
  return { body: JSON.stringify(body), headers };
};

export const myfetch = {
  get: (url: string) =>
    new MyFetch({ url, opts: { method: "GET", ...initBody() } }),
  post: (url: string, body?: any) =>
    new MyFetch({ url, opts: { method: "POST", ...initBody(body) } }),
  put: (url: string, body?: any) =>
    new MyFetch({ url, opts: { method: "PUT", ...initBody(body) } }),
  patch: (url: string, body?: any) =>
    new MyFetch({ url, opts: { method: "PATCH", ...initBody(body) } }),
  delete: (url: string, body?: any) =>
    new MyFetch({ url, opts: { method: "DELETE", ...initBody(body) } }),
};

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

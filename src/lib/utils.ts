import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import createBreakpoint from "@kodingdotninja/use-tailwind-breakpoint";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const { useBreakpoint, useBreakpointEffect } = createBreakpoint({
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
});

type FetchMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export class MyFetch {
  private _baseUrl = "";
  private _url = "";
  private _token: string | null = null;
  private _headers: Record<string, string> = {};
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

  token(token: string) {
    this._token = token;
    return this;
  }

  body(body: any) {
    this._body = JSON.stringify(body);
    return this;
  }

  errorMessage(errMesage: string) {
    this._errMesage = errMesage;
    return this;
  }

  async execute<T>() {
    this._headers["Content-Type"] = "application/json";
    if (this._token) this._headers["Authorization"] = `Bearer ${this._token}`;

    const opts: Record<string, any> = {
      method: this._method,
      headers: this._headers,
    };
    if (this._body) opts.body = this._body;
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

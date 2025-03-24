import Cookies from "js-cookie";

export const setCookie = (
  name: string,
  value: string,
  options?: Cookies.CookieAttributes
) => {
  Cookies.set(name, value, {
    expires: 12 / 24, //12 h
    sameSite: "strict",
    path: "/",
    ...options,
  });
};

export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

export const removeCookie = (name: string) => {
  Cookies.remove(name, { path: "/" });
};

export const clearAllCookies = (): void => {
  const cookies = document.cookie.split(";");

  cookies.forEach((cookie) => {
    const cookieName = cookie.split("=")[0].trim();
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  });
};

export function getLocalStorageData<T extends Record<any, any>>(key: string): T {
  const data = localStorage.getItem(key);

  try {
    return data ? JSON.parse(data) : {};
  } catch {
    return {} as T;
  }
}

export function setLocalStorageData<T>(key: string, object: T): void {
  localStorage.setItem(key, JSON.stringify(object));
}

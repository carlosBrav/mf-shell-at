
export function useStorage() {

  const getValue = (key: string) => {
    try {
      const item = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
      return item ? JSON.parse(item) : "";
    } catch (error) {
      return "";
    }
  }

  const setValue = (value: string, key: string) => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    getValue,
    setValue
  }

}
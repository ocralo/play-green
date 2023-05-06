export function setSessionStorage(key: string, value: any): void {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    throw new Error('Error to save in sessionStorage')
  }
}

export function getSessionStorage(key: string, initialValue: any): any {
  try {
    const value = window.sessionStorage.getItem(key)
    return value ? JSON.parse(value) : initialValue
  } catch (e) {
    return initialValue
  }
}

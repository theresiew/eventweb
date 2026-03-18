const STORAGE_KEY = 'registration'

export function loadRegistration() {
  const saved = localStorage.getItem(STORAGE_KEY)

  if (!saved) {
    return null
  }

  try {
    return JSON.parse(saved)
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

export function saveRegistration(registration) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registration))
}

export function clearRegistration() {
  localStorage.removeItem(STORAGE_KEY)
}

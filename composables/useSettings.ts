import type { Ref, EffectScope } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { Settings } from '../types/settings'

export const STORAGE_KEY_SETTINGS = 'arch-settings'

export function useSettings () {
  return useArchLocalStorage<Settings>(STORAGE_KEY_SETTINGS, getDefaultUserSettings)
}

interface UseUserLocalStorageCache {
  scope: EffectScope
  value: Ref<Record<string, any>>
}

export function useArchLocalStorage<T extends object> (key: string, initial: () => T): Ref<T> {
  if (process.server) { return shallowRef(initial()) }

  // @ts-expect-error bind value to the function
  const map: Map<string, UseUserLocalStorageCache> = useArchLocalStorage._ = useArchLocalStorage._ || new Map()

  if (!map.has(key)) {
    const scope = effectScope(true)
    const value = scope.run(() => {
      const all = useLocalStorage<Record<string, T>>(key, {}, { deep: true })
      return computed(() => {
        all.value = Object.assign(initial(), all.value || {})
        return all.value
      })
    })
    map.set(key, { scope, value: value! })
  }

  return map.get(key)!.value as Ref<T>
}

export function getDefaultUserSettings (): Settings {
  return {
    sidebar: {
      minimized: false
    },
    font: {
      size: '14px',
      color: 'var(--color-text)',
      family: 'monospace'
    }
  }
}

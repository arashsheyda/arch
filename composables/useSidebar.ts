export const useSidebar = () => {
  const settings = useSettings()

  const minimize = () => {
    settings.value.sidebar.minimized = !settings.value.sidebar.minimized
  }

  const minimized = computed(() => {
    return settings.value.sidebar.minimized
  })

  return {
    minimized,
    minimize,
  }
}

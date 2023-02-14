export const useScrollPosition = () => {
  const scrollPosition = ref(0)

  const getScrollPosition = () => (scrollPosition.value = window.scrollY)

  onMounted(() => window.addEventListener('scroll', getScrollPosition))

  onUnmounted(() => window.removeEventListener('scroll', getScrollPosition))

  return {
    scrollPosition
  }
}

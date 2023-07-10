import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export default defineNuxtPlugin(() => {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const isMobile = breakpoints.smaller('md')
  const isTouch = breakpoints.between('sm', 'lg')
  const isDesktop = breakpoints.greater('md')

  return {
    provide: {
      isMobile,
      isTouch,
      isDesktop,
    },
  }
})

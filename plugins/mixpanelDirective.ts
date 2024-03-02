import mixpanel from 'mixpanel-browser'
import type { IMixpanelDirective } from '@/interfaces/IMixpanel'

interface MixpanelDirectiveBinding {
  value: IMixpanelDirective;
}

const trackMixpanel = (data: IMixpanelDirective) => {
  const { id, name, payload } = data
  mixpanel.identify(`${id}`)
  mixpanel.track(name, payload)
  console.log(`===== Event tracked: ${name} =====`)
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('mixpanel', {
    mounted (el: HTMLElement, binding: MixpanelDirectiveBinding) {
      el.addEventListener('click', () => {
        trackMixpanel(binding.value)
      })
    }
  })
})

import mixpanel from 'mixpanel-browser'

// const { mixpanelToken } = useMode()

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  const token = runtimeConfig.public.MIXPANEL_TOKEN as string
  
  mixpanel.init(token, {
    debug: import.meta.env.DEV,
    loaded: function () {
      mixpanel.set_config({
        batch_flush_interval_ms: 1200,
        batch_request_timeout_ms: 1200,
        cross_subdomain_cookie: false,
        track_pageview: true
      })
    }
  })
})

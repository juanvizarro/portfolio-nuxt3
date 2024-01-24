export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'es',
  messages: {
    en: {
      welcome: 'Welcome',
      test: 'Test text'
    },
    es: {
      welcome: 'Bienvenido',
      test: 'Texto de prueba'
    }
  }
}))

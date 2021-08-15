import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
import en from './translations/en.json'
import es from './translations/es.json'

addMessages('en', en);
addMessages('es', es);

init({
	initialLocale: getLocaleFromNavigator(),
	fallbackLocale: 'en'
});

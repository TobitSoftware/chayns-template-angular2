import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {AppModule} from './app/app.module';

if (process.env.ENV === 'production') {
	enableProdMode();
}

window['chayns'].ready.then(() => {
	platformBrowserDynamic()
		.bootstrapModule(AppModule)
		.catch(err => {
			console.error('Bootstrap error: ', err);
		});
});

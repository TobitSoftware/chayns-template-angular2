import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import {AppModule} from './app/app.module';

if (process.env.ENV === 'production') {
	enableProdMode();
}

chayns.ready.then(() => {
	platformBrowser()
		.bootstrapModule(AppModule)
		.catch(err => {
			console.error('Bootstrap error: ', err);
		});
});

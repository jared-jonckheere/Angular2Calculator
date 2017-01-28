// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();
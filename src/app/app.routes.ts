import { Routes, UrlSegment } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { DescriptionComponent } from './pages/description/description.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
  },
  {
    matcher: (url) => {
      if (url.length === 1) {
        return {
          consumed: url,
          posParams: { infoPath: new UrlSegment(url[0].path, {}) },
        };
      } else if (url.length === 2) {
        return{
          consumed: url,
          posParams: { infoPath: new UrlSegment(url[1].path, {}) },
        }
      } else return null;
    },
    component: InformationPageComponent
  },
];

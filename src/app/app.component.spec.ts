import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { intialState } from './../../../../myfirstangularapp/src/app/store/reducers/item.reducer';
import {
  TestBed,
  tick,
  fakeAsync,
  flush,
  ComponentFixture,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutes } from './routes/routes';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Item } from './models/Item';
import { HeaderComponent } from './components/header/header.component';
import { material } from './material/material.imports';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import {
  MatMenuHarness,
  MatMenuItemHarness,
} from '@angular/material/menu/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore<{ items: [] }>;
  const initialState = { items: [] };
  let router: Router;
  let httpClient: HttpClient;
  let loader: HarnessLoader;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        HttpClientTestingModule,
        ...material,
        NoopAnimationsModule,
      ],
      declarations: [
        AppComponent,
        AddComponent,
        HomeComponent,
        HeaderComponent,
      ],
      providers: [provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    router = TestBed.inject(Router);
    httpClient = TestBed.inject(HttpClient);
    store = TestBed.inject(MockStore);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should route to add if clicked', async () => {
    const menuButton = await loader.getHarness(
      MatButtonHarness.with({ selector: "[data-testid='menu']" })
    );
    const menu = await loader.getHarness(MatMenuHarness);

    await menuButton.click();
    expect(await menu.isOpen()).toBeTruthy();
    const items = await menu.getItems();
    expect(items.length).toBe(2);
    await items[1].click();
    expect(router.url).toBe('/add');
    debugger;
  });
});

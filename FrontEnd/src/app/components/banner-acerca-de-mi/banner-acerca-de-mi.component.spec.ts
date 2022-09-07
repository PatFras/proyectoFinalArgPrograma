import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAcercaDeMiComponent } from './banner-acerca-de-mi.component';

describe('BannerAcercaDeMiComponent', () => {
  let component: BannerAcercaDeMiComponent;
  let fixture: ComponentFixture<BannerAcercaDeMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAcercaDeMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerAcercaDeMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

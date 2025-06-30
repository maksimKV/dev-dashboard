import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetsPage } from './snippets-page';

describe('SnippetsPage', () => {
  let component: SnippetsPage;
  let fixture: ComponentFixture<SnippetsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnippetsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnippetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

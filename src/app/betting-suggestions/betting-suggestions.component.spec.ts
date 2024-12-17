import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingSuggestionsComponent } from './betting-suggestions.component';

describe('BettingSuggestionsComponent', () => {
  let component: BettingSuggestionsComponent;
  let fixture: ComponentFixture<BettingSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingSuggestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BettingSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

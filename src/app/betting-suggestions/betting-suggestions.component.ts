import { Component, OnInit } from '@angular/core';
import { BettingService } from './../services/betting.service';

@Component({
  selector: 'app-betting-suggestions',
  templateUrl: './betting-suggestions.component.html',
  styleUrls: ['./betting-suggestions.component.scss']
})
export class BettingSuggestionsComponent implements OnInit {
  suggestions: any[] = [];

  constructor(private bettingService: BettingService) {}

  ngOnInit(): void {
    this.getBettingSuggestions();
  }

  getBettingSuggestions(): void {
    this.bettingService.getOdds().subscribe((data: any) => {
      this.suggestions = data;
      console.log(this.suggestions);
    });
  }
}

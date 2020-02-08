import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClientVillainService } from 'src/app/services/http-client-villain.service';
import { Villain } from 'src/app/classes/villain';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-villains',
  templateUrl: './list-villains.component.html',
  styleUrls: ['./list-villains.component.css']
})
export class ListVillainsComponent implements OnInit, OnDestroy {

  villains: Villain[] = [];
  villainSubscription: Subscription;

  constructor(private villainService: HttpClientVillainService,
              private router: Router) { }

  ngOnInit() {
    this.getVillains();
  }

  ngOnDestroy(): void {
    this.villainSubscription.unsubscribe();
  }

  getVillains() {
    this.villainSubscription = this.villainService.getVillains().subscribe(data => { 
      this.villains = data;
    });    
  }

  toCreateVillain() {
    this.router.navigateByUrl("/createvillain");
  }

}

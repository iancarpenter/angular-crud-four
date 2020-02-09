import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClientVillainService } from 'src/app/services/http-client-villain.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-villain',
  templateUrl: './update-villain.component.html',
  styleUrls: ['./update-villain.component.css']
})
export class UpdateVillainComponent implements OnInit, OnDestroy {

  updateVillainForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    episode: new FormControl('')
  });

  villainSubscription: Subscription;

  constructor(private villainService: HttpClientVillainService,
              private router: Router,
              private route: ActivatedRoute) { }
  
  
  ngOnInit() {    
    this.updateVillainForm.setValue({
      id: this.route.snapshot.queryParams['id'],
      name: this.route.snapshot.queryParams['name'],
      episode: this.route.snapshot.queryParams['episode'],
    });
  }

  ngOnDestroy(): void {
    if (this.villainSubscription) {
      this.villainSubscription.unsubscribe();
    }    
  }
  
  updateVillain() {

    if (this.updateVillainForm.valid) {      
      // get the id and convert to a number
      const idstr = this.updateVillainForm.get('id').value;
      const id = +idstr;

      const name = this.updateVillainForm.get('name').value;
      const episode = this.updateVillainForm.get('episode').value;
      
      const villain = { id, name, episode };

      this.villainSubscription = this.villainService.updateVillain(villain).subscribe();

      this.router.navigateByUrl("/");
    }
  }

}

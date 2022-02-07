import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  experience: any;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onChangeHandler(event: any){
    console.log(event.target.value);
    this.experience = event.target.value;
  }
  openVerticallyCentered(content: any, event: any) {
    this.modalService.open(content, { centered: true });
    event.preventDefault();
  }
}
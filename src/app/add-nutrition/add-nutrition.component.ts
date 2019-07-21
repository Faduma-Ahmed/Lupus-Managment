import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-nutrition',
  templateUrl: './add-nutrition.component.html',
  styleUrls: ['./add-nutrition.component.css']
})
export class AddNutritionComponent implements OnInit {

  data1:number;


  constructor() { }

  ngOnInit() { 
    
  }

  commentFC = new FormControl();
onCommentChange() {
  
  this.data1=  parseInt(this.commentFC.value); 
  console.log('TEST: '+ this.data1);
} 
 
 
}
 
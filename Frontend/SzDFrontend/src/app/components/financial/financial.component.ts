import { Component,Input, OnInit } from '@angular/core';
import { FinTableService } from 'src/app/services/financial-table.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {
  @Input() houseId = '';
  financial: any;

  constructor(private financialService: FinTableService) { }

  ngOnInit(): void {
    this.financialService.getFinOfHouseId(this.houseId).subscribe(
      (data)=>{
        this.financial = data;
      }, error =>{
        console.log("error: " + error);
      }
    )
  }

}

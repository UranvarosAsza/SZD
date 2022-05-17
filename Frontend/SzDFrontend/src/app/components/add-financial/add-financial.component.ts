import { Component, OnInit } from '@angular/core';
import { FinancialTable } from 'src/app/models/financial-table.model';
import { FinTableService } from 'src/app/services/financial-table.service';

@Component({
  selector: 'app-add-financial',
  templateUrl: './add-financial.component.html',
  styleUrls: ['./add-financial.component.css']
})
export class AddFinancialComponent implements OnInit {

  title = "";
  description = "";
  plan = 0;
  fact = 0;
  nextPlan = 0;
  house_id = 1;
  showFinancial = false;

  constructor(private financialService : FinTableService) { }

  ngOnInit(): void {
  }

  send() {
    const newFinancial = new FinancialTable(
      this.title,
      this.description,
      this.plan,
      this.fact,
      this.nextPlan,
      this.house_id);
      
    this.financialService.postFinTables(newFinancial).subscribe(
      (data) => {
        console.log(data);
      }, error => {
        console.log('error ', error)
      });
  }

  showhide() {
    if (this.showFinancial == true) {
      this.showFinancial = false;
    } else {
      this.showFinancial = true;
    }

  }
}

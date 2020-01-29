import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {drawChart, createPieChartConfig, createLineChartConfig} from "@pxblue/chartjs";
import * as PXBColors from '@pxblue/colors';


@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component {
	
	colors = [PXBColors.blue[500], PXBColors.blue[200], PXBColors.blue[200]];
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 }
      ];
    })
  );
  
   ngOnInit(): void {
	   
  }
  
  ngAfterViewInit(){
	  
	     const configLineChart = createLineChartConfig();
		  configLineChart.data.datasets[0].backgroundColor = ['red', 'blue', 'green'];
		  configLineChart.data.datasets[1].backgroundColor = ['red', 'blue', 'green'];
		  configLineChart.data.datasets[2].backgroundColor = ['red', 'blue', 'green'];
          drawChart(configLineChart, 'lineChart');
		  
	   const config = createPieChartConfig();
       config.data.datasets[0].backgroundColor = ['red', 'blue', 'green'];
       drawChart(config, 'pieChart');
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}

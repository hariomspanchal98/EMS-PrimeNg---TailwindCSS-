import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

private data = [
    { label: 'Apples', value: 30 },
    { label: 'Bananas', value: 20 },
    { label: 'Cherries', value: 50 }
  ];

  private svg: any;
  private width = 400;
  private height = 400;
  private radius = Math.min(this.width, this.height) / 2;

  constructor(private elRef: ElementRef ) { }

  ngOnInit(): void {
    console.log('dasahboard');
    this.createSvg();
    this.createChart();
  }

  private createSvg(): void {
    this.svg = d3.select(this.elRef.nativeElement.querySelector('svg'))
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.width / 2}, ${this.height / 2})`);
  }

  add(){
    console.log('button');
    this.data.push({label: `data${this.data.length}`, value: Math.round(Math.random()*100)});
    this.data.shift();
    // d3.select(this.elRef.nativeElement.querySelector('svg g')).selectAll('*').remove();
    this.createChart();
  }

  private createChart(): void {
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie<any>().value((d: any) => d.value);
    const dataReady = pie(this.data);

    const arc = d3.arc<any>()
      .innerRadius(0)
      .outerRadius(this.radius);

    // Draw slices
    this.svg
      .selectAll('slice')
      .data(dataReady)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: any) => color(i))
      .attr('stroke', 'white')
      .style('stroke-width', '2px');

    // Add labels
    this.svg
      .selectAll('label')
      .data(dataReady)
      .enter()
      .append('text')
      .text((d: any) => d.data.label)
      .attr('transform', (d: any) => `translate(${arc.centroid(d)})`)
      .style('text-anchor', 'middle')
      .style('font-size', 14);
  }
}

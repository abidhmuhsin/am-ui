import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'am-guagemeter',
  templateUrl: './am-guagemeter.component.html',
  styleUrls: ['./am-guagemeter.component.css']
})
export class AmGuagemeterComponent implements OnInit, OnChanges {

  @Input()
  total;
  @Input()
  color = '#1656df'; // '#1656df';, '#00c72e', '#f65555', '#FFA500', '#6744c3', '#229977', 'FF4500'];
  @Input()
  value;
  bigPercent;
  arcDetail;


  tooltipEnabled = false;
  toolTipStyle = { top: '0', left: '0', color: 'rgb(255, 71, 71)' }
  tootipText = "";


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //  console.log(changes)
    // if any input changes - no if needed
      this.setArcDetails();
  }


  setArcDetails() {
    let percent = (this.value / this.total) * 100;
    percent = Math.round(percent * 100) / 100; // 2 decimal places
    this.bigPercent = percent + '%';

    let offset = 75;
    const arcDetails = [];
    const maxPercent = 0.60;
    const arcDetail: any = {};
    arcDetail.relativePercent = maxPercent * percent;
    arcDetail.percent = percent;
    arcDetail.color = this.color;
    arcDetail.offset = offset;
    arcDetail.value = this.value;

    offset = offset - arcDetail.relativePercent;

    this.arcDetail = arcDetail;
  }



  showTooltip(event, arc) {
    this.tootipText = 'Reading Value: ' + arc.value;
    this.toolTipStyle.left = (event.pageX) + 'px';
    this.toolTipStyle.top = (event.pageY) + 'px';
    this.toolTipStyle.color = arc.color;
    this.tooltipEnabled = true;
  }

  hideToolTip() {
    this.tooltipEnabled = false;
  }

  toJSONString(obj) {
    return JSON.stringify(obj);
  }

}

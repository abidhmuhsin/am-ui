import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'am-partial-donut',
  templateUrl: './am-partial-donut.component.html',
  styleUrls: ['./am-partial-donut.component.css']
})
export class AmPartialDonutComponent implements OnInit {

  //@Input()
  bigPercent;// = 54.68;
  @Input()
  total;// = '12,800';
  @Input()
  colors = ['#1656df', '#00c72e', '#f65555', '#FFA500', '#6744c3', '#229977', 'FF4500'];
  @Input()
  values =[]; // = [25, 30, 10, 15, 5, 9];
  arcDetails;//= this.getArcDetails(this.values);


  constructor() { }

  ngOnInit() {
    this.bigPercent = this.values.length === 1? this.values[0] +'%':'';
    this.arcDetails = this.getArcDetails(this.values);
  }

  getArcDetails(values: number[]) {
    let offset = 75;
    let arcDetails = [];
    const maxPercent = 0.60;

    for (let i = 0; i < values.length; i++) {
      let arcDetail = {};
      arcDetail['relativePercent'] = maxPercent * values[i];
      arcDetail['percent'] = values[i];
      arcDetail['color'] = this.colors[i];
      arcDetail['offset'] = offset;

      offset = offset - arcDetail['relativePercent'];
      arcDetails.push(arcDetail)
    }
    return arcDetails;

  }
  tooltipEnabled = false;
  toolTipStyle = { top: '0', left: '0', color: 'rgb(255, 71, 71)' }
  tootipText = "";

  showTooltip(event, arc) {
    this.tootipText = arc.percent;
  //  + '-- '+ event.screenY +' '+ event.clientY +' '+ event.pageY +'-- '+ event.screenX +' '+ event.clientX +' '+ event.pageX;

    this.toolTipStyle.left = (event.pageX) + 'px';
    this.toolTipStyle.top = (event.pageY) + 'px';
    this.toolTipStyle.color = arc.color;
    //console.log(event, this.toolTipStyle);
    this.tooltipEnabled = true;
  }
  hideToolTip() {
    //console.log('hide');
    this.tooltipEnabled = false;
  }
  toJSONString(obj) {
    return JSON.stringify(obj);
  }
}
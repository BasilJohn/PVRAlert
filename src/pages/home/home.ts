import { Component ,ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainServiceProvider } from '../../providers/main-service/main-service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MainServiceProvider]
})
export class HomePage  {


  public webdata: any;
  public cinemasAnchorList: any;
  constructor(public navCtrl: NavController,public mainService:MainServiceProvider) {

    this.loadWebData();
  }

  //@ViewChild(this.webdata) inputData: ElementRef;

  
   getRequiredData()
  {
// var divCinemasList = document.createElement('divCinemasList');
//             divCinemasList.innerHTML = inputData;
//             var cinemasdiv = divCinemasList.querySelector('#qbc-div-cinema')
//             this.cinemasAnchorList = [];
//            let element = inputData.nativeElement
//             for (var i = 0; i < (cinemasdiv).find('a').length; i++) {
//                this.cinemasAnchorList.push({
//                     value: $(cinemasdiv).find('a')[i].getAttribute('onclick').replace('getAllCinemaData', '').replace(/[()]/g, '').split(',')[0].replace(/["']/g, ""),
//                     name: $(cinemasdiv).find('a')[i].getAttribute('onclick').replace('getAllCinemaData', '').replace(/[()]/g, '').split(',')[1].replace(/["']/g, "")
//                 });
//             }
  }

  loadWebData(){
    this.mainService.loadWebData()
    .then(data => {
      this.webdata = data;
     alert(data);
      this.getRequiredData();
      
    });
  }

 

}

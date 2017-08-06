import { Component ,ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainServiceProvider } from '../../providers/main-service/main-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MainServiceProvider]
})


export class HomePage  {

  public webdata: any;
  public cinemasAnchorList: any;
  public htmlTemplate: any;
  constructor(public navCtrl: NavController,public mainService:MainServiceProvider) {

    this.loadWebData();
  }

  @ViewChild("qbc-div-cinema",{read: ElementRef}) inputData: ElementRef;

     getRequiredData(inputData)
  {
          var divCinemasList = document.createElement('divCinemasList');
          divCinemasList.innerHTML = inputData;
           
          var cinemasdiv = divCinemasList.querySelector('#qbc-div-cinema')
          this.cinemasAnchorList = [];
          let element = cinemasdiv.querySelectorAll('a');
          //alert(element.length);
          for (var i = 0; i < element.length; i++) {
               this.cinemasAnchorList.push({
                   value: element[i].getAttribute('onclick').replace('getAllCinemaData', '').replace(/[()]/g, '').split(',')[0].replace(/["']/g, ""),
                    name: element[i].getAttribute('onclick').replace('getAllCinemaData', '').replace(/[()]/g, '').split(',')[1].replace(/["']/g, "")
               });
           }

           for (var i = 0; i < this.cinemasAnchorList.length; i++) {
             
            alert(this.cinemasAnchorList[i].value);
            alert(this.cinemasAnchorList[i].name);
           }
            //for (var i = 0; i < cinemasdiv; i++) {
               //this.cinemasAnchorList.push({
                 //  value: $(cinemasdiv).find('a')[i].getAttribute('onclick').replace('getAllCinemaData', '').replace(/[()]/g, '').split(',')[0].replace(/["']/g, ""),
                   // name: $(cinemasdiv).find('a')[i].getAttribute('onclick').replace('getAllCinemaData', '').replace(/[()]/g, '').split(',')[1].replace(/["']/g, "")
                //});
               //}
  }

  loadWebData(){
    this.mainService.loadWebData()
    .then(data => {
      this.webdata = data;
      this.getRequiredData(this.webdata);
      
    });
  }
 
}

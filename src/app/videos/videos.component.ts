import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})

export class VideosComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  alterarLink(posArray: number){
    const Links = ['https://www.youtube.com/embed/YX0y1FMlb8I', 'https://www.youtube.com/embed/EK2F8_jeJPY', 'https://www.youtube.com/embed/mMMqMk2buzs', 'https://www.youtube.com/embed/u4_8ophfP5c', 'https://www.youtube.com/embed/V7OuPzVGLzs', 'https://www.youtube.com/embed/tJBzKgh-qGM', 'https://www.youtube.com/embed/kSYY3kcKGZA', 'https://www.youtube.com/embed/OZ94Uyn-9As', 'https://www.youtube.com/embed/Xf2c1ugKcnU']
    $('#video_display').attr('src',`${Links[posArray]}`);
  }

  intervalId = window.setInterval(function(){
    $('#barraProgresso').width($('input[type="checkbox"]:checked').length * 11.11 + '%')
  }, 100);

}

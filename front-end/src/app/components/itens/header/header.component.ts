import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // ngOnInit(): void {
  // }


  ngOnInit() {
    (function ($) {
      $(document).ready(function () {

        $(document).on('click', '.open-menu', function () {
          if ($('.hamburger').hasClass('active')) {
            $('.hamburger').removeClass('active');
          } else {
            $('.hamburger').addClass('active');
          }
        });

        $(document).on('click', '.open-menu', function () {
          if ($('#menu').hasClass('active')) {
            $('#menu').removeClass('active');
          } else {
            $('#menu').addClass('active');
          }
        });

        $(document).on('click', '.close', function () {
          if ($('#menu').hasClass('active')) {
            $('#menu').removeClass('active');
          } else {
            $('#menu').addClass('active');
          }
        });

        $(document).on('click', '.close', function () {
          if ($('.hamburger').hasClass('active')) {
            $('.hamburger').removeClass('active');
          } else {
            $('.hamburger').addClass('active');
          }
        });

        $(document).on('click', '.open-menu', function () {
          if ($('body').hasClass('active')) {
            $('body').removeClass('active');
          } else {
            $('body').addClass('active');
          }
        });

        $(document).on('click', '.close', function () {
          if ($('body').hasClass('active')) {
            $('body').removeClass('active');
          } else {
            $('body').addClass('active');
          }
        });



      });
    })(jQuery);
  }
}
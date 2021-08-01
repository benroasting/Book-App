import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Cover',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Table of Contents',
      url: '/toc',
      icon: 'layers'
    },
    {
      title: 'Chapter 1',
      url: '/chapter1',
      icon: 'document'
    },
    {
      title: 'Chapter 2',
      url: '/chapter2',
      icon: 'document'
    },
    {
      title: 'Chapter 3',
      url: '/chapter3',
      icon: 'document'
    },
    {
      title: 'Chapter 4',
      url: '/chapter4',
      icon: 'document'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

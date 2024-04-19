import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'Leetcode';
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
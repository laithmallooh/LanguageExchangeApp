import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  http = inject(HttpClient);
  title = 'Language Exchange App';
  users: any;

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/users').subscribe( {
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
      complete: () => {
        console.log('User data fetch complete');
      }
    });
  }

}
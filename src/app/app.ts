import { Component, signal , OnInit, Signal, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IProduct, IResponse, RestaurntService } from './services/restaurnt-service';
import { Observable } from 'rxjs';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Card } from './card/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Header, Footer, Card, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private service = inject(RestaurntService);

  public products: IProduct[] | undefined = undefined;

  ngOnInit(): void {
    this.service.getProducts().subscribe({
      next: (data) => {
        this.products = data.data.products;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
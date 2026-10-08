import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  imports: [CommonModule],
  selector: 'app-produits',
  templateUrl: './produits.html',
})
export class Produits {
produits :Produit[] ;


constructor(private produitService: ProduitService ) {
this.produits = produitService.listeProduits();
}

ngonit(): void {
  
}

}
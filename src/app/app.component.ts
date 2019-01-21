import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public http: HttpClient) {}
  public title: String = '#ElTelefonitoGameJam Generator';
  public inicio: String = ''; introduccion: String = ''; descripcion: String = '';
  public cierre: String = ''; fin: String = '';
  public postDate: String = '';
  public fullPost = '';
  public TelefonitoJSON: any = {};

  ngOnInit() {
    this.getJSONData();
  }

  getJSONData() {
    const url = 'https://raw.githubusercontent.com/baha-z/TelefonitoGJSON/master/telefonitoGJ.json';
    this.http.get(url).subscribe((data: any) => {
      this.TelefonitoJSON = data;
      this.randomPost();
    });

  }

  randomPost() {
    const randomPost = this.TelefonitoJSON.posts[Math.floor(Math.random() * this.TelefonitoJSON.posts.length)];
    this.postDate = randomPost.date;
    this.fullPost = randomPost.post;
    document.getElementById('telefonito').innerHTML = this.fullPost;
  }

  newPost() {
    this.postDate = '';
    this.generateContent();
    this.fullPost = this.inicio.toString() + this.introduccion + this.descripcion + this.cierre +  this.fin;
    document.getElementById('telefonito').innerHTML = this.fullPost;
  }

  generateContent() {
      const randomTelefonitos = [];
      const postStart = [];
      const postIntroduction = [];
      const postDescription = [];
      const postClosing = [];
      const postEnd = [];

      // selecciona 20 posts al azar, reemplazamos puntos por comas para estandarizar el formato
      for (let index = 0; index < 20; index++) {
        const randomvalue = Math.floor(Math.random() * this.TelefonitoJSON.posts.length);
        const randompost = this.TelefonitoJSON.posts[Math.floor(randomvalue)].post.replace(/\./g, ',');
        randomTelefonitos.push(randompost);
      }

      // cada post, se va a dividir por comas
      randomTelefonitos.forEach(post => {
        const postChunk = post.split(',');
        postStart.push(postChunk.shift());
        if (postChunk.length > 5) {
            postIntroduction.push(postChunk.shift());
        }
        postEnd.push(postChunk.pop());
        if (postChunk.length > 5) {
            postClosing.push(postChunk.pop());
        }
        postDescription.push(...postChunk);
      });
      this.formPhrase(postStart, postIntroduction, postDescription, postClosing, postEnd);
  }

  formPhrase(start: any , introduction: any, description: any, closing: any, end: any) {
    // para obtener la enriquecedora gama de signos de puntuacion sin la que un post del telefonito no esta completo
    const puntuaciones = [',', '.', '..', '...', '....'];
    this.inicio = start[Math.floor(Math.random() * start.length)] + puntuaciones[Math.floor(Math.random() * puntuaciones.length)];
    this.introduccion = introduction [Math.floor(Math.random() * introduction.length)] +
                        puntuaciones[Math.floor(Math.random() * puntuaciones.length)];
    // descripcion toma tres frases distintas no vacias
    let descripcion1 = description[Math.floor(Math.random() * description.length)];
        while (descripcion1 === '') {
            descripcion1 = description[Math.floor(Math.random() * description.length)];
    }
    let descripcion2 = description[Math.floor(Math.random() * description.length)];
        while (descripcion2 === '' || (descripcion2 === descripcion1)) {
            descripcion2 = description[Math.floor(Math.random() * description.length)];
    }
    let descripcion3 = description[Math.floor(Math.random() * description.length)];
        while (descripcion3 === '' || (descripcion3 === descripcion1) || (descripcion3 === descripcion2)) {
            descripcion3 = description[Math.floor(Math.random() * description.length)];
    }
    this.descripcion = descripcion1 + puntuaciones[Math.floor(Math.random() *
                      puntuaciones.length)] + descripcion2 +
                      puntuaciones[Math.floor(Math.random() *
                      puntuaciones.length)] + descripcion3;
    this.cierre = closing[Math.floor(Math.random() * closing.length)];
    // final de la frase
    this.fin = end[Math.floor(Math.random() * end.length)]
    while (this.fin === '') {
        this.fin = end[Math.floor(Math.random() * end.length)];
    }
    this.fin = puntuaciones[Math.floor(Math.random() * puntuaciones.length)] + ' ' +
              (this.fin.charAt(1).toUpperCase()) + (this.fin.substr(2));
  }

  copyMessage() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.fullPost;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}



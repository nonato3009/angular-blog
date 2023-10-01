import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://criticalhits.com.br/wp-content/uploads/2019/10/tony-stark.webp"
  contentTitle: string = "NOTÍCIA IMPORTANTE"
  contentDescription: string = "O mundo acabou de concordar com o descanso mundial dominical, mas para os adventistas é chamado de decreto dominical."
  private id: string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:string | null ){
    const result = dataFake.filter(article => article.id == id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
    }
  }

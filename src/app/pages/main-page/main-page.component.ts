import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DndService } from '../../services/dnd-api.service';
import { CardComponent } from '../../components/card/card.component';
import { SectionsEnum } from '../../enums/api-enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  sections: string[] = [];
  sectionsEnum = SectionsEnum
  sectionsEndpoints: any;

  constructor(private dndApi: DndService,private router:Router) {
    this.dndApi.getSections().subscribe((sections) => {
      this.sectionsEndpoints = sections;
      this.sections = Object.keys(sections);
      console.log(this.sections);
    });
  }
  
  seeInfo(route:string) {
    this.router.navigate([route])
  }
  
  formatSections(section:string){
   return section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  }
  
  ngOnInit(): void {}
}

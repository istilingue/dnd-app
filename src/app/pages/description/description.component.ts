import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DndService } from '../../services/dnd-api.service';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent { 

  @Input() description!: string
  
  constructor(private dndService:DndService){
    console.log('funcionou')
  }
  ngOnInit(): void {
      this.dndService.getInformationDescription(this.description).subscribe(data=>{
        console.log(data)
      })
  } 

}

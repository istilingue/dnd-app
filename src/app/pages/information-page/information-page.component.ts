import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DndService } from '../../services/dnd-api.service';

@Component({
  selector: 'app-information-page',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CardComponent],
  templateUrl: './information-page.component.html',
  styleUrl: './information-page.component.scss',
})
export class InformationPageComponent implements OnInit {
  back() {
    this.router.navigate([''])
  }
  @Input() infoPath!: string;
  info!: any;
  description!: Object;
  constructor(private dndService: DndService, private router: Router) {}
  ngOnInit(): void {
    console.log(this.infoPath);
    this.dndService.getSectionInfo(this.infoPath).subscribe((data) => {
      this.info = data;
    });
  }

  getDescription(path: any) {
    let route = path.split('/').pop();
    this.router.navigate([`${this.infoPath}/${route}`]);
    console.log(this.infoPath);
    this.dndService.getInformationDescription(path).subscribe({
      next: (data) => {
        this.description = data;
      },
      error: (err) => {
        this.router.navigate([`${this.infoPath}`]);
      },
    });
  }
}

import { Component, Input } from '@angular/core';
import { Hero} from "../../hero";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input('master')  masterName = '';
  @Input() people!: Hero;
}

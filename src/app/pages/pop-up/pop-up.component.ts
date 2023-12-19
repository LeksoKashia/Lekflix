import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {

  @Input()  movies: any;
  @Input()  category: any;

  close(): void {

    const musicsDiv = document.getElementById('musics');
    if (musicsDiv) {
        musicsDiv.scrollTop = 0;
      }
    const container = document.getElementById('deleteEmployeeModal');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-dismiss', 'modal');

    container?.appendChild(button);
    button.click();
      

      }
}

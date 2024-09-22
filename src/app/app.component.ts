import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyloginComponent } from './components/mylogin/mylogin.component';
import { CtableComponent } from './components/ctable/ctable.component';
import { DefmenuComponent } from './components/defmenu/defmenu.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { TopheaderComponent } from './components/topheader/topheader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //nos imports fazer acrescimo do que se vai usar na aplicação
  imports: [RouterOutlet, MyloginComponent, CtableComponent, DefmenuComponent, MenubarComponent,SubmenuComponent,TopheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mine-proj';
}

import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContextMenuService } from 'src/app/services/context-menu.service';
import { Observable } from 'rxjs';
import { map, merge, tap } from 'rxjs/operators';
import { ActionContext, MenuPosition } from 'src/app/models/context-menu.models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { GenerateAction } from 'src/app/actions';
import { FactoryNode } from 'src/app/models/entity.models';
import { selectFactories } from 'src/app/selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  isShownContextMenu: Observable<boolean>;

  position: MenuPosition;

  @ViewChild('menuElement') menuElementRef: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private contextMenuService: ContextMenuService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.isShownContextMenu = this.contextMenuService.globalClick().pipe(
      map((event: Event) => {
        return this.elementRef.nativeElement.contains(event.target);
      }),
      merge(
        this.contextMenuService.onOpenMenu().pipe(
          tap((event: MouseEvent | null) => {
            if (event !== null) {
              this.position = {
                xCoordinate: event.clientX,
                yCoordinate: event.clientY,
              };
            }
          }),
          map((event) => Boolean(event)),
        ),
      ),
      map((isOpenedMenu: boolean) => isOpenedMenu),
    );
  }

  generateClicked($event) {
    this.contextMenuService.onMenuItemClick();
    this.store.dispatch(new GenerateAction(ActionContext.ROOT));
  }
}

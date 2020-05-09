import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuPosition } from 'src/app/models/menu.models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app.state';
import { GenerateAction, RemoveAction } from 'src/app/actions/tree.action';
import { selectIsMenuOpened, selectMenuContext, selectMenuPosition } from 'src/app/selectors/menu.selectors';
import { CloseAction } from 'src/app/actions/menu.action';
import { FactoryNode, GenerateTreePayload } from 'src/app/models/tree.models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit, OnDestroy {
  isShownContextMenu$: Observable<boolean>;
  position$: Observable<MenuPosition>;
  isRootContext: Observable<boolean>;

  globalClickSubscription$: Subscription;

  @ViewChild('menuElement') menuElementRef: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private contextMenuService: MenuService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.isShownContextMenu$ = this.store.select(selectIsMenuOpened);

    this.globalClickSubscription$ = this.contextMenuService.globalClick().subscribe((event: Event) => {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.store.dispatch(new CloseAction());
      }
    });

    this.position$ = this.store.select(selectMenuPosition).pipe(shareReplay(1));

    this.isRootContext = this.store.select(selectMenuContext).pipe(
      map((contextNodeId: FactoryNode) => contextNodeId === null),
      shareReplay(1),
    );
  }

  ngOnDestroy() {
    this.globalClickSubscription$.unsubscribe();
  }

  generateClicked($event: GenerateTreePayload) {
    this.store.dispatch(new GenerateAction($event));
    this.store.dispatch(new CloseAction());
  }

  removeClicked() {
    this.store.dispatch(new RemoveAction());
    this.store.dispatch(new CloseAction());
  }
}

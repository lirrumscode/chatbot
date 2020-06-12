import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatbootPage } from './chatboot.page';

describe('ChatbootPage', () => {
  let component: ChatbootPage;
  let fixture: ComponentFixture<ChatbootPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbootPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatbootPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

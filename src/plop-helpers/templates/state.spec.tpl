import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { {{pascalCase name}}State } from './{{dashCase name}}.state';
import { {{pascalCase name}}Action } from './{{dashCase name}}.actions';

describe('{{pascalCase name}} actions', () => {
  let store: Store;

  beforeEach(waitForAsync () => {
    void TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([{{pascalCase name}}State])]
    }).compileComponents();
    store = TestBed.inject(Store);
  }));

  it('should create', () => {
    expect(store).toBeTruthy();
  });

  it('should create an action and add an item', () => {
    store.dispatch(new {{pascalCase name}}Action('item-1'));
    store.select(state => state.{{camelCase name}}.items).subscribe((items: string[]) => {
      expect(items).toEqual(jasmine.objectContaining([ 'item-1' ]));
    });
  });

});

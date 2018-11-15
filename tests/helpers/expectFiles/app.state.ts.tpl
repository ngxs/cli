import { State, Action, StateContext } from '@ngxs/store';
import { AppAction } from './app.actions';

export class AppStateModel {
  public items: string[];
}

const defaults = {
  items: []
};

@State<AppStateModel>({
  name: 'app',
  defaults
})
export class AppState {
  @Action(AppAction)
  add({ getState, setState }: StateContext<AppStateModel>, { payload }: AppAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}

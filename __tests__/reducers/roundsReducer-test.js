import RoundsReducer from '../../js/reducers/roundsReducer';
import { TOGGLE_PLAYER } from '../../js/constants';

const myInitialState = {
   player: 1, 
};

describe('Rounds reducer test', () => {
    it('update the current player from 0 to 1', () => {
        const state = RoundsReducer(myInitialState, { type: TOGGLE_PLAYER });
        expect(state).toEqual({ player: 1 });
    });
    it('update the current player from 1 to 0', () => {
        const state = RoundsReducer({ player: 1 }, { type: TOGGLE_PLAYER });
        expect(state).toEqual({ player: 0 });
    });
});

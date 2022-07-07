import ReducerRegistry from '../base/redux/ReducerRegistry';

import { UPDATE_LOCAL_TRACKS_DURATION } from './actionTypes';

/**
 * Initial state.
 */
const DEFAULT_STATE = {
    localTracksDuration: {
        audio: {
            startedTime: -1,
            value: 0
        },
        video: {
            camera: {
                startedTime: -1,
                value: 0
            },
            desktop: {
                startedTime: -1,
                value: 0
            }
        },
        conference: {
            startedTime: -1,
            value: 0
        }
    }
};

interface Value {
    startedTime: number,
    value: number
}

export interface IAnalyticsState {
    localTracksDuration: {
        audio: Value,
        video: {
            camera: Value,
            desktop: Value
        },
        conference: Value
    }
}

/**
 * Listen for actions which changes the state of the analytics feature.
 *
 * @param {Object} state - The Redux state of the feature features/analytics.
 * @param {Object} action - Action object.
 * @param {string} action.type - Type of action.
 * @returns {Object}
 */
ReducerRegistry.register('features/analytics', (state: IAnalyticsState = DEFAULT_STATE, action: any) => {
    switch (action.type) {
    case UPDATE_LOCAL_TRACKS_DURATION:
        return {
            ...state,
            localTracksDuration: action.localTracksDuration
        };
    default:
        return state;
    }
});

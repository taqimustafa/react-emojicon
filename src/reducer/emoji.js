const initialState = {
  activeEmoji: null
};

export default function emojiReducer(state = initialState, action) {
  switch (action.type) {
    case 'ACTIVE_EMOJI': {
      return {
        ...state,
        activeEmoji: action.payload.emojiKey,
      };
    }
    default:
      return state;
  }
}
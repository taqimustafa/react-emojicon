const initialState = {
  activeEmoji: null
};

export default function emojiReducer(state = initialState, action) {
  switch (action.type) {
    case 'ACTIVE_EMOJI': {
      console.log(action.payload.emojiKey);
      return {
        ...state,
        activeEmoji: action.payload.emojiKey,
      };
    }
    default:
      return state;
  }
}
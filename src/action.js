export function activeEmoji(value) {
  return {
    type: 'ACTIVE_EMOJI',
    payload: {
      emojiKey: value,
    },
  };
}
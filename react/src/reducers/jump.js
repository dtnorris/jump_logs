import {
  SAVE_JUMP_REQUEST,
  SAVE_JUMP_REQUEST_SUCCESS,
  SAVE_JUMP_REQUEST_FAILURE
} from '../actions/saveJump';

let isSaving = (state = false, { type }) => {
  switch (type) {
    case SAVE_JUMP_REQUEST:
      return true
    case SAVE_JUMP_REQUEST_SUCCESS:
      return false
    case SAVE_JUMP_REQUEST_FAILURE:
      return false
    default:
      return state;
  }
};

export default isSaving;

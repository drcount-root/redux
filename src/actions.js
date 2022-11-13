import * as actions from "./actionTypes";

export const bugAdded = (desc) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: desc,
  },
});

export const bugRemoved = (id_num) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: id_num,
  },
});

export const bugResolved = (id_num) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id: id_num,
  },
});

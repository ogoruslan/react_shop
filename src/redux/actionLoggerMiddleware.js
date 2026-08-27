export const actionLoggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (import.meta.env.DEV) {
    console.groupCollapsed(`[Redux] ${action.type}`);
    console.log("Action:", action);
    console.log("Next state:", store.getState());
    console.groupEnd();
  }

  return result;
};

export const Breakpoints = {
  sm: 576,
  lg: 898,
  xl: 1025,
};

const createMatcher = (size) => {
  return `(min-width: ${Breakpoints[size]}px)`;
};

export const matchBreakpoint = (size) => {
  if (typeof matchMedia !== "function") return false;
  return matchMedia(createMatcher(size)).matches;
};

export const mq = (size) => `@media ${createMatcher(size)}`;
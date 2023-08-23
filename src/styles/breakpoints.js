const breakpoints = [
  {
    sm: "576",
    md: "768",
    lg: "992",
    xl: "1200",
  },
];

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const makeComponent = (
  sep: string,
  ...values: (string | undefined)[]
): string => values.flatMap((v) => (v ? [v] : [])).join(sep);

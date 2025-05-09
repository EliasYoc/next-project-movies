export const arrayToMatrix = <T>(list: T[], columns: number) => {
  const matrix: T[][] = [];
  for (let i = 0; i < list.length; i += columns) {
    matrix.push(list.slice(i, i + columns));
  }

  return matrix;
};

export const searchParamsToString = <T extends object>(
  searchParams: T
): string => {
  const searchParamTuple = Object.entries(searchParams).filter(
    ([, value]) => value
  );
  const stringSearchParams = new URLSearchParams(searchParamTuple).toString();
  return stringSearchParams && `?${stringSearchParams}`;
};

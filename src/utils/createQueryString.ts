type Params = {
  [key: string]: string;
};

export const createQueryString = (params: Params) => {
  const newParams: string[] = [];
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      newParams.push(`${key}=${value}`);
    }
  }

  return newParams.length > 0 ? `?${newParams.join('&')}` : '';
};

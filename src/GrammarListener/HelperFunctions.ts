export const isStringNullOrWhitespace = (str: string): boolean => !str || /\S/.test(str);

export const stringToArray = (str: string): string[] => str.split('');

export const stringArrayToString = (arr: string[]): string => arr.join('');
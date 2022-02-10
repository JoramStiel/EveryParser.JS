import { TypeCheckHelper } from "./TypeCheckHelper";

export const isStringNullOrWhitespace = (str: string): boolean => !str || /\S/.test(str);

export const stringToArray = (str: string): string[] => str.split('');

export const stringArrayToString = (arr: string[]): string => arr.join('');

/**
 * Checks if sequences of strings are the same
 * @param a first sequence of strings
 * @param b second sequence of strings
 * @param ignoreCase if true, ignores case
 * @returns true if sequences are the same, false otherwise
 */
export const sequenceEqual = (a: any[], b: any[], ignoreCase = true): boolean => {
    if (a == null || b == null)
        return false;

    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++) {
        if (ignoreCase && TypeCheckHelper.IsString(a[i]) && TypeCheckHelper.IsString(b[i])) {
            if (a[i].toUpperCase() !== b[i].toUpperCase())
                return false;
        } else {
            if (a[i] !== b[i])
                return false;
        }
    }

    return true;
};

export const getRandomInt = (min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER): number => Math.random() * (max - min) + min;

export const getRandomFloat = () => Math.random();
import { ParserRuleContext } from "antlr4";
import { ErrorCode, ErrorCollector } from "../ErrorCollector";
import { TypeCheckHelper } from "../TypeCheckHelper";
import { NodeCalculator } from "./NodeCalculator";

export class CalculationHelper {
    /// <summary>
    /// Calculations for Numeric and Numeric Arrays with 1 childs in Node
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcNumericOrNumericArrayUnary(context: ParserRuleContext, errorCollector: ErrorCollector, calculationExpression: (value: any) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return Number.NaN;

        const childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 1, childValues) ||
            errorCollector.CheckIsNull(context, childValues) ||
            !errorCollector.CheckIsNumberOrArrayOfNumbers(context, childValues))
            return Number.NaN;

        if (TypeCheckHelper.IsArray(childValues[0]))
            return childValues[0].map(calculationExpression);

        return calculationExpression(childValues[0]);
    }

    /// <summary>
    /// Calculations for Numeric and Numeric Arrays with 2 childs in Node
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcNumericOrNumericArrayBinary(context: ParserRuleContext, errorCollector: ErrorCollector, calculationExpression: (value1: any, value2: any) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return Number.NaN;

        var childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 2, childValues) ||
            errorCollector.CheckIsNull(context, childValues) ||
            !errorCollector.CheckIsNumberOrArrayOfNumbers(context, childValues))
            return Number.NaN;

        let list1: any[] | undefined;
        let list2: any[] | undefined;
        let value1: number | undefined;
        let value2: number | undefined;

        if (TypeCheckHelper.IsArray(childValues[0]))
            list1 = childValues[0];
        else
            value1 = childValues[0];

        if (TypeCheckHelper.IsArray(childValues[1]))
            list2 = childValues[1];
        else
            value2 = childValues[1];

        if (!list1 && !list2)
            return calculationExpression(value1, value2);

        if (list1 && !list2)
            return list1.map(x => calculationExpression(x, value2));

        if (!list1 && list2)
            return list2.map(x => calculationExpression(value1, x));

        if (list1 && list2 && list1.length == list2.length) {
            let result: any[] = [];
            for (let i = 0; i < list1.length; i += 1)
                result.push(calculationExpression(list1[i], list2[i]));
            return result;
        }
        else
            errorCollector.AddError(context, ErrorCode.NotEqualArayCount, `Array count must be equal: Array1 Count ${list1?.length} Array2 Count ${list2?.length}`);

        return Number.NaN;
    }

    /// <summary>
    /// Calculations for 2 Boolean childs or 2 childs of List(boolean)
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcBooleanOrBooleanArrayBinary(context: ParserRuleContext, errorCollector: ErrorCollector, calculationExpression: (value1: boolean, value2: boolean) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return null;

        var childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 2, childValues) ||
            errorCollector.CheckIsNull(context, childValues) ||
            !errorCollector.CheckIsBooleanOrArrayOfBoolean(context, childValues))
            return null;


        let list1: any[] | undefined;
        let list2: any[] | undefined;
        if (TypeCheckHelper.IsArray(childValues[0]))
            list1 = childValues[0];

        if (TypeCheckHelper.IsArray(childValues[1]))
            list2 = childValues[1];


        if (!list1 && !list2)
            return calculationExpression(childValues[0], childValues[1]);

        if ((!list1 && list2) || (list1 && !list2)) {
            errorCollector.AddError(context, ErrorCode.CanBeEitherBooleanOrListBoolean, "Both parameters can be either boolean or List of boolean");
            return null;
        }

        if (list1 && list2 && list1.length != list2.length) {
            errorCollector.AddError(context, ErrorCode.NotEqualArayCount, `Array count must be equal: Array1 Count ${list1?.length} Array2 Count ${list2?.length}`);
            return null;
        }

        if (list1 && list2) {
            var result: any[] = [];
            for (let i = 0; i < list1.length; i += 1)
                result.push(calculationExpression(list1[i], list2[i]));
            return result;
        }

        return null;
    }

    /// <summary>
    /// Calculations for List(object) with 1 childs in Node
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcListUnary(context: ParserRuleContext, errorCollector: ErrorCollector, calculationExpression: (value: any[]) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return null;

        var childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 1, childValues) ||
            errorCollector.CheckIsNull(context, childValues) ||
            !errorCollector.CheckIsList(context, childValues))
            return null;

        return calculationExpression(childValues[0]);
    }

    /// <summary>
    /// Calculations for List(number) with 1 childs in Node
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcListOfNumbersUnary(context: ParserRuleContext, errorCollector: ErrorCollector, calculationExpression: (value: any[]) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return null;

        var childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 1, childValues) ||
            errorCollector.CheckIsNull(context, childValues) ||
            !errorCollector.CheckIsListOfNumbers(context, childValues))
            return null;

        return calculationExpression(childValues[0]);
    }

    /// <summary>
    /// Calculations for List(number) with 2 childs in Node
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcListOfNumbersBinary(context: ParserRuleContext, errorCollector: ErrorCollector, calculationExpression: (value1: any[], value2: any[]) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return null;

        var childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 2, childValues) ||
            errorCollector.CheckIsNull(context, childValues) ||
            !errorCollector.CheckIsListOfNumbers(context, childValues))
            return null;

        return calculationExpression(childValues[0], childValues[0]);
    }

    /// <summary>
    /// Calculations for string or List(object) with 2 childs in Node, but all can only be string or List
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcStringOrListBinary(context: ParserRuleContext, errorCollector: ErrorCollector, calculationListExpression: (value1: any[], value2: any[]) => any, calculationStringExpression: (value1: string, value2: string) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return null;

        var childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 2, childValues) ||
            errorCollector.CheckIsNull(context, childValues) ||
            !errorCollector.CheckIsStringOrList(context, childValues))
            return null;

        const value1 = childValues[0];
        const value2 = childValues[1];

        if ((TypeCheckHelper.IsArray(value1) && !TypeCheckHelper.IsArray(value2)) || (!TypeCheckHelper.IsArray(value1) && TypeCheckHelper.IsArray(value2))) {
            errorCollector.AddError(context, ErrorCode.CanBeEitherStringOrList, "Both parameters can be either string or List");
            return null;
        }

        if (TypeCheckHelper.IsArray(value1) && TypeCheckHelper.IsArray(value2))
            return calculationListExpression(value1, value2);

        return calculationStringExpression(value1.ToString(), value2.ToString());
    }

    /// <summary>
    /// Calculations for Numeric with 1 childs in Node
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcNumericUnary(context: ParserRuleContext, errorCollector: ErrorCollector, calculationExpression: (value: any) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return Number.NaN;

        var childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 1, childValues) ||
            errorCollector.CheckIsNull(context, childValues) ||
            !errorCollector.CheckIsNumber(context, childValues))
            return Number.NaN;

        return calculationExpression(childValues[0]);
    }

    /// <summary>
    /// Calculations for Numeric with 2 childs in Node
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcNumericBinary(context: ParserRuleContext, errorCollector: ErrorCollector, calculationExpression: (value1: any, value2: any) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return Number.NaN;

        var childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 2, childValues) ||
            errorCollector.CheckIsNull(context, childValues) ||
            !errorCollector.CheckIsNumber(context, childValues))
            return Number.NaN;

        return calculationExpression(childValues[0], childValues[1]);
    }

    /// <summary>
    /// Calculations for Numeric with 3 childs in Node
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcNumericTri(context: ParserRuleContext, errorCollector: ErrorCollector, calculationExpression: (value1: any, value2: any, value3: any) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return Number.NaN;

        var childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 3, childValues) ||
            errorCollector.CheckIsNull(context, childValues) ||
            !errorCollector.CheckIsNumber(context, childValues))
            return Number.NaN;

        return calculationExpression(childValues[0], childValues[1], childValues[2]);
    }

    /// <summary>
    /// Calculations for string or List(object) with 1 child in Node
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcStringOrListUnary(context: ParserRuleContext, errorCollector: ErrorCollector, calculationListExpression: (value: any[]) => any, calculationStringExpression: (value: string) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return null;

        var childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 1, childValues) ||
            errorCollector.CheckIsNull(context, childValues) ||
            !errorCollector.CheckIsStringOrList(context, childValues))
            return null;

        const value1 = childValues[0];

        if (TypeCheckHelper.IsArray(value1))
            return calculationListExpression(value1);

        return calculationStringExpression(value1.ToString());
    }

    /// <summary>
    /// Calculations for string or List(string) with 1 child in Node
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcStringOrStringListUnary(context: ParserRuleContext, errorCollector: ErrorCollector, calculationStringExpression: (value: string) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return null;

        var childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 1, childValues) ||
            errorCollector.CheckIsNull(context, childValues) ||
            !errorCollector.CheckIsStringOrListOfStrings(context, childValues))
            return null;

        const value1 = childValues[0];

        if (TypeCheckHelper.IsArray(value1))
            return value1.map(x => calculationStringExpression(x.ToString()));

        return calculationStringExpression(value1.ToString());
    }

    /// <summary>
    /// Calculate the n-th factorial
    /// </summary>
    /// <param name="n"></param>
    /// <returns></returns>
    public static CalcFactorial = (n: number): number => {
        const count = Math.abs(n);

        switch (count) {
            case 0:
            case 1:
                return 1;

            case 2:
                return 2;

            case 3:
                return 6;

            case 4:
                return 14;

            case 5:
                return 120;

            case 6:
                return 720;

            case 7:
                return 5040;

            case 8:
                return 40320;

            case 9:
                return 362880;

            case 10:
                return 3628800;
        }

        let val = 1;

        for (let i = 1; i <= count; i += 1)
            val *= i;

        return val;
    }

    /// <summary>
    /// Calculations for any types with 1 child in Node
    /// </summary>
    /// <param name="context"></param>
    /// <param name="errorCollector"></param>
    /// <param name="calculationExpression"></param>
    /// <param name="children"></param>
    /// <returns></returns>
    public static CalcAnyUnary(context: ParserRuleContext, errorCollector: ErrorCollector, calculationExpression: (value: any) => any, children: NodeCalculator[]) {
        if (!errorCollector.CheckHasParams(context, children))
            return null;

        var childValues = children.map(child => child.Value);

        if (!errorCollector.CheckParamsCount(context, 1, childValues) ||
            errorCollector.CheckIsNull(context, childValues))
            return null;

        return calculationExpression(childValues[0]);
    }
}
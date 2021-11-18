import { ParserRuleContext } from "antlr4";
import { ArraySlicingType, ArraySlicingTypeExtension } from "../ArraySlicingType";
import { ErrorCode, ErrorCollector } from "../ErrorCollector";
import { EveryParserType, EveryParserTypeHelper } from "./EveryParserType";
import { TypeNode } from "./TypeNode";

export class EveryGrammarTypeListenerHelper {
    public static CheckNumberOrArrayOfNumbersUnary(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, resultType = EveryParserType.Number, resultArrayType = EveryParserType.ArrayOfNumber, resultEmptyArray = EveryParserType.EmptyArray) {
        if (!errorCollector.CheckParamsCount(context, 1, node.Children))
            return node.Parent;

        const parameterType = node.Children[0].ValueType;

        if (EveryParserTypeHelper.IsNumber(parameterType))
            node.ValueType = resultType;
        if (EveryParserTypeHelper.IsNumberArray(parameterType))
            node.ValueType = resultArrayType;
        if (EveryParserTypeHelper.IsNumberOrArrayOfNumbers(parameterType))
            node.ValueType = resultType | resultArrayType;
        if (EveryParserTypeHelper.IsEmptyArray(parameterType))
            node.ValueType = resultEmptyArray;

        if (node.ValueType == EveryParserType.None)
            errorCollector.AddError(context, ErrorCode.IsNotNumberOrArrayOfNumbers, "Parameter is not a Number or an Array of Numbers");

        return node.Parent;
    }

    public static CheckNumberOrArrayOfNumbersBinary(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, singleTypeResult = EveryParserType.Number, arrayTypeResult = EveryParserType.ArrayOfNumber) {
        if (!errorCollector.CheckParamsCount(context, 2, node.Children))
            node.Parent;

        const parameterType1 = node.Children[0].ValueType;
        const parameterType2 = node.Children[1].ValueType;

        if (EveryParserTypeHelper.IsNumber(parameterType1) && EveryParserTypeHelper.IsNumber(parameterType2))
            node.ValueType = singleTypeResult;
        if ((EveryParserTypeHelper.IsNumber(parameterType1) && EveryParserTypeHelper.IsNumberArray(parameterType2)) ||
            EveryParserTypeHelper.IsNumberArray(parameterType1) && EveryParserTypeHelper.IsNumber(parameterType2) ||
            EveryParserTypeHelper.IsNumberArray(parameterType1) && EveryParserTypeHelper.IsNumberArray(parameterType2))
            node.ValueType = arrayTypeResult;
        if (EveryParserTypeHelper.IsNumberOrArrayOfNumbers(parameterType1) && EveryParserTypeHelper.IsNumberOrArrayOfNumbers(parameterType2))
            node.ValueType = singleTypeResult | arrayTypeResult;
        if (EveryParserTypeHelper.IsEmptyArray(parameterType1) && EveryParserTypeHelper.IsEmptyArray(parameterType2))
            node.ValueType = EveryParserType.EmptyArray;

        if (node.ValueType == EveryParserType.None)
            errorCollector.AddError(context, ErrorCode.IsNotNumberOrArrayOfNumbers, "Parameters are not Numbers or Arrays of Numbers");

        return node.Parent;
    }

    public static CheckListOfNumbersUnary(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector) {
        if (errorCollector.CheckParamsCount(context, 1, node.Children)) {
            if (!EveryParserTypeHelper.IsNumberArray(node.Children[0].ValueType))
                errorCollector.AddError(context, ErrorCode.IsNotNumberArray, "Parameter is not an Array of Numbers!");
            else
                node.ValueType = EveryParserType.Number;
        }

        return node.Parent;
    }

    public static CheckListOfNumbersBinary(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, resultType: EveryParserType) {
        if (errorCollector.CheckParamsCount(context, 2, node.Children)) {
            if (!EveryParserTypeHelper.IsNumberArray(node.Children[0].ValueType) || !EveryParserTypeHelper.IsNumberArray(node.Children[1].ValueType))
                errorCollector.AddError(context, ErrorCode.IsNotNumberArray, "One or all Parameters are not Array of Numbers!");
            else
                node.ValueType = resultType;
        }

        return node.Parent;
    }

    public static CheckNumericUnary(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, resultType: EveryParserType) {
        if (errorCollector.CheckParamsCount(context, 1, node.Children)) {
            if (!EveryParserTypeHelper.IsNumber(node.Children[0].ValueType))
                errorCollector.AddError(context, ErrorCode.IsNotNumber, "Parameter is not a Number!");
            else
                node.ValueType = resultType;
        }

        return node.Parent;
    }

    public static CheckNumericBinary(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, resultType: EveryParserType) {
        if (errorCollector.CheckParamsCount(context, 2, node.Children)) {
            if (!EveryParserTypeHelper.IsNumber(node.Children[0].ValueType) || !EveryParserTypeHelper.IsNumber(node.Children[1].ValueType))
                errorCollector.AddError(context, ErrorCode.IsNotNumber, "One or all Parameters are not Numbers!");
            else
                node.ValueType = resultType;
        }

        return node.Parent;
    }

    public static CheckNumericTri(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, resultType: EveryParserType) {
        if (errorCollector.CheckParamsCount(context, 3, node.Children)) {
            if (!EveryParserTypeHelper.IsNumber(node.Children[0].ValueType) || !EveryParserTypeHelper.IsNumber(node.Children[1].ValueType) || !EveryParserTypeHelper.IsNumber(node.Children[2].ValueType))
                errorCollector.AddError(context, ErrorCode.IsNotNumber, "One or all Parameters are not Numbers!");
            else
                node.ValueType = resultType;
        }

        return node.Parent;
    }

    public static CalcBooleanOrBooleanArrayBinary(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, resultType: EveryParserType, listResultType: EveryParserType) {
        if (errorCollector.CheckParamsCount(context, 2, node.Children)) {
            if (EveryParserTypeHelper.IsBoolean(node.Children[0].ValueType) && EveryParserTypeHelper.IsBoolean(node.Children[1].ValueType))
                node.ValueType = resultType;
            else if (EveryParserTypeHelper.IsBooleanArray(node.Children[0].ValueType) && EveryParserTypeHelper.IsBooleanArray(node.Children[1].ValueType))
                node.ValueType = listResultType;
            else
                errorCollector.AddError(context, ErrorCode.IsNotNumber, "One or all Parameters are not Boolean!");
        }

        return node.Parent;
    }

    public static CheckStringOrListUnary(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, stringResultType: EveryParserType, listResultType: EveryParserType) {
        if (errorCollector.CheckParamsCount(context, 1, node.Children)) {
            if (!EveryParserTypeHelper.IsString(node.Children[0].ValueType) && !EveryParserTypeHelper.IsArrayType(node.Children[0].ValueType))
                errorCollector.AddError(context, ErrorCode.IsNotNumber, "Parameter is not a string or an Array!");
            else if (EveryParserTypeHelper.IsString(node.Children[0].ValueType))
                node.ValueType = stringResultType;
            else if (EveryParserTypeHelper.IsArrayType(node.Children[0].ValueType))
                node.ValueType = EveryParserTypeHelper.IsArray(listResultType) ? node.Children[0].ValueType : listResultType;
        }

        return node.Parent;
    }

    public static CheckStringOrArrayOfStringsUnary(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, stringResultType: EveryParserType, listResultType: EveryParserType) {
        if (errorCollector.CheckParamsCount(context, 1, node.Children)) {
            if (!EveryParserTypeHelper.IsString(node.Children[0].ValueType) && !EveryParserTypeHelper.IsArrayType(node.Children[0].ValueType))
                errorCollector.AddError(context, ErrorCode.IsNotNumber, "Parameter is not a string or an Array of Strings!");
            else if (node.Children[0].ValueType == EveryParserType.String)
                node.ValueType = stringResultType;
            else if (EveryParserTypeHelper.IsStringArray(node.Children[0].ValueType))
                node.ValueType = listResultType;
        }

        return node.Parent;
    }

    public static CheckStringOrArrayOfStringsBinary(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, stringResultType: EveryParserType, listResultType: EveryParserType) {
        if (!errorCollector.CheckParamsCount(context, 2, node.Children))
            return node.Parent;

        const parameterType1 = node.Children[0].ValueType;
        const parameterType2 = node.Children[1].ValueType;

        if (EveryParserTypeHelper.IsString(parameterType1) && EveryParserTypeHelper.IsString(parameterType2))
            node.ValueType = stringResultType;
        if ((EveryParserTypeHelper.IsString(parameterType1) && EveryParserTypeHelper.IsStringArray(parameterType2)) ||
            EveryParserTypeHelper.IsStringArray(parameterType1) && EveryParserTypeHelper.IsString(parameterType2))
            node.ValueType = listResultType;
        if (EveryParserTypeHelper.IsStringOrArrayOfStrings(parameterType1) && EveryParserTypeHelper.IsStringOrArrayOfStrings(parameterType2))
            node.ValueType = stringResultType | listResultType;
        if (EveryParserTypeHelper.IsEmptyArray(parameterType1) && EveryParserTypeHelper.IsEmptyArray(parameterType2))
            node.ValueType = stringResultType;

        if (node.ValueType == EveryParserType.None)
            errorCollector.AddError(context, ErrorCode.IsNotStringOrArrayOfStrings, "Parameters are not Strings or Arrays of Strings");

        return node.Parent;
    }

    public static CheckAnyUnary(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, resultType: EveryParserType) {
        if (errorCollector.CheckParamsCount(context, 1, node.Children)) {
            if (node.Children[0].ValueType == EveryParserType.None)
                errorCollector.AddError(context, ErrorCode.IsNotNumber, "Parameter has no type!");
            else
                node.ValueType = resultType;
        }

        return node.Parent;
    }

    public static CheckAnyBinary(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, resultType: EveryParserType) {
        if (errorCollector.CheckParamsCount(context, 2, node.Children)) {
            if (node.Children[0].ValueType == EveryParserType.None || node.Children[1].ValueType == EveryParserType.None)
                errorCollector.AddError(context, ErrorCode.IsNotNumber, "One or all Parameters has no type!");
            else
                node.ValueType = resultType;
        }

        return node.Parent;
    }

    public static CheckOnlyStringOrOnlyArraySameResult(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector) {
        if (errorCollector.CheckParamsCount(context, 2, node.Children)) {
            const type1 = node.Children[0].ValueType;
            const type2 = node.Children[1].ValueType;

            if ((!EveryParserTypeHelper.IsString(type1) && !EveryParserTypeHelper.IsString(type2)) &&
                (!EveryParserTypeHelper.IsArrayType(type1) && !EveryParserTypeHelper.IsArrayType(type2)))
                errorCollector.AddError(context, ErrorCode.IsNotNumberOrArrayOfNumbers, "Parameters are not both string or not both Arrays!");
            else
                node.ValueType = type1;
        }

        return node.Parent;
    }

    public static GetArrayType(children: TypeNode[]) {
        if (children == null || !children.length)
            return EveryParserType.EmptyArray;

        if (this.IsNumberArray(children))
            return EveryParserType.ArrayOfNumber;

        if (this.IsBooleanArray(children))
            return EveryParserType.ArrayOfBoolean;

        if (this.IsStringArray(children))
            return EveryParserType.ArrayOfString;

        if (this.IsDateTimeArray(children))
            return EveryParserType.ArrayOfDateTime;

        return EveryParserType.Array;
    }

    public static GetSingleTypeOfArrayType(type: EveryParserType) {
        switch (type) {
            case EveryParserType.Number:
                return EveryParserType.Number;

            case EveryParserType.Boolean:
                return EveryParserType.Boolean;

            case EveryParserType.String:
                return EveryParserType.String;

            case EveryParserType.DateTime:
                return EveryParserType.DateTime;

            case EveryParserType.ArrayOfNumber:
                return EveryParserType.Number;

            case EveryParserType.ArrayOfBoolean:
                return EveryParserType.Boolean;

            case EveryParserType.ArrayOfString:
                return EveryParserType.String;

            case EveryParserType.ArrayOfDateTime:
                return EveryParserType.DateTime;
        }

        return EveryParserType.None;
    }

    public static IsNumberArray = (children: TypeNode[]) => !children.find(x => x.ValueType != EveryParserType.Number);

    public static IsStringArray = (children: TypeNode[]) => !children.find(x => x.ValueType != EveryParserType.String);

    public static IsBooleanArray = (children: TypeNode[]) => !children.find(x => x.ValueType != EveryParserType.Boolean);

    public static IsDateTimeArray = (children: TypeNode[]) => !children.find(x => x.ValueType != EveryParserType.DateTime);

    /// <summary>
    /// Method to use in order to create the date value.
    /// Therefore the date methods are very similar, it's everything here inside one method
    /// </summary>
    /// <param name="context"></param>
    /// <param name="expectedDateParameters"></param>
    public static SetnodeForDateTimeValue(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, expectedDateParameters: number) {
        if (!errorCollector.CheckParamsCount(context, expectedDateParameters, node.Children)) {
            node.ValueType = EveryParserType.None;
            return node.Parent;
        }

        if (expectedDateParameters == 1) {
            const childType = node.Children[0].ValueType;
            if (EveryParserTypeHelper.IsString(childType))
                node.ValueType = EveryParserType.DateTime;
            else if (EveryParserTypeHelper.IsStringArray(childType))
                node.ValueType = EveryParserType.ArrayOfDateTime;
            else if (EveryParserTypeHelper.IsStringOrArrayOfStrings(childType))
                node.ValueType = EveryParserType.DateTime | EveryParserType.ArrayOfDateTime;
        }
        else {
            if (node.Children.find(v => !EveryParserTypeHelper.IsNumber(v.ValueType) &&
                !EveryParserTypeHelper.IsNumberArray(v.ValueType) &&
                !EveryParserTypeHelper.IsNumberOrArrayOfNumbers(v.ValueType))) {
                errorCollector.AddError(context, ErrorCode.IsNotNumberOrArrayOfNumbers, "One or more values are not number or array of numbers");
                node.ValueType = EveryParserType.None;
                return node.Parent;
            }

            if (node.Children.find(v => EveryParserTypeHelper.IsNumberArray(v.ValueType)))
                node.ValueType = EveryParserType.ArrayOfDateTime;
            else if (node.Children.find(v => EveryParserTypeHelper.IsNumberOrArrayOfNumbers(v.ValueType)))
                node.ValueType = EveryParserType.DateTime | EveryParserType.ArrayOfDateTime;
            else
                node.ValueType = EveryParserType.DateTime;
        }

        return node.Parent;
    }

    public static ArraySlicing(context: ParserRuleContext, node: TypeNode, errorCollector: ErrorCollector, arraySlicingType: ArraySlicingType) {
        if (!errorCollector.CheckParamsCount(context, ArraySlicingTypeExtension.GetParameterCount(arraySlicingType), node.Children))
            return node.Parent;

        if (!EveryParserTypeHelper.IsArrayType(node.Children[0].ValueType)) {
            errorCollector.AddError(context, ErrorCode.FirstIsNotArray, "First parameter must be an array!");
            return node.Parent;
        }

        const childrenTypes = node.Children.slice(1, ArraySlicingTypeExtension.GetParameterCount(arraySlicingType) - 1).map(x => x.ValueType);

        if (childrenTypes.find(v => !EveryParserTypeHelper.IsNumber(v) && !EveryParserTypeHelper.IsNumberArray(v) && !EveryParserTypeHelper.IsNumberOrArrayOfNumbers(v))) {
            errorCollector.AddError(context, ErrorCode.IsNotNumberOrArrayOfNumbers, "One or more values are not number or array of numbers");
            return node.Parent;
        }

        //Issue here, we can not recognize arrays in arrays
        switch (arraySlicingType) {
            case ArraySlicingType.Indexing:
                if (childrenTypes.find(v => EveryParserTypeHelper.IsNumberArray(v)))
                    node.ValueType = node.Children[0].ValueType;
                else if (childrenTypes.find(v => EveryParserTypeHelper.IsNumberOrArrayOfNumbers(v)))
                    node.ValueType = this.GetSingleTypeOfArrayType(node.Children[0].ValueType) | node.Children[0].ValueType;
                else
                    node.ValueType = this.GetSingleTypeOfArrayType(node.Children[0].ValueType);
                break;

            case ArraySlicingType.Slicing:
            case ArraySlicingType.StepSlicing:
            case ArraySlicingType.StartSlicing:
            case ArraySlicingType.StartStepSlicing:
            case ArraySlicingType.EndSlicing:
            case ArraySlicingType.EndStepSlicing:
            case ArraySlicingType.AllStepSlicing:
                node.ValueType = node.Children[0].ValueType;
                break;
        }

        return node.Parent;
    }
}
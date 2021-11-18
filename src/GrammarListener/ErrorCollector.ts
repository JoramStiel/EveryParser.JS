import { ParserRuleContext } from "antlr4";
import { TypeCheckHelper } from "./TypeCheckHelper";

/// <summary>
/// ErrorCodes for the EveryParser
/// </summary>
export enum ErrorCode {
    IsNull,
    IsNotNumber,
    IsNotNumberOrArrayOfNumbers,
    IsNotBoolean,
    IsTypeDifferent,
    IsNotString,
    ParamsCountNotCorrect,
    NoParameter,
    TypeConversion,
    NoArguments,
    VariableNotInArguments,
    NotEqualArayCount,
    SecondParamIsNotArray,
    IsNotArray,
    IsNotDateTime,
    IsNotNumberArray,
    FirstNotNumberArray,
    SecondNotNumber,
    IsNotStringOrArray,
    CanBeEitherStringOrList,
    ThridNotNumber,
    ForthNotNumber,
    ArraySlicingNotCorrect,
    FirstIsNotArray,
    FirstIsNotNumberOrNumberArray,
    SecondIsNotNumberOrNumberArray,
    StepNotCorrect,
    StartEndIndexNotCorrect,
    IndexNotCorrect,
    IsNotStringOrArrayOfStrings,
    SyntaxError,
    CanBeEitherBooleanOrListBoolean
}

type Error = {
    code: ErrorCode,
    message: string,
}

type ArgumentType = {
    name: string,
    value: any,
}

export class ErrorCollector {
    private errors: Error[] = [];

    /// <summary>
    /// Count of Errors
    /// </summary>
    public ErrorCount = () => this.errors.length;

    /// <summary>
    /// Are there any errors collected?
    /// </summary>
    public HasErrors = () => this.errors.length > 0;

    public constructor() {
        this.errors = [];
    }

    /// <summary>
    /// Get all errors
    /// </summary>
    /// <returns>Array of errocodes and the error messages</returns>
    public GetErrors = () => this.errors.map(error => error);

    /// <summary>
    /// Check if one of the parameters is null
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if one parameters is null</returns>
    public CheckIsNull = (context: ParserRuleContext, childs: any[]) => {
        if (TypeCheckHelper.IsOneOfNull(childs)) {
            this.AddError(context, ErrorCode.IsNull, "One or more values are null");
            return true;
        }

        return false;
    }

    /// <summary>
    /// Check if all parameters are type of numbers (int, long, double, decimal)
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if types are numbers (int, long, double, decimal)</returns>
    public CheckIsNumber = (context: ParserRuleContext, childs: any[]) => {
        if (!TypeCheckHelper.IsArrayOfNumber(childs)) {
            this.AddError(context, ErrorCode.IsNotNumber, "One or more values are not numbers");
            return false;
        }

        return true;
    }

    /// <summary>
    /// Check if all parameters are type of numbers (int, long, double, decimal) or an array of numbers
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if types are numbers (int, long, double, decimal)</returns>
    public CheckIsNumberOrArrayOfNumbers = (context: ParserRuleContext, childs: any[]) => {
        if (!TypeCheckHelper.IsArrayOfNumberOrNumberList(childs)) {
            this.AddError(context, ErrorCode.IsNotNumber, "One or more values are not numbers or array of numbers");
            return false;
        }

        return true;
    }

    /// <summary>
    /// Check if all parameters are type of  array with numbers (int, long, double, decimal)
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if types are array pf numbers (int, long, double, decimal)</returns>
    public CheckIsListOfNumbers = (context: ParserRuleContext, childs: any[]) => {
        if (!TypeCheckHelper.IsArrayOfNumberList(childs)) {
            this.AddError(context, ErrorCode.IsNotNumberArray, "One or more values are not array of numbers");
            return false;
        }

        return true;
    }

    /// <summary>
    /// Check if all parameters are type of string or an array of string
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if types are numbers (int, long, double, decimal)</returns>
    public CheckIsStringOrListOfStrings = (context: ParserRuleContext, childs: any[]) => {
        if (!TypeCheckHelper.IsStringOrStringList(childs)) {
            this.AddError(context, ErrorCode.IsNotString, "One or more values are not string or array of strings");
            return false;
        }

        return true;
    }

    /// <summary>
    /// Check if all parameters are type of boolean
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if types are boolean</returns>
    public CheckIsBoolean = (context: ParserRuleContext, childs: any[]) => {
        if (!TypeCheckHelper.IsArrayOfBoolean(childs)) {
            this.AddError(context, ErrorCode.IsNotBoolean, "One or more values are not boolean");
            return false;
        }

        return true;
    }

    /// <summary>
    /// Check if all parameters are type of boolean
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if types are boolean</returns>
    public CheckIsBooleanOrArrayOfBoolean = (context: ParserRuleContext, childs: any[]) => {
        if (!TypeCheckHelper.IsArrayOfBooleanOrBooleanList(childs)) {
            this.AddError(context, ErrorCode.IsNotBoolean, "One or more values are not boolean or list of booleans");
            return false;
        }

        return true;
    }

    /// <summary>
    /// Check if all parameters are type of List(object)
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if types are boolean</returns>
    public CheckIsList = (context: ParserRuleContext, childs: any[]) => {
        if (!TypeCheckHelper.IsArrayOfObjectList(childs)) {
            this.AddError(context, ErrorCode.IsNotArray, "One or more values are not an array");
            return false;
        }

        return true;
    }

    /// <summary>
    /// Check if all parameters are type of string or List(object)
    /// </summary>
    /// <param name="context"></param>
    /// <param name="childs"></param>
    /// <returns></returns>
    public CheckIsStringOrList = (context: ParserRuleContext, childs: any[]) => {
        if (!TypeCheckHelper.IsStringOrList(childs)) {
            this.AddError(context, ErrorCode.IsNotStringOrArray, "One or more values are not a string or array");
            return false;
        }

        return true;
    }

    /// <summary>
    /// Check if a pair of params has not the same type for the calculation
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if types differ</returns>
    public CheckIsTypeDifferent = (context: ParserRuleContext, childs: any[]) => {
        for (let i = 0; i < childs.length; i += 1) {
            var child1Value = childs[i];

            for (let k = 0; k < childs.length; k += 1) {
                var child2Value = childs[k];

                if (!this.CheckIsNumber(context, [child1Value, child2Value]) || !this.CheckIsBoolean(context, [child1Value, child2Value]))
                    return true;
            }
        }

        return false;
    }

    /// <summary>
    /// Check if all parameters are type of DateTime
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if types are numbers (int, long, double, decimal)</returns>
    public CheckIsDateTime = (context: ParserRuleContext, childs: any[]) => {
        let valid = true;
        childs.forEach(child => {
            if (!(TypeCheckHelper.IsDateTime(child))) {
                this.AddError(context, ErrorCode.IsNotDateTime, "One or more values are not numbers");
                valid = false;
            }
        });

        return valid;
    }

    /// <summary>
    /// Checks if the count of child params is same as the params count which is need for a calculation
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="paramsCount">The count of parameters the calculation needs </param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if count is correct</returns>
    public CheckParamsCount<T>(context: ParserRuleContext, paramsCount: number, childs: T[]) {
        if ((childs?.length ?? 0) != paramsCount) {
            this.AddError(context, ErrorCode.ParamsCountNotCorrect, `No ${paramsCount} ${(paramsCount == 1 ? "value" : "values")}`);
            return false;
        }

        return true;
    }



    /// <summary>
    /// Checks if the count of child params is greater or equal the params count which is need for a calculation
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="paramsCount">The minimal count of parameters the calculation needs </param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if count is correct</returns>
    public CheckParamsCountGreaterEqual = (context: ParserRuleContext, paramsCount: number, childs: any[]) => {
        if ((childs?.length ?? 0) < paramsCount) {
            this.AddError(context, ErrorCode.ParamsCountNotCorrect, `No ${paramsCount} ${(paramsCount == 1 ? "value" : "values")} or greater`);
            return false;
        }

        return true;
    }

    /// <summary>
    /// Checks if the count of child params is lower or equal the params count which is need for a calculation
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="paramsCount">The maximal count of parameters the calculation needs </param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if count is correct</returns>
    public CheckParamsCountLowerEqual = (context: ParserRuleContext, paramsCount: number, childs: any[]) => {
        var childsCount = childs?.length ?? 0;
        if (childsCount > paramsCount) {
            this.AddError(context, ErrorCode.ParamsCountNotCorrect, `Too many values. Accepted ${paramsCount}, but has ${childsCount}`);
            return false;
        }

        return true;
    }

    /// <summary>
    /// Checks if the calculation got parameters to calculate
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="childs">All childs which are comitted to the calculation</param>
    /// <returns>true if there is a parameter</returns>
    public CheckHasParams = (context: ParserRuleContext, childs: any[]) => {
        if (childs == null || !childs.length || childs[0] == null) {
            this.AddError(context, ErrorCode.NoParameter, "No Parameter was comitted to the calculation");
            return false;
        }

        return true;
    }

    /// <summary>
    /// Check if the user has add some arguments which are now needed!
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="arguments">All arguments which are given</param>
    /// <returns>true if there are arguments</returns>
    public CheckHasArguments = (context: ParserRuleContext, args: ArgumentType[]) => {
        if (args == null || !args.length) {
            this.AddError(context, ErrorCode.NoArguments, "No Arguments was given for the calculation");
            return false;
        }

        return true;
    }

    /// <summary>
    /// Get the argument object of the variable if the arguments has it inside
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="arguments">All arguments which are given</param>
    /// <param name="variable">Variable which is searched</param>
    /// <returns>returns the object for the variable if found otherwise null</returns>
    public GetCheckedArgument = (context: ParserRuleContext, args: ArgumentType[], variable: string) => {
        if (!this.CheckHasArguments(context, args))
            return null;

        var argument = args.find(a => a.name == variable);
        if (!argument) {
            this.AddError(context, ErrorCode.NoArguments, `Variable ${variable} was not committed for the calculation`);
            return null;
        }

        return this.CheckConvertArgument(context, argument.value);
    }

    CheckConvertArgument = (context: ParserRuleContext, value: any) => {
        if (value == null) {
            this.AddError(context, ErrorCode.IsNull, "Argument variable is null!");
            return null;
        }

        if (TypeCheckHelper.IsBoolean(value) || TypeCheckHelper.IsNumber(value) || TypeCheckHelper.IsDateTime(value) ||
            TypeCheckHelper.IsStringOrStringList(value) || TypeCheckHelper.IsArrayOfNumber(value) || TypeCheckHelper.IsArrayOfDateTime(value) ||
            TypeCheckHelper.IsArrayOfBoolean(value))
            return value;


        this.AddError(context, ErrorCode.TypeConversion, `Could not recognize type of ${typeof (value)}`);
        return null;
    }

    /// <summary>
    /// Get the argument object with the internal object of the variable if the arguments has it inside
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="arguments">All arguments which are given</param>
    /// <param name="variable">Variable which is searched</param>
    /// <returns>returns the object for the variable if found otherwise null</returns>
    public GetCheckedObjectArgument = (context: ParserRuleContext, args: ArgumentType[], variable: string) => {
        if (!this.CheckHasArguments(context, args))
            return null;

        var variableNames = variable.split('.');

        var argument = args.find(a => a.name == variableNames[0]);
        if (!argument) {
            this.AddError(context, ErrorCode.VariableNotInArguments, `Variable ${variable} was not committed for the calculation`);
            return null;
        }

        let value = argument.value;
        try {
            for (let i = 1; i < variableNames.length; i += 1) {
                const variableName = variableNames[i];

                var property = value[variableName];

                if (property == null) {
                    this.AddError(context, ErrorCode.VariableNotInArguments, `Variable ${variable} was not found inside the base object ${variableNames[0]}`);
                    return null;
                }

                value = property;
            }
        }
        catch
        {
            this.AddError(context, ErrorCode.VariableNotInArguments, `Variable ${variable} was not found inside the base object ${variableNames[0]}`);
            return null;
        }

        return this.CheckConvertArgument(context, value);
    }

    /// <summary>
    /// Adds an error text for a failed conversation to a specific type
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="text">Text to convert to a type</param>
    /// <param name="targetedType">Type the text should be converted to</param>
    public AddTypeConversionError = (context: ParserRuleContext, text: string, targetedTypeName: string) => {
        this.errors.push({ code: ErrorCode.TypeConversion, message: `Could not convert ${text}  to type of ${targetedTypeName}` });
    }

    /// <summary>
    /// Adds an error text
    /// </summary>
    /// <param name="context">Context for line recognition</param>
    /// <param name="errorCode">ErrorCode of error</param>
    /// <param name="text">Text to convert to a type</param>
    public AddError = (context: ParserRuleContext, errorCode: ErrorCode, text: string) => {
        this.errors.push({ code: errorCode, message: `${text}, ${context.stop.line}:${context.stop.start}:${context.stop.stop}` });
    }
}
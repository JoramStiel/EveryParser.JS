// Generated from EveryGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import { ParserRuleContext } from 'antlr4';
import { ErrorNode, TerminalNode } from 'antlr4/tree/Tree';
import { Argument } from '../../Argument';
import EveryGrammarListener from '../../EveryGrammarListener';
import { ErrorCode, ErrorCollector } from '../ErrorCollector';
import { NodeCalculator } from './NodeCalculator';
import { ArraySlicingType, ArraySlicingTypeExtension } from '../ArraySlicingType';
import { CalculationHelper } from './CalculationHelper';
import { TypeCheckHelper } from '../TypeCheckHelper';
import { isStringNullOrWhitespace, stringArrayToString, stringToArray } from '../HelperFunctions';

// This class defines a complete listener for a parse tree produced by EveryGrammarParser.
export class EveryGrammarCalculatorListener implements EveryGrammarListener {

    private node?: NodeCalculator;
    private result: any;
    private arguments: Argument[];
    private lastArraySlicingType: ArraySlicingType;

    public Result = () => this.result;

    public errorCollector: ErrorCollector;

    constructor(args: Argument[]) {
        this.arguments = args;
        this.errorCollector = new ErrorCollector();
        this.lastArraySlicingType = ArraySlicingType.Indexing;
    }


    public visitTerminal(node: TerminalNode): void { }


    public visitErrorNode(node: ErrorNode): void { }


    public enterEveryRule(node: ParserRuleContext): void { }


    public exitEveryRule(node: ParserRuleContext): void { }


    // Enter a parse tree produced by EveryGrammarParser#startRule.
    public enterStartRule(context: ParserRuleContext): void {
        this.node = new NodeCalculator();
        this.errorCollector = new ErrorCollector();
        this.result = null;
    }


    // Exit a parse tree produced by EveryGrammarParser#startRule.
    public exitStartRule(context: ParserRuleContext): void {
        if (this.node)
            this.result = this.errorCollector.CheckHasParams(context, this.node.Children) ? this.node.Children[0].Value : null;
    }



    // Enter a parse tree produced by EveryGrammarParser#expression.
    public enterExpression(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#expression.
    public exitExpression(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#IfElse_Next.
    public enterIfElse_Next(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#IfElse_Next.
    public exitIfElse_Next(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing.
    public enterArraySlicing(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing.
    public exitArraySlicing(context: ParserRuleContext): void {
        this.ArraySlicing(context, this.lastArraySlicingType);
    }



    // Enter a parse tree produced by EveryGrammarParser#IfElse.
    public enterIfElse(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#IfElse.
    public exitIfElse(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#InnerIfElse_Next.
    public enterInnerIfElse_Next(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#InnerIfElse_Next.
    public exitInnerIfElse_Next(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#InnerIfElse.
    public enterInnerIfElse(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#InnerIfElse.
    public exitInnerIfElse(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BoolOr_Next.
    public enterBoolOr_Next(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BoolOr_Next.
    public exitBoolOr_Next(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BoolOr.
    public enterBoolOr(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#BoolOr.
    public exitBoolOr(context: ParserRuleContext): void {
if(!this.node)
    return;

        const calculation = (x1: boolean, x2: boolean) => x1 || x2;
        this.node.Value = CalculationHelper.CalcBooleanOrBooleanArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#BoolXOr_Next.
    public enterBoolXOr_Next(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BoolXOr_Next.
    public exitBoolXOr_Next(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BoolXOr.
    public enterBoolXOr(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#BoolXOr.
    public exitBoolXOr(context: ParserRuleContext): void {
        if(!this.node)
            return;

        const calculation = (x1: boolean, x2: boolean) => ( x1 && !x2 ) || ( !x1 && x2 );
        this.node.Value = CalculationHelper.CalcBooleanOrBooleanArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#BoolAnd_Next.
    public enterBoolAnd_Next(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BoolAnd_Next.
    public exitBoolAnd_Next(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BoolAnd.
    public enterBoolAnd(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#BoolAnd.
    public exitBoolAnd(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1: boolean, x2: boolean) => x1 && x2;
        this.node.Value = CalculationHelper.CalcBooleanOrBooleanArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Equality_Contains.
    public enterEquality_Contains(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Equality_Contains.
    public exitEquality_Contains(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const value1 = childValues[0];
        const value2 = childValues[1];

        if (TypeCheckHelper.IsArray(value2))
            this.node.Value = value2.includes(value1);
        else if (TypeCheckHelper.IsString(value2))
            this.node.Value = value2.includes(value1.ToString());
        else {
            this.errorCollector.AddError(context, ErrorCode.SecondParamIsNotArray, "The second argument is not an array");
            this.node.Value = null;
        }

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Equality_Next.
    public enterEquality_Next(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Equality_Next.
    public exitEquality_Next(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Equality_Equal.
    public enterEquality_Equal(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Equality_Equal.
    public exitEquality_Equal(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const value1 = childValues[0];
        const value2 = childValues[1];

        if (TypeCheckHelper.IsArray(value1) && TypeCheckHelper.IsArray(value2))
            this.node.Value = value1.sort().join(',')=== value2.sort().join(',');
        else
            this.node.Value = value1.Equals(value2);

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Equality_NotEqualIgnoreCase.
    public enterEquality_NotEqualIgnoreCase(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Equality_NotEqualIgnoreCase.
    public exitEquality_NotEqualIgnoreCase(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsStringOrListOfStrings(context, childValues)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const value1 = childValues[0];
        const value2 = childValues[1];

        if (TypeCheckHelper.IsArray(value1) && TypeCheckHelper.IsArray(value2))
            this.node.Value = !list1.SequenceEqual(list2, new StringIgnoreCaseComparer());
        else
            this.node.Value = !value1.ToString().Equals(value2.ToString(), StringComparison.OrdinalIgnoreCase);

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Equality_NotEqual.
    public enterEquality_NotEqual(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Equality_NotEqual.
    public exitEquality_NotEqual(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const value1 = childValues[0];
        const value2 = childValues[1];

        if (TypeCheckHelper.IsArray(value1) && TypeCheckHelper.IsArray(value2))
            this.node.Value = !list1.SequenceEqual(list2);
        else
            this.node.Value = !value1.Equals(value2);

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Equality_NotContains.
    public enterEquality_NotContains(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Equality_NotContains.
    public exitEquality_NotContains(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const value1 = childValues[0];
        const value2 = childValues[1];

        if (TypeCheckHelper.IsArray(value2))
            this.node.Value = !list2.Contains(value1);
        else if (TypeCheckHelper.IsString(value2))
            this.node.Value = !v2.Contains(value1.ToString());
        else {
            this.errorCollector.AddError(context, ErrorCode.SecondParamIsNotArray, "The second argument is not an array");
            this.node.Value = null;
        }

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Equality_EqualIgnoreCase.
    public enterEquality_EqualIgnoreCase(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Equality_EqualIgnoreCase.
    public exitEquality_EqualIgnoreCase(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsStringOrListOfStrings(context, childValues)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const value1 = childValues[0];
        const value2 = childValues[1];

        if (TypeCheckHelper.IsArray(value1) && TypeCheckHelper.IsArray(value2))
            this.node.Value = list1.SequenceEqual(list2, new StringIgnoreCaseComparer());
        else
            this.node.Value = value1.ToString().Equals(value2.ToString(), StringComparison.OrdinalIgnoreCase);

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Check_Next.
    public enterCheck_Next(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Check_Next.
    public exitCheck_Next(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Check_Greater.
    public enterCheck_Greater(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Check_Greater.
    public exitCheck_Greater(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => (object)(Number(x1) > Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Check_GreaterEqual.
    public enterCheck_GreaterEqual(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Check_GreaterEqual.
    public exitCheck_GreaterEqual(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => (object)(Number(x1) >= Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Check_Lower.
    public enterCheck_Lower(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Check_Lower.
    public exitCheck_Lower(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => (object)(Number(x1) < Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Check_LowerEqual.
    public enterCheck_LowerEqual(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Check_LowerEqual.
    public exitCheck_LowerEqual(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => (object)(Number(x1) <= Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#BitOR.
    public enterBitOR(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#BitOR.
    public exitBitOR(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsNumber(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        this.node.Value = Number(childValues[0]) | Number(childValues[1]);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#BitOr_Next.
    public enterBitOr_Next(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BitOr_Next.
    public exitBitOr_Next(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BitAnd.
    public enterBitAnd(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#BitAnd.
    public exitBitAnd(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsNumber(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        this.node.Value = Number(childValues[0]) & Number(childValues[1]);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#BitAnd_Next.
    public enterBitAnd_Next(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BitAnd_Next.
    public exitBitAnd_Next(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Line_Addition.
    public enterLine_Addition(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Line_Addition.
    public exitLine_Addition(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => (object)(Number(x1) + Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Line_Subtraction.
    public enterLine_Subtraction(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Line_Subtraction.
    public exitLine_Subtraction(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => (object)(Number(x1) - Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Line_Next.
    public enterLine_Next(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Line_Next.
    public exitLine_Next(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_PowerOperator.
    public enterPointTerm_PowerOperator(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_PowerOperator.
    public exitPointTerm_PowerOperator(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => Math.pow(x1, x2);
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_Modulo.
    public enterPointTerm_Modulo(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_Modulo.
    public exitPointTerm_Modulo(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => (object)(Number(x1) % Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_Multiply.
    public enterPointTerm_Multiply(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_Multiply.
    public exitPointTerm_Multiply(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => (object)(Number(x1) * Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_BitShiftLeft.
    public enterPointTerm_BitShiftLeft(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_BitShiftLeft.
    public exitPointTerm_BitShiftLeft(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsNumber(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        this.node.Value = Number(childValues[0]) << Number(childValues[1]);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_IntegerDivision.
    public enterPointTerm_IntegerDivision(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_IntegerDivision.
    public exitPointTerm_IntegerDivision(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => (object)(Number(x1) / Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_BitShiftRight.
    public enterPointTerm_BitShiftRight(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_BitShiftRight.
    public exitPointTerm_BitShiftRight(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsNumber(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        this.node.Value = Number(childValues[0]) >> Number(childValues[1]);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_Divide.
    public enterPointTerm_Divide(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_Divide.
    public exitPointTerm_Divide(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => (object)(Number(x1) / Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_Next.
    public enterPointTerm_Next(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_Next.
    public exitPointTerm_Next(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Not.
    public enterFactor_Not(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Not.
    public exitFactor_Not(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 1, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsBooleanOrArrayOfBoolean(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        if (TypeCheckHelper.IsArray(childValues[0]))
            this.node.Value = list.map(x => !x);
        else
            this.node.Value = !childValues[0];

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Minus.
    public enterFactor_Minus(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Minus.
    public exitFactor_Minus(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => -x;
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Plus.
    public enterFactor_Plus(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Plus.
    public exitFactor_Plus(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 1, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsNumberOrArrayOfNumbers(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        this.node.Value = childValues[0];
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Tilde.
    public enterFactor_Tilde(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Tilde.
    public exitFactor_Tilde(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => ~x;
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Factorial.
    public enterFactor_Factorial(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Factorial.
    public exitFactor_Factorial(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => CalculationHelper.CalcFactorial(x);
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Brackets.
    public enterFactor_Brackets(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Brackets.
    public exitFactor_Brackets(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_True.
    public enterFactor_True(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode(true);
    }


    // Exit a parse tree produced by EveryGrammarParser#Factor_True.
    public exitFactor_True(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_False.
    public enterFactor_False(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode(false);
    }


    // Exit a parse tree produced by EveryGrammarParser#Factor_False.
    public exitFactor_False(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Integer.
    public enterFactor_Integer(context: ParserRuleContext): void {
        if (!this.node)
            return;

        const text = context.getText();
        const parsedNumber = Number(text);

        if (Number.isNaN(parsedNumber))
            this.node.AddChildNode(parsedNumber);
        else {
            this.errorCollector.AddTypeConversionError(context, text, "number");
            this.node.AddChildNode(NaN);
        }
    }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Integer.
    public exitFactor_Integer(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Double.
    public enterFactor_Double(context: ParserRuleContext): void {
        if (!this.node)
            return;

        const text = context.getText();
        const parsedNumber = Number(text);

        if (Number.isNaN(parsedNumber))
            this.node.AddChildNode(parsedNumber);
        else {
            this.errorCollector.AddTypeConversionError(context, text, typeof (decimal));
            this.node.AddChildNode(NaN);
        }
    }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Double.
    public exitFactor_Double(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Variable.
    public enterFactor_Variable(context: ParserRuleContext): void {
        if (!this.node)
            return;

        const text = context.getText();
        let value: any = null;

        if (text.toLowerCase() === "e")
            value = 2.71828182845904523536028747135266249775724709369995957496696762772407663035354759457138217852516642742746;
        else if (text.toLowerCase() === "pi")
            value = 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214;
        else
            value = ErrorCollector.GetCheckedArgument(context, _arguments, text);

        this.node.AddChildNode(value);
    }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Variable.
    public exitFactor_Variable(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_ObjectVariables.
    public enterFactor_ObjectVariables(context: ParserRuleContext): void {
        if (!this.node)
            return;

        const text = context.getText();
        let value: any;

        if (text.toLowerCase() === "DateTime.Now".toLowerCase())
            value = DateTime.Now;
        else
            value = ErrorCollector.GetCheckedObjectArgument(context, _arguments, text);

        this.node.AddChildNode(value);
    }


    // Exit a parse tree produced by EveryGrammarParser#Factor_ObjectVariables.
    public exitFactor_ObjectVariables(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_String.
    public enterFactor_String(context: ParserRuleContext): void {
        if (!this.node)
            return;

        const text = context.getText().trim();
        if (text.trim || text.Length <= 2)
            text = string.Empty;
        else
            text = text.slice(1, text.Length - 2);

        this.node.AddChildNode(text);
    }


    // Exit a parse tree produced by EveryGrammarParser#Factor_String.
    public exitFactor_String(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_DateTimeTerm.
    public enterFactor_DateTimeTerm(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_DateTimeTerm.
    public exitFactor_DateTimeTerm(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Array.
    public enterFactor_Array(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Array.
    public exitFactor_Array(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_DefaultFunction.
    public enterFactor_DefaultFunction(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_DefaultFunction.
    public exitFactor_DefaultFunction(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_CheckFunction.
    public enterFactor_CheckFunction(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_CheckFunction.
    public exitFactor_CheckFunction(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_ConvertFunction.
    public enterFactor_ConvertFunction(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_ConvertFunction.
    public exitFactor_ConvertFunction(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_MathFunction.
    public enterFactor_MathFunction(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_MathFunction.
    public exitFactor_MathFunction(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_RandomFunction.
    public enterFactor_RandomFunction(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_RandomFunction.
    public exitFactor_RandomFunction(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_StatisticMathFunction.
    public enterFactor_StatisticMathFunction(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_StatisticMathFunction.
    public exitFactor_StatisticMathFunction(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Random_Decimal.
    public enterRandom_Decimal(context: ParserRuleContext): void {
        if (this.node)
            this.nodeAddChildNode(_randomizer.NextDouble() + _randomizer.Next());
    }


    // Exit a parse tree produced by EveryGrammarParser#Random_Decimal.
    public exitRandom_Decimal(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Random_DecimalArray.
    public enterRandom_DecimalArray(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Random_DecimalArray.
    public exitRandom_DecimalArray(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => {
            const count = Number(x);

            const result: number[] = [];
            for (let i = 0; i < count; i += 1)
                result.push(_randomizer.NextDouble() + _randomizer.Next());

            return result;
        };
        this.node.Value = CalculationHelper.CalcNumericUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Random_DecimalMinMax.
    public enterRandom_DecimalMinMax(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Random_DecimalMinMax.
    public exitRandom_DecimalMinMax(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x, y) => {
            const min = Number(x);
            const max = Number(y);

            let result = _randomizer.Next(min, max);

            if (result === min)
                result += Math.abs(_randomizer.NextDouble());
            else
                result += _randomizer.NextDouble();

            return result;
        };
        this.node.Value = CalculationHelper.CalcNumericBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Random_DecimalArrayMinMax.
    public enterRandom_DecimalArrayMinMax(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Random_DecimalArrayMinMax.
    public exitRandom_DecimalArrayMinMax(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (w, x, y) => {
            const count = Number(w);
            const min = Number(x);
            const max = Number(y);

            let result: number[] = [];
            for (let i = 0; i < count; i += 1) {
                let res = _randomizer.Next(min, max);

                if (res === min)
                    res += Math.Abs(_randomizer.NextDouble());
                else
                    res += _randomizer.NextDouble();

                result.push(res);
            }

            return result;
        };
        this.node.Value = CalculationHelper.CalcNumericTri(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Random_Integer.
    public enterRandom_Integer(context: ParserRuleContext): void {
        if (this.node)
            this.nodeAddChildNode(_randomizer.Next());
    }


    // Exit a parse tree produced by EveryGrammarParser#Random_Integer.
    public exitRandom_Integer(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Random_IntegerArray.
    public enterRandom_IntegerArray(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Random_IntegerArray.
    public exitRandom_IntegerArray(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => {
            const count = Number(x);

            const result: number[] = [];
            for (let i = 0; i < count; i += 1)
                result.push(_randomizer.Next());

            return result;
        };

        this.node.Value = CalculationHelper.CalcNumericUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Random_IntegerMinMax.
    public enterRandom_IntegerMinMax(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Random_IntegerMinMax.
    public exitRandom_IntegerMinMax(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x, y) => {
            const min = Number(x);
            const max = Number(y);

            return _randomizer.Next(min, max);
        };
        this.node.Value = CalculationHelper.CalcNumericBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Random_IntegerArrayMinMax.
    public enterRandom_IntegerArrayMinMax(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Random_IntegerArrayMinMax.
    public exitRandom_IntegerArrayMinMax(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (w, x, y) => {
            const count = Number(w);
            const min = Number(x);
            const max = Number(y);

            const result: number[] = [];
            for (let i = 0; i < count; i += 1)
                result.push(_randomizer.Next(min, max));

            return result;
        };
        this.node.Value = CalculationHelper.CalcNumericTri(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Convert_ToArray.
    public enterConvert_ToArray(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Convert_ToArray.
    public exitConvert_ToArray(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 1, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const value = childValues[0];

        if (TypeCheckHelper.IsArray(value))
            this.node.Value = value;
        else if (TypeCheckHelper.IsString(value))
            this.node.Value = stringToArray(value);
        else if (TypeCheckHelper.IsNumber(value) || TypeCheckHelper.IsBoolean(value) || TypeCheckHelper.IsDateTime(value))
            this.node.Value = [value];

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Convert_ToBoolean.
    public enterConvert_ToBoolean(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Convert_ToBoolean.
    public exitConvert_ToBoolean(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 1, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const value = childValues[0];

        if (TypeCheckHelper.IsArray(value))
            this.node.Value = listValue.Any();
        else if (TypeCheckHelper.IsString(value))
            this.node.Value = value.trim() !== "";
        else if (TypeCheckHelper.IsNumber(value))
            this.node.Value = Number(value) > 0;
        else if (TypeCheckHelper.IsBoolean(value))
            this.node.Value = value;

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Convert_ToNumber.
    public enterConvert_ToNumber(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Convert_ToNumber.
    public exitConvert_ToNumber(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 1, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const value = childValues[0];

        if (TypeCheckHelper.IsArray(value))
            this.node.Value = Number("X");
        else if (TypeCheckHelper.IsNumber(value))
            this.node.Value = value;
        else if (TypeCheckHelper.IsBoolean(value))
            this.node.Value = value ? 1 : 0;

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Convert_ToString.
    public enterConvert_ToString(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Convert_ToString.
    public exitConvert_ToString(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 1, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        if (TypeCheckHelper.IsArray(childValues[0]))
            this.node.Value = null;
        else
            this.node.Value = childValues[0].ToString();

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Convert_DegreeToGrad.
    public enterConvert_DegreeToGrad(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Convert_DegreeToGrad.
    public exitConvert_DegreeToGrad(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.DegreeToGrad(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Convert_DegreeToRadian.
    public enterConvert_DegreeToRadian(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Convert_DegreeToRadian.
    public exitConvert_DegreeToRadian(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.DegreeToRadian(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Convert_GradToDegree.
    public enterConvert_GradToDegree(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Convert_GradToDegree.
    public exitConvert_GradToDegree(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.GradToDegree(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Convert_GradToRadian.
    public enterConvert_GradToRadian(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Convert_GradToRadian.
    public exitConvert_GradToRadian(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.GradToRadian(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Convert_RadianToDegree.
    public enterConvert_RadianToDegree(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Convert_RadianToDegree.
    public exitConvert_RadianToDegree(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.RadianToDegree(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Convert_RadianToGrad.
    public enterConvert_RadianToGrad(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Convert_RadianToGrad.
    public exitConvert_RadianToGrad(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.RadianToGrad(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#DateTime_Expression.
    public enterDateTime_Expression(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#DateTime_Expression.
    public exitDateTime_Expression(context: ParserRuleContext): void {
        this.SetNodeForDateTimeValue(context, 1);
    }



    // Enter a parse tree produced by EveryGrammarParser#DateTime_DateEntry.
    public enterDateTime_DateEntry(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#DateTime_DateEntry.
    public exitDateTime_DateEntry(context: ParserRuleContext): void {
        this.SetNodeForDateTimeValue(context, 3);
    }



    // Enter a parse tree produced by EveryGrammarParser#DateTime_DateHour.
    public enterDateTime_DateHour(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#DateTime_DateHour.
    public exitDateTime_DateHour(context: ParserRuleContext): void {
        this.SetNodeForDateTimeValue(context, 4);
    }



    // Enter a parse tree produced by EveryGrammarParser#DateTime_DateHourMinute.
    public enterDateTime_DateHourMinute(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#DateTime_DateHourMinute.
    public exitDateTime_DateHourMinute(context: ParserRuleContext): void {
        this.SetNodeForDateTimeValue(context, 5);
    }



    // Enter a parse tree produced by EveryGrammarParser#DateTime_DateHourMinuteSeconds.
    public enterDateTime_DateHourMinuteSeconds(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#DateTime_DateHourMinuteSeconds.
    public exitDateTime_DateHourMinuteSeconds(context: ParserRuleContext): void {
        this.SetNodeForDateTimeValue(context, 6);
    }



    // Enter a parse tree produced by EveryGrammarParser#DateTime_Full.
    public enterDateTime_Full(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#DateTime_Full.
    public exitDateTime_Full(context: ParserRuleContext): void {
        this.SetNodeForDateTimeValue(context, 7);
    }

    /// <summary>
    /// Sets the value of the node and goes up to parent, if some error is done
    /// </summary>
    private SetErrorNodeFor_ExitFactor_DateTimeTerm() {
        if(!this.node)
            return;
            
        this.node.Value = null;
        this.node = this.node.Parent;
    }

    /// <summary>
    /// Method to use in order to create the date value.
    /// Therefore the date methods are very similar, it's everything here inside one method
    /// </summary>
    /// <param name="context"></param>
    /// <param name="expectedDateParameters"></param>
    private SetNodeForDateTimeValue(context: ParserRuleContext, expectedDateParameters: number) {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.SetErrorNodeFor_ExitFactor_DateTimeTerm();
            return;
        }

        if (expectedDateParameters == 1) {
            this.node.Value = CalculationHelper.CalcStringOrStringListUnary(context, this.errorCollector, x => DateTime.Parse(x, CultureInfo.InvariantCulture), this.node.Children);
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, expectedDateParameters, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues)) {
            this.SetErrorNodeFor_ExitFactor_DateTimeTerm();
            return;
        }

        const date = new new Date();
        const dateList: Date[] = [];

        if (!this.errorCollector.CheckIsNumberOrArrayOfNumbers(context, childValues)) {
            this.SetErrorNodeFor_ExitFactor_DateTimeTerm();
            return;
        }

        for (var datePartIndex = 0; datePartIndex < childValues.Length; datePartIndex++) {
            const datePartList = childValues[datePartIndex] as List<object>;
            const datePart = -1;
            if (!datePartList)
                datePart = Number(childValues[datePartIndex]);

            let expression = null;

            switch (datePartIndex) {
                case 0:
                    expression = (d: Date, v: Number) => { d.setFullYear(v); return d; };
                    break;

                case 1:
                    expression = (d: Date, v: Number) => { d.setMonth(v); return d; };
                    break;

                case 2:
                    expression = (d: Date, v: Number) => { d.setDate(v); return d; };
                    break;

                case 3:
                    expression = (d: Date, v: Number) => { d.setHours(v); return d; };
                    break;

                case 4:
                    expression = (d: Date, v: Number) => { d.setMinutes(v); return d; };
                    break;

                case 5:
                    expression = (d: Date, v: Number) => { d.setSeconds(v); return d; };
                    break;

                case 6:
                    expression = (d: Date, v: Number) => { d.setMilliseconds(v); return d; };
                    break;

                default:
                    SetErrorNodeFor_ExitFactor_DateTimeTerm();
                    return;
            }

            const result = GetDateTimeResult(context, date, dateList, datePart, datePartList, expression);

            if (!result.result) {
                SetErrorNodeFor_ExitFactor_DateTimeTerm();
                return;
            }

            date = result.dateResult;
            dateList = result.dateResultList;
        }

        this.node.Value = dateList.length ? dateList : date;
        this.node = this.node.Parent;
    }

    private GetDateTimeResult(context: ParserRuleContext, currentDate: Date, currentDateList: Date[], value: number, valueList: any[], expression: (value1: Date, value2: number) => Date) {
        if (!valueList) {
            if (currentDateList.Any())
                currentDateList = currentDateList.map(d => expression.Invoke(d, value));
            else
                currentDate = expression.Invoke(currentDate, value);
        }
        else {
            if (currentDateList.Count != 0 && currentDateList.Count != valueList.Count) {
                this.errorCollector.AddError(context, ErrorCode.NotEqualArayCount, "Count of arrays are not equal!");
                return (false, DateTime.MinValue, null);
            }

            const result: Date[] = [];
            for (let i = 0; i < valueList.Count; i += 1) {
                const d = currentDateList.length === 0 ? currentDate : currentDateList[i];
                result.push(expression.Invoke(d, Number(valueList[i])));
            }
            currentDateList = result;
        }

        return { result: true, dateResult: currentDate, dateResultList: currentDateList };
    }




    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_Indexing.
    public enterArraySlicing_Indexing(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_Indexing.
    public exitArraySlicing_Indexing(context: ParserRuleContext): void {
        this.lastArraySlicingType = ArraySlicingType.Indexing;
    }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_Slicing.
    public enterArraySlicing_Slicing(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_Slicing.
    public exitArraySlicing_Slicing(context: ParserRuleContext): void {
        this.lastArraySlicingType = ArraySlicingType.Slicing;
    }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_StepSlicing.
    public enterArraySlicing_StepSlicing(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_StepSlicing.
    public exitArraySlicing_StepSlicing(context: ParserRuleContext): void {
        this.lastArraySlicingType = ArraySlicingType.StepSlicing;
    }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_StartSlicing.
    public enterArraySlicing_StartSlicing(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_StartSlicing.
    public exitArraySlicing_StartSlicing(context: ParserRuleContext): void {
        this.lastArraySlicingType = ArraySlicingType.StartSlicing;
    }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_StartStepSlicing.
    public enterArraySlicing_StartStepSlicing(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_StartStepSlicing.
    public exitArraySlicing_StartStepSlicing(context: ParserRuleContext): void {
        this.lastArraySlicingType = ArraySlicingType.StartStepSlicing;
    }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_EndSlicing.
    public enterArraySlicing_EndSlicing(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_EndSlicing.
    public exitArraySlicing_EndSlicing(context: ParserRuleContext): void {
        this.lastArraySlicingType = ArraySlicingType.EndSlicing;
    }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_EndStepSlicing.
    public enterArraySlicing_EndStepSlicing(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_EndStepSlicing.
    public exitArraySlicing_EndStepSlicing(context: ParserRuleContext): void {
        this.lastArraySlicingType = ArraySlicingType.EndStepSlicing;
    }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_AllStepSlicing.
    public enterArraySlicing_AllStepSlicing(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_AllStepSlicing.
    public exitArraySlicing_AllStepSlicing(context: ParserRuleContext): void {
        this.lastArraySlicingType = ArraySlicingType.AllStepSlicing;
    }

    private ArraySlicing(context: ParserRuleContext, arraySlicingType: ArraySlicingType): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const parametersCount = ArraySlicingTypeExtension.GetParameterCount(arraySlicingType);

        const childValues = this.node.Children.slice(1, parametersCount - 1).map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, parametersCount - 1, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsNumberOrArrayOfNumbers(context, childValues)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        let array: any[] = this.node.Children[0].Value;
        if (!array) {
            const text: string = this.node.Children[0].Value;
            if (isStringNullOrWhitespace(text)) {
                this.errorCollector.AddError(context, ErrorCode.FirstIsNotArray, "The first parameter musst be an array or string!");
                this.node.Value = null;
                this.node = this.node.Parent;
                return;
            }

            array = stringToArray(text);
        }

        switch (arraySlicingType) {
            case ArraySlicingType.Indexing:
                this.node.Value = this.SliceArray(context, array, childValues[0]);
                break;

            case ArraySlicingType.Slicing:
                this.node.Value = this.SliceArrayFromTo(context, array, childValues[0], childValues[1]);
                break;

            case ArraySlicingType.StepSlicing:

                this.node.Value = this.SliceArrayFromToStep(context, array, childValues[0], childValues[1], childValues[2]);
                break;

            case ArraySlicingType.StartSlicing:
                this.node.Value = this.SliceArrayFromTo(context, array, childValues[0], array.length);
                break;

            case ArraySlicingType.StartStepSlicing:
                this.node.Value = this.SliceArrayFromToStep(context, array, childValues[0], array.length, childValues[1]);
                break;

            case ArraySlicingType.EndSlicing:
                this.node.Value = this.SliceArrayFromTo(context, array, 0, childValues[0]);
                break;

            case ArraySlicingType.EndStepSlicing:
                this.node.Value = this.SliceArrayFromToStep(context, array, 0, childValues[0], childValues[1]);
                break;

            case ArraySlicingType.AllStepSlicing:
                this.node.Value = this.SliceArrayFromToStep(context, array, 0, array.length, childValues[0]);
                break;
        }

        this.node = this.node.Parent;
    }

    private SliceArray(context: ParserRuleContext, array: any[], indexObj: any): any {
        const indexList = indexObj as List<object>;

        if (!indexList) {
            let index: number = Number(indexObj);
            if (index < 0)
                index = array.length + index;

            if (index >= array.length) {
                this.errorCollector.AddError(context, ErrorCode.IndexNotCorrect, "The index can't be higher or equal to the length of the array!");
                return null;
            }
            else if (index < 0) {
                this.errorCollector.AddError(context, ErrorCode.IndexNotCorrect, "The index can't be less than 0!");
                return null;
            }

            return array[index];
        }

        return indexList.map(x => {
            let index: number = Number(indexObj);
            if (index < 0)
                index = array.length + index;

            if (index >= array.length) {
                this.errorCollector.AddError(context, ErrorCode.IndexNotCorrect, "The index can't be higher or equal to the length of the array!");
                return null;
            }
            else if (index < 0) {
                this.errorCollector.AddError(context, ErrorCode.IndexNotCorrect, "The index can't be less than 0!");
                return null;
            }

            return array[index];
        });
    }

    private SliceArrayFromTo(context: ParserRuleContext, array: any[], indexStartObj: any, indexEndObj: any): any {

        if (!TypeCheckHelper.IsArrayOfNumber(indexStartObj) && !TypeCheckHelper.IsArrayOfNumber(indexEndObj)) {
            const indexStart = Number(indexStartObj);
            const indexEnd = Number(indexEndObj);
            return GetFromTo(context, array, indexStart, indexEnd);
        }
        else if (!TypeCheckHelper.IsArrayOfNumber(indexStartObj)) {
            const indexStart = Number(indexStartObj);
            return indexEndList.map(indexEndX => GetFromTo(context, array, indexStart, Number(indexEndX)));
        }
        else if (!TypeCheckHelper.IsArrayOfNumber(indexEndObj)) {
            const indexEnd = Number(indexEndObj);
            return indexStartList.map(indexStartX => GetFromTo(context, array, Number(indexStartX), indexEnd));
        }
        else if (indexStartList.length == indexEndObj.length) {
            const result = new List<object>(indexEndList.Count);
            for (let i = 0; i < indexEndList.Count; i += 1) {
                const indexStart = Number(indexStartList[i]);
                const indexEnd = Number(indexEndList[i]);
                result.push(GetFromTo(context, array, indexStart, indexEnd));
            }
            return result;
        }

        this.errorCollector.AddError(context, ErrorCode.NotEqualArayCount, `Array count must be equal: IndexStart Array Count ${indexStartList.Count} IndexEnd Array Count ${indexEndList.length}`);

        return null;
    }

    private SliceArrayFromToStep(context: ParserRuleContext, array: any[], indexStartObj: any, indexEndObj: any, stepObj: any): any {
        if (!TypeCheckHelper.IsArrayOfNumber(indexStartObj) && !TypeCheckHelper.IsArrayOfNumber(indexEndObj) && !TypeCheckHelper.IsArrayOfNumber(stepObj)) {
            const indexStart = Number(indexStartObj);
            const indexEnd = Number(indexEndObj);
            const step = Number(stepObj);
            return GetFromTo(context, array, indexStart, indexEnd, step);
        }
        else if (!TypeCheckHelper.IsArrayOfNumber(indexStartObj) && !TypeCheckHelper.IsArrayOfNumber(indexEndObj)) {
            const indexStart = Number(indexStartObj);
            const indexEnd = Number(indexEndObj);
            return stepList.map(stepX => GetFromTo(context, array, indexStart, indexEnd, Number(stepX)));
        }
        else if (!TypeCheckHelper.IsArrayOfNumber(indexStartObj) && !TypeCheckHelper.IsArrayOfNumber(stepObj)) {
            const indexStart = Number(indexStartObj);
            const step = Number(stepObj);
            return indexEndList.map(indexEndX => GetFromTo(context, array, indexStart, Number(indexEndX), step));
        }
        else if (!TypeCheckHelper.IsArrayOfNumber(indexEndObj) && !TypeCheckHelper.IsArrayOfNumber(stepObj)) {
            const indexEnd = Number(indexEndObj);
            const step = Number(stepObj);
            return indexStartList.map(indexStartX => GetFromTo(context, array, Number(indexStartX), indexEnd, step));
        }
        else if (!TypeCheckHelper.IsArrayOfNumber(indexStartObj)) {
            if (indexEndObj.length === stepObj.length) {
                const indexStart = Number(indexStartObj);
                const result: any[] = [];
                for (let i = 0; i < indexEndList.Count; i += 1) {
                    const indexEnd = Number(indexEndList[i]);
                    const step = Number(stepList[i]);
                    result.push(GetFromTo(context, array, indexStart, indexEnd, step));
                }
                return result;
            }

            this.errorCollector.AddError(context, ErrorCode.NotEqualArayCount, `Array count must be equal: IndexEnd Array Count ${indexEndList.Count} Step Array Count ${stepList.Count}`);
        }
        else if (!TypeCheckHelper.IsArrayOfNumber(indexEndObj)) {
            if (indexStartList.length === stepList.length) {
                const indexEnd = Number(indexEndObj);
                const result = new List<object>(indexStartList.Count);
                for (let i = 0; i < indexStartList.Count; i += 1) {
                    const indexStart = Number(indexStartList[i]);
                    const step = Number(stepList[i]);
                    result.push(GetFromTo(context, array, indexStart, indexEnd, step));
                }
                return result;
            }

            this.errorCollector.AddError(context, ErrorCode.NotEqualArayCount, `Array count must be equal: IndexStart Array Count ${indexStartList.Count} Step Array Count ${stepList.Count}`);
        }
        else if (!TypeCheckHelper.IsArrayOfNumber(stepObj)) {
            if (indexStartList.length === indexEndList.length) {
                const step = Number(stepObj);
                const result = new List<object>(indexStartList.Count);
                for (let i = 0; i < indexStartList.Count; i += 1) {
                    const indexStart = Number(indexStartList[i]);
                    const indexEnd = Number(indexEndList[i]);
                    result.push(GetFromTo(context, array, indexStart, indexEnd, step));
                }
                return result;
            }

            this.errorCollector.AddError(context, ErrorCode.NotEqualArayCount, `Array count must be equal: IndexStart Array Count ${indexStartList.Count} IndexEnd Array Count ${indexEndList.Count}`);
        }
        else if (indexStartList.length === indexEndList.length && indexStartList.length === stepList.length) {
            const result = new List<object>(indexStartList.Count);
            for (let i = 0; i < indexStartList.Count; i += 1) {
                const indexStart = Number(indexStartList[i]);
                const indexEnd = Number(indexEndList[i]);
                const step = Number(stepList[i]);
                result.push(GetFromTo(context, array, indexStart, indexEnd, step));
            }
            return result;
        }
        else
            this.errorCollector.AddError(context, ErrorCode.NotEqualArayCount, `Array count must be equal: IndexStart Array Count ${indexStartList.Count} IndexEnd Array Count ${indexEndList.Count} Step Array Count ${stepList.Count}`);

        return null;
    }

    private GetFromTo(context: ParserRuleContext, list: any[], start: number, end: number, step: number = 1): any[] {
        if (step < 1 || step >= list.Count) {
            this.errorCollector.AddError(context, ErrorCode.StepNotCorrect, "The step can't be less 1 and higher then length of array!");
            return null;
        }

        const startIndex = start < 0 ? list.length + start : start;
        const endIndex = end < 0 ? list.length + end : end;

        if (((start < 0 && end < 0) || (start >= 0 && end >= 0))) {
            if (start >= end) {
                this.errorCollector.AddError(context, ErrorCode.StartEndIndexNotCorrect, "The startIndex can't be higher or equal to the endIndex!");
                return null;
            }
        }
        else if (start >= 0 && end < 0) {
            if (start >= endIndex) {
                this.errorCollector.AddError(context, ErrorCode.StartEndIndexNotCorrect, "The startIndex can't be higher or equal to the endIndex!");
                return null;
            }
        }
        else if (start < 0 && end >= 0) {
            if (startIndex >= end) {
                this.errorCollector.AddError(context, ErrorCode.StartEndIndexNotCorrect, "The startIndex can't be higher or equal to the endIndex!");
                return null;
            }
        }

        if (startIndex >= list.Count || endIndex > list.Count) {
            this.errorCollector.AddError(context, ErrorCode.StartEndIndexNotCorrect, "The startIndex/endIndex can't be higher to the length of the array!");
            return null;
        }
        else if (startIndex < 0 || endIndex < 0) {
            this.errorCollector.AddError(context, ErrorCode.StartEndIndexNotCorrect, "The startIndex/endIndex can't be less than 0!");
            return null;
        }

        const result = new List<object>();

        for (let i = startIndex; i < endIndex; i += step)
            result.push(list[i]);

        return result;
    }


    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsArray.
    public enterCheckFunction_IsArray(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsArray.
    public exitCheckFunction_IsArray(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => TypeCheckHelper.IsArray(x);
        this.node.Value = CalculationHelper.CalcAnyUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsBoolean.
    public enterCheckFunction_IsBoolean(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsBoolean.
    public exitCheckFunction_IsBoolean(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => TypeCheckHelper.IsBoolean(x);
        this.node.Value = CalculationHelper.CalcAnyUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsDateTime.
    public enterCheckFunction_IsDateTime(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsDateTime.
    public exitCheckFunction_IsDateTime(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => TypeCheckHelper.IsDateTime(x);
        this.node.Value = CalculationHelper.CalcAnyUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsNull.
    public enterCheckFunction_IsNull(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsNull.
    public exitCheckFunction_IsNull(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => x == null;
        this.node.Value = CalculationHelper.CalcAnyUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsNumber.
    public enterCheckFunction_IsNumber(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsNumber.
    public exitCheckFunction_IsNumber(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => TypeCheckHelper.IsNumber(x);
        this.node.Value = CalculationHelper.CalcAnyUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsString.
    public enterCheckFunction_IsString(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsString.
    public exitCheckFunction_IsString(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => TypeCheckHelper.IsString(x);
        this.node.Value = CalculationHelper.CalcAnyUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsWhitespace.
    public enterCheckFunction_IsWhitespace(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsWhitespace.
    public exitCheckFunction_IsWhitespace(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const stringCalculation = x => isStringNullOrWhitespace(x);
        this.node.Value = CalculationHelper.CalcStringOrStringListUnary(context, this.errorCollector, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_HasAny.
    public enterCheckFunction_HasAny(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_HasAny.
    public exitCheckFunction_HasAny(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const listCalculation = list => list.length > 0;
        const stringCalculation = x => x.Any();
        this.node.Value = CalculationHelper.CalcStringOrListUnary(context, this.errorCollector, listCalculation, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_HasDuplicates.
    public enterCheckFunction_HasDuplicates(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_HasDuplicates.
    public exitCheckFunction_HasDuplicates(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const listCalculation = list => list.filter((value, index, self) => self.indexOf(value) === index).length < list.length;
        const stringCalculation = x => list.filter((value, index, self) => self.indexOf(value) === index).length < x.length;
        this.node.Value = CalculationHelper.CalcStringOrListUnary(context, this.errorCollector, listCalculation, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_Concat.
    public enterFunction_Concat(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Function_Concat.
    public exitFunction_Concat(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const stringCalculation = (x, y) => x + y;
        const listCalculation = (x, y) => {
            let result = [];
            result = result.concat(x);
            result = result.concat(y);
            return result;
        };

        this.node.Value = CalculationHelper.CalcStringOrListBinary(context, this.errorCollector, listCalculation, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_Count.
    public enterFunction_Count(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Function_Count.
    public exitFunction_Count(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const listCalculation = x => x.length;
        const stringCalculation = x => x.length;

        this.node.Value = CalculationHelper.CalcStringOrListUnary(context, this.errorCollector, listCalculation, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_Distinc.
    public enterFunction_Distinc(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Function_Distinc.
    public exitFunction_Distinc(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const listCalculation = list => list.filter((value, index, self) => self.indexOf(value) === index);
        const stringCalculation = x => stringArrayToString(list.filter((value, index, self) => self.indexOf(value) === index));
        this.node.Value = CalculationHelper.CalcStringOrListUnary(context, this.errorCollector, listCalculation, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_Difference.
    public enterFunction_Difference(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }

    // Exit a parse tree produced by EveryGrammarParser#Function_Difference.
    public exitFunction_Difference(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const listCalculation = (x, y) => x.filter(value => !y.includes(value)).concat(y.filter(value => !x.includes(value)));
        const stringCalculation = (x, y) => {
            const first = stringToArray(x);
            const second = stringToArray(y);
            return stringArrayToString(listCalculation(first, second));
        };

        this.node.Value = CalculationHelper.CalcStringOrListBinary(context, this.errorCollector, listCalculation, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_Except.
    public enterFunction_Except(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Function_Except.
    public exitFunction_Except(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const listCalculation = (x, y) => x.filter(value => !y.includes(value));
        const stringCalculation = (x, y) => {
            const first = stringToArray(x);
            const second = stringToArray(y);
            return stringArrayToString(listCalculation(first, second));
        };

        this.node.Value = CalculationHelper.CalcStringOrListBinary(context, this.errorCollector, listCalculation, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_IndexOf.
    public enterFunction_IndexOf(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Function_IndexOf.
    public exitFunction_IndexOf(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        let list = null
        if (TypeCheckHelper.IsArray(childValues[0]))
            list = childValues[0];

        const value2 = childValues[1];

        if (!list)
            list = stringToArray(childValues[0].ToString());

        this.node.Value = list.IndexOf(value2);

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_IndexOfStart.
    public enterFunction_IndexOfStart(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Function_IndexOfStart.
    public exitFunction_IndexOfStart(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 3, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        let list = null
        if (TypeCheckHelper.IsArray(childValues[0]))
            list = childValues[0];

        const value2 = childValues[1];

        if (!TypeCheckHelper.IsNumber(childValues[2])) {
            this.errorCollector.AddError(context, ErrorCode.ThridNotNumber, "Third parameter must be a number");
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const startIndex = int.Parse(childValues[2].ToString());

        if (!list)
            list = stringToArray(childValues[0].ToString());

        this.node.Value = list.IndexOf(value2, startIndex);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_IndexOfStartEnd.
    public enterFunction_IndexOfStartEnd(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Function_IndexOfStartEnd.
    public exitFunction_IndexOfStartEnd(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 4, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        let list = null;
        if (TypeCheckHelper.IsArray(childValues[0]))
            list = childValues[0];

        const value2 = childValues[1];

        if (!TypeCheckHelper.IsNumber(childValues[2])) {
            this.errorCollector.AddError(context, ErrorCode.ThridNotNumber, "Third parameter must be a number");
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const startIndex = int.Parse(childValues[2].ToString());

        if (!TypeCheckHelper.IsNumber(childValues[3])) {
            this.errorCollector.AddError(context, ErrorCode.ForthNotNumber, "Forth parameter must be a number");
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const endIndex = int.Parse(childValues[3].ToString());

        if (!list)
            list = stringToArray(childValues[0].ToString());

        this.node.Value = list.slice(startIndex, endIndex - startIndex).indexOf(value2);

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_Lower.
    public enterFunction_Lower(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Function_Lower.
    public exitFunction_Lower(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const stringCalculation = x => x.toLowerCase();
        this.node.Value = CalculationHelper.CalcStringOrStringListUnary(context, this.errorCollector, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_Reverse.
    public enterFunction_Reverse(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Function_Reverse.
    public exitFunction_Reverse(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const listCalculation = list => list.reverse();
        const stringCalculation = x => x.reverse();
        this.node.Value = CalculationHelper.CalcStringOrListUnary(context, this.errorCollector, listCalculation, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_Upper.
    public enterFunction_Upper(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Function_Upper.
    public exitFunction_Upper(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const stringCalculation = x => x.toUpperCase(CultureInfo.InvariantCulture);
        this.node.Value = CalculationHelper.CalcStringOrStringListUnary(context, this.errorCollector, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_Sort.
    public enterFunction_Sort(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Function_Sort.
    public exitFunction_Sort(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const listCalculation = list => {
            const result = list.slice();
            result.sort();
            return result;
        };
        const stringCalculation = x => {
            const result = stringToArray(x);
            result.sort();
            return stringArrayToString(result);
        };
        this.node.Value = CalculationHelper.CalcStringOrListUnary(context, this.errorCollector, listCalculation, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Function_Trim.
    public enterFunction_Trim(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Function_Trim.
    public exitFunction_Trim(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const listCalculation = list => {
            let i = 0;
            for (; i < list.Count; i += 1) {
                const obj = list[i];
                if (!obj || (TypeCheckHelper.IsString(obj) && isStringNullOrWhitespace(obj)))
                    continue;
                break;
            }

            let k = list.Count - 1;
            for (; k > -1; k -= 1) {
                const obj = list[k];
                if (!obj || (TypeCheckHelper.IsString(obj) && isStringNullOrWhitespace(obj)))
                    continue;
                break;
            }

            if (i === list.Count || k === -1)
                return [];

            k += 1;

            return list.slice(i, k - i);
        };
        const stringCalculation = x => x.trim();
        this.node.Value = CalculationHelper.CalcStringOrListUnary(context, this.errorCollector, listCalculation, stringCalculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Abs.
    public enterMath_Abs(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Abs.
    public exitMath_Abs(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.abs(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ACos.
    public enterMath_ACos(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ACos.
    public exitMath_ACos(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.acos(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ACosH.
    public enterMath_ACosH(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ACosH.
    public exitMath_ACosH(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Acosh(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ASin.
    public enterMath_ASin(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ASin.
    public exitMath_ASin(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.Asin(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ASinH.
    public enterMath_ASinH(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ASinH.
    public exitMath_ASinH(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Asinh(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ATan.
    public enterMath_ATan(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ATan.
    public exitMath_ATan(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.Atan(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ATan2.
    public enterMath_ATan2(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ATan2.
    public exitMath_ATan2(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => Math.Atan2(Number(x1), Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ATanH.
    public enterMath_ATanH(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ATanH.
    public exitMath_ATanH(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Atanh(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Cbrt.
    public enterMath_Cbrt(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Cbrt.
    public exitMath_Cbrt(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.pow(Number(x), 1.0 / 3.0);
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Cos.
    public enterMath_Cos(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Cos.
    public exitMath_Cos(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.cos(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_CosH.
    public enterMath_CosH(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_CosH.
    public exitMath_CosH(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.cosh(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Ceilling.
    public enterMath_Ceilling(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Ceilling.
    public exitMath_Ceilling(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.ceil(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Clamp.
    public enterMath_Clamp(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Clamp.
    public exitMath_Clamp(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 3, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsNumberOrArrayOfNumbers(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        let valueList = null;
        if (TypeCheckHelper.IsArray(childValues[0]))
            valueList = childValues[0];

        let value = 0;
        if (!valueList)
            value = Number(childValues[0]);

        let minList = null;
        if (TypeCheckHelper.IsArray(childValues[1]))
            minList = childValues[1];

        let min = 0;
        if (!minList)
            min = Number(childValues[1]);

        let maxList = null;
        if (TypeCheckHelper.IsArray(childValues[2]))
            maxList = childValues[2];

        let max = 0;
        if (!maxList)
            max = Number(childValues[2]);

        if (!valueList && !minList && !maxList) {
            this.node.Value = value < min ? min : value > max ? max : value;
        }
        else if (valueList) {
            if (!minList && !maxList) {
                this.node.Value = valueList.map(x => {
                    const valueX = Number(x);
                    return valueX < min ? min : valueX > max ? max : value;
                });
            }
            else if (!minList && maxList) {
                if (valueList.length == maxList.length) {
                    const result = [];
                    for (let i = 0; i < valueList.Count; ++i) {
                        value = Number(valueList[i]);
                        max = Number(maxList[i]);
                        result.push((value < min ? min : value > max ? max : value));
                    }
                    this.node.Value = result;
                }
                else {
                    this.errorCollector.AddError(context, ErrorCode.NotEqualArayCount, `Array count must be equal: Array1 Count ${valueList.Count} Array3 Count ${maxList.Count}`);
                    this.node.Value = null;
                }
            }
            else if (minList && !maxList) {
                if (valueList.length == maxList.length) {
                    const result = [];
                    for (let i = 0; i < valueList.Count; ++i) {
                        value = Number(valueList[i]);
                        min = Number(minList[i]);
                        result.push((value < min ? min : value > max ? max : value));
                    }
                    this.node.Value = result;
                }
                else {
                    this.errorCollector.AddError(context, ErrorCode.NotEqualArayCount, `Array count must be equal: Array1 Count ${valueList.Count} Array3 Count ${maxList.Count}`);
                    this.node.Value = null;
                }
            }
            else if (valueList.length == minList.length && minList.length == maxList.length) {
                const result = [];
                for (let i = 0; i < valueList.Count; i += 1) {
                    const valueX = Number(valueList[i]);
                    const minX = Number(minList[i]);
                    const maxX = Number(maxList[i]);

                    result.push(valueX < minX ? minX : valueX > maxX ? maxX : valueX);
                }
                this.node.Value = result;
            }
            else {
                this.errorCollector.AddError(context, ErrorCode.NotEqualArayCount, `Array count must be equal: Array1 Count ${valueList.Count} Array2 Count ${minList.Count} Array3 Count ${maxList.Count}`);
                this.node.Value = null;
            }
        }

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_CrossSum.
    public enterMath_CrossSum(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_CrossSum.
    public exitMath_CrossSum(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => {
            let value = 0;
            stringToArray(Number(x).toString()).forEach(x => value += Number(x));
            return value;
        };
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Derivative.
    public enterMath_Derivative(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Derivative.
    public exitMath_Derivative(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Exp.
    public enterMath_Exp(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Exp.
    public exitMath_Exp(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.exp(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Floor.
    public enterMath_Floor(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Floor.
    public exitMath_Floor(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.floor(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Integration.
    public enterMath_Integration(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Integration.
    public exitMath_Integration(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Log.
    public enterMath_Log(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Log.
    public exitMath_Log(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => Math.log(Number(x1)) / Math.log(Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Log2.
    public enterMath_Log2(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Log2.
    public exitMath_Log2(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.log2(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Log10.
    public enterMath_Log10(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Log10.
    public exitMath_Log10(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.log10(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Max_Array.
    public enterMath_Max_Array(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Max_Array.
    public exitMath_Max_Array(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 1, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsNumberOrArrayOfNumbers(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        if (TypeCheckHelper.IsArray(childValues[0])) {
            let max = Number.MIN_VALUE;
            childValues[0].forEach(value => max = Math.max(max, Number(value)));
            this.node.Value = max;
        }
        else
            this.node.Value = Number(childValues[0]);

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Max_Two.
    public enterMath_Max_Two(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Max_Two.
    public exitMath_Max_Two(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => Math.max(Number(x1), Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Min_Array.
    public enterMath_Min_Array(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Min_Array.
    public exitMath_Min_Array(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 1, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsNumberOrArrayOfNumbers(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        if (TypeCheckHelper.IsArray(childValues[0])) {
            let min = Number.MAX_VALUE;
            childValues[0].forEach(value => min = Math.min(min, Number(value)));
            this.node.Value = min;
        }
        else
            this.node.Value = Number(childValues[0]);

        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Min_Two.
    public enterMath_Min_Two(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Min_Two.
    public exitMath_Min_Two(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => Math.min(Number(x1), Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Power.
    public enterMath_Power(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Power.
    public exitMath_Power(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => Math.pow(Number(x1), Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Round_Not_Decimal.
    public enterMath_Round_Not_Decimal(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Round_Not_Decimal.
    public exitMath_Round_Not_Decimal(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.round(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Round_Decimal.
    public enterMath_Round_Decimal(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Round_Decimal.
    public exitMath_Round_Decimal(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => Math.Round(Number(x1), Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Root.
    public enterMath_Root(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Root.
    public exitMath_Root(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x1, x2) => Math.pow(Number(x1), 1 / Number(x2));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Sin.
    public enterMath_Sin(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Sin.
    public exitMath_Sin(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.sin(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_SinH.
    public enterMath_SinH(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_SinH.
    public exitMath_SinH(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.sinh(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Sqrt.
    public enterMath_Sqrt(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Sqrt.
    public exitMath_Sqrt(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.sqrt(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Tan.
    public enterMath_Tan(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Tan.
    public exitMath_Tan(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.tan(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_TanH.
    public enterMath_TanH(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_TanH.
    public exitMath_TanH(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.tanh(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Truncate.
    public enterMath_Truncate(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Truncate.
    public exitMath_Truncate(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Math.trunc(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Norm.
    public enterMath_Norm(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Norm.
    public exitMath_Norm(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsNumberOrArrayOfNumbers(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const list = childValues[0] as List<object>;

        if (list is null)
        {
            this.errorCollector.AddError(context, ErrorCode.FirstNotNumberArray, "First parameter must be an Array");
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        if (!double.TryParse(childValues[1].ToString(), outconst value)) {
            this.errorCollector.AddError(context, ErrorCode.SecondNotNumber, "Second parameter must be a number");
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        this.node.Value = Vector<double>.Build.DenseOfArray(Array.ConvertAll(list.ToArray(), y => Number(y))).Norm(value);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_EulerNorm.
    public enterMath_EulerNorm(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_EulerNorm.
    public exitMath_EulerNorm(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Vector<double>.Build.DenseOfArray(Array.ConvertAll(x.ToArray(), y => Number(y))).L2Norm();
        this.node.Value = CalculationHelper.CalcListOfNumbersUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_MaxNorm.
    public enterMath_MaxNorm(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_MaxNorm.
    public exitMath_MaxNorm(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => Vector<double>.Build.DenseOfArray(Array.ConvertAll(x.ToArray(), y => Number(y))).InfinityNorm();
        this.node.Value = CalculationHelper.CalcListOfNumbersUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_GreatesCommonDivisor.
    public enterMath_GreatesCommonDivisor(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_GreatesCommonDivisor.
    public exitMath_GreatesCommonDivisor(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x, y) => MathNet.Numerics.Euclid.GreatestCommonDivisor(Number(x), Number(y));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_LeastCommonMultiple.
    public enterMath_LeastCommonMultiple(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_LeastCommonMultiple.
    public exitMath_LeastCommonMultiple(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x, y) => MathNet.Numerics.Euclid.LeastCommonMultiple(Number(x), Number(y));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_DotProduct.
    public enterMath_DotProduct(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_DotProduct.
    public exitMath_DotProduct(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x, z) =>
            Vector<double>.Build.DenseOfArray(Array.ConvertAll(x.ToArray(), converter)).DotProduct(
                Vector<double>.Build.DenseOfArray(Array.ConvertAll(z.ToArray(), converter)));

        this.node.Value = CalculationHelper.CalcListOfNumbersBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Binomila.
    public enterMath_Binomila(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Binomila.
    public exitMath_Binomila(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (x, y) => MathNet.Numerics.SpecialFunctions.Binomial(Number(x), Number(y));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ACot.
    public enterMath_ACot(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ACot.
    public exitMath_ACot(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Acot(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ACotH.
    public enterMath_ACotH(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ACotH.
    public exitMath_ACotH(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Acoth(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ACsc.
    public enterMath_ACsc(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ACsc.
    public exitMath_ACsc(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Acsc(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ACscH.
    public enterMath_ACscH(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ACscH.
    public exitMath_ACscH(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Acsch(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ASec.
    public enterMath_ASec(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ASec.
    public exitMath_ASec(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Asec(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_ASecH.
    public enterMath_ASecH(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_ASecH.
    public exitMath_ASecH(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Asech(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Cot.
    public enterMath_Cot(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Cot.
    public exitMath_Cot(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Cot(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_CotH.
    public enterMath_CotH(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_CotH.
    public exitMath_CotH(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Coth(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Csc.
    public enterMath_Csc(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Csc.
    public exitMath_Csc(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Csc(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_CscH.
    public enterMath_CscH(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_CscH.
    public exitMath_CscH(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Csch(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_Sec.
    public enterMath_Sec(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_Sec.
    public exitMath_Sec(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Sec(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#Math_SecH.
    public enterMath_SecH(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#Math_SecH.
    public exitMath_SecH(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = x => MathNet.Numerics.Trig.Sech(Number(x));
        this.node.Value = CalculationHelper.CalcNumericOrNumericArrayUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_CoVariance.
    public enterMathStatistic_CoVariance(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_CoVariance.
    public exitMathStatistic_CoVariance(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (list1, list2) => (object)ArrayStatistics.Covariance(Array.ConvertAll(list1.ToArray(), x => Number(x)), Array.ConvertAll(list2.ToArray(), x => Number(x)));
        this.node.Value = CalculationHelper.CalcListOfNumbersBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_Mean.
    public enterMathStatistic_Mean(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_Mean.
    public exitMathStatistic_Mean(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = list => (object)ArrayStatistics.Mean(Array.ConvertAll(list.ToArray(), x => Number(x)));
        this.node.Value = CalculationHelper.CalcListOfNumbersUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_Median.
    public enterMathStatistic_Median(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_Median.
    public exitMathStatistic_Median(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = list => (object)ArrayStatistics.MedianInplace(Array.ConvertAll(list.ToArray(), x => Number(x)));
        this.node.Value = CalculationHelper.CalcListOfNumbersUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_Pearson.
    public enterMathStatistic_Pearson(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_Pearson.
    public exitMathStatistic_Pearson(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (list1, list2) => (object)Correlation.Pearson(Array.ConvertAll(list1.ToArray(), x => Number(x)), Array.ConvertAll(list2.ToArray(), x => Number(x)));
        this.node.Value = CalculationHelper.CalcListOfNumbersBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_Quantil.
    public enterMathStatistic_Quantil(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_Quantil.
    public exitMathStatistic_Quantil(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (!this.errorCollector.CheckParamsCount(context, 2, childValues) ||
            this.errorCollector.CheckIsNull(context, childValues) ||
            !this.errorCollector.CheckIsNumberOrArrayOfNumbers(context, childValues)) {
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        const list = childValues[0] as List<object>;

        if (list is null)
        {
            this.errorCollector.AddError(context, ErrorCode.FirstNotNumberArray, "First parameter must be an Array");
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        if (!double.TryParse(childValues[1].ToString(), outconst value)) {
            this.errorCollector.AddError(context, ErrorCode.SecondNotNumber, "Second parameter must be a number");
            this.node.Value = NaN;
            this.node = this.node.Parent;
            return;
        }

        this.node.Value = ArrayStatistics.QuantileInplace(list.ConvertAll(x => Number(x)).ToArray(), value);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_Spearman.
    public enterMathStatistic_Spearman(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_Spearman.
    public exitMathStatistic_Spearman(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = (list1, list2) => (object)Correlation.Spearman(Array.ConvertAll(list1.ToArray(), x => Number(x)), Array.ConvertAll(list2.ToArray(), x => Number(x)));
        this.node.Value = CalculationHelper.CalcListOfNumbersBinary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_StD.
    public enterMathStatistic_StD(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_StD.
    public exitMathStatistic_StD(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = list => (object)ArrayStatistics.StandardDeviation(Array.ConvertAll(list.ToArray(), x => Number(x)));
        this.node.Value = CalculationHelper.CalcListOfNumbersUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_Variance.
    public enterMathStatistic_Variance(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_Variance.
    public exitMathStatistic_Variance(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        const calculation = list => (object)ArrayStatistics.Variance(Array.ConvertAll(list.ToArray(), x => Number(x)));
        this.node.Value = CalculationHelper.CalcListOfNumbersUnary(context, this.errorCollector, calculation, this.node.Children);
        this.node = this.node.Parent;
    }



    // Enter a parse tree produced by EveryGrammarParser#expr_args.
    public enterExpr_args(context: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#expr_args.
    public exitExpr_args(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArrayCreation_Empty.
    public enterArrayCreation_Empty(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode([]);
    }


    // Exit a parse tree produced by EveryGrammarParser#ArrayCreation_Empty.
    public exitArrayCreation_Empty(context: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArrayCreation.
    public enterArrayCreation(context: ParserRuleContext): void {
        if (this.node)
            this.node = this.node.AddChildNode();
    }


    // Exit a parse tree produced by EveryGrammarParser#ArrayCreation.
    public exitArrayCreation(context: ParserRuleContext): void {
        if(!this.node)
            return;
            
        if (!this.errorCollector.CheckHasParams(context, this.node.Children)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        const childValues = this.node.Children.map(child => child.Value);

        if (this.errorCollector.CheckIsNull(context, childValues)) {
            this.node.Value = null;
            this.node = this.node.Parent;
            return;
        }

        this.node.Value = childValues.slice();
        this.node = this.node.Parent;
    }
}
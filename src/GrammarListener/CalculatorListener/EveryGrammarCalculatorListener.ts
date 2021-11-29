// Generated from EveryGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import { ParserRuleContext } from 'antlr4';
import { ErrorNode, TerminalNode } from 'antlr4/tree/Tree';
import { Argument } from '../../Argument';
import EveryGrammarListener from '../../EveryGrammarListener';
import { ErrorCollector } from '../ErrorCollector';
import { NodeCalculator } from './NodeCalculator';

// This class defines a complete listener for a parse tree produced by EveryGrammarParser.
export class EveryGrammarCalculatorListener implements EveryGrammarListener {

    private node?: NodeCalculator;
    private result: any;
    private arguments: Argument[];

    public Result = () => this.result;

    public errorCollector: ErrorCollector;

    constructor(args: Argument[]) {
        this.arguments = args;
        this.errorCollector = new ErrorCollector();
    }


    public visitTerminal(node: TerminalNode): void { }


    public visitErrorNode(node: ErrorNode): void { }


    public enterEveryRule(node: ParserRuleContext): void { }


    public exitEveryRule(node: ParserRuleContext): void { }


    // Enter a parse tree produced by EveryGrammarParser#startRule.
    public enterStartRule(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#startRule.
    public exitStartRule(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#expression.
    public enterExpression(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#expression.
    public exitExpression(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#IfElse_Next.
    public enterIfElse_Next(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#IfElse_Next.
    public exitIfElse_Next(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing.
    public enterArraySlicing(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing.
    public exitArraySlicing(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#IfElse.
    public enterIfElse(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#IfElse.
    public exitIfElse(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#InnerIfElse_Next.
    public enterInnerIfElse_Next(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#InnerIfElse_Next.
    public exitInnerIfElse_Next(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#InnerIfElse.
    public enterInnerIfElse(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#InnerIfElse.
    public exitInnerIfElse(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BoolOr_Next.
    public enterBoolOr_Next(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BoolOr_Next.
    public exitBoolOr_Next(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BoolOr.
    public enterBoolOr(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BoolOr.
    public exitBoolOr(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BoolXOr_Next.
    public enterBoolXOr_Next(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BoolXOr_Next.
    public exitBoolXOr_Next(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BoolXOr.
    public enterBoolXOr(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BoolXOr.
    public exitBoolXOr(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BoolAnd_Next.
    public enterBoolAnd_Next(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BoolAnd_Next.
    public exitBoolAnd_Next(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BoolAnd.
    public enterBoolAnd(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BoolAnd.
    public exitBoolAnd(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Equality_Contains.
    public enterEquality_Contains(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Equality_Contains.
    public exitEquality_Contains(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Equality_Next.
    public enterEquality_Next(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Equality_Next.
    public exitEquality_Next(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Equality_Equal.
    public enterEquality_Equal(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Equality_Equal.
    public exitEquality_Equal(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Equality_NotEqualIgnoreCase.
    public enterEquality_NotEqualIgnoreCase(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Equality_NotEqualIgnoreCase.
    public exitEquality_NotEqualIgnoreCase(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Equality_NotEqual.
    public enterEquality_NotEqual(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Equality_NotEqual.
    public exitEquality_NotEqual(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Equality_NotContains.
    public enterEquality_NotContains(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Equality_NotContains.
    public exitEquality_NotContains(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Equality_EqualIgnoreCase.
    public enterEquality_EqualIgnoreCase(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Equality_EqualIgnoreCase.
    public exitEquality_EqualIgnoreCase(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Check_Next.
    public enterCheck_Next(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Check_Next.
    public exitCheck_Next(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Check_Greater.
    public enterCheck_Greater(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Check_Greater.
    public exitCheck_Greater(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Check_GreaterEqual.
    public enterCheck_GreaterEqual(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Check_GreaterEqual.
    public exitCheck_GreaterEqual(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Check_Lower.
    public enterCheck_Lower(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Check_Lower.
    public exitCheck_Lower(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Check_LowerEqual.
    public enterCheck_LowerEqual(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Check_LowerEqual.
    public exitCheck_LowerEqual(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BitOR.
    public enterBitOR(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BitOR.
    public exitBitOR(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BitOr_Next.
    public enterBitOr_Next(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BitOr_Next.
    public exitBitOr_Next(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BitAnd.
    public enterBitAnd(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BitAnd.
    public exitBitAnd(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#BitAnd_Next.
    public enterBitAnd_Next(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#BitAnd_Next.
    public exitBitAnd_Next(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Line_Addition.
    public enterLine_Addition(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Line_Addition.
    public exitLine_Addition(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Line_Subtraction.
    public enterLine_Subtraction(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Line_Subtraction.
    public exitLine_Subtraction(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Line_Next.
    public enterLine_Next(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Line_Next.
    public exitLine_Next(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_PowerOperator.
    public enterPointTerm_PowerOperator(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_PowerOperator.
    public exitPointTerm_PowerOperator(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_Modulo.
    public enterPointTerm_Modulo(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_Modulo.
    public exitPointTerm_Modulo(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_Multiply.
    public enterPointTerm_Multiply(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_Multiply.
    public exitPointTerm_Multiply(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_BitShiftLeft.
    public enterPointTerm_BitShiftLeft(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_BitShiftLeft.
    public exitPointTerm_BitShiftLeft(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_IntegerDivision.
    public enterPointTerm_IntegerDivision(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_IntegerDivision.
    public exitPointTerm_IntegerDivision(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_BitShiftRight.
    public enterPointTerm_BitShiftRight(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_BitShiftRight.
    public exitPointTerm_BitShiftRight(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_Divide.
    public enterPointTerm_Divide(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_Divide.
    public exitPointTerm_Divide(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#PointTerm_Next.
    public enterPointTerm_Next(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#PointTerm_Next.
    public exitPointTerm_Next(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Not.
    public enterFactor_Not(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Not.
    public exitFactor_Not(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Minus.
    public enterFactor_Minus(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Minus.
    public exitFactor_Minus(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Plus.
    public enterFactor_Plus(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Plus.
    public exitFactor_Plus(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Tilde.
    public enterFactor_Tilde(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Tilde.
    public exitFactor_Tilde(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Factorial.
    public enterFactor_Factorial(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Factorial.
    public exitFactor_Factorial(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Brackets.
    public enterFactor_Brackets(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Brackets.
    public exitFactor_Brackets(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_True.
    public enterFactor_True(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_True.
    public exitFactor_True(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_False.
    public enterFactor_False(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_False.
    public exitFactor_False(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Integer.
    public enterFactor_Integer(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Integer.
    public exitFactor_Integer(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Double.
    public enterFactor_Double(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Double.
    public exitFactor_Double(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Variable.
    public enterFactor_Variable(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Variable.
    public exitFactor_Variable(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_ObjectVariables.
    public enterFactor_ObjectVariables(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_ObjectVariables.
    public exitFactor_ObjectVariables(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_String.
    public enterFactor_String(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_String.
    public exitFactor_String(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_DateTimeTerm.
    public enterFactor_DateTimeTerm(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_DateTimeTerm.
    public exitFactor_DateTimeTerm(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_Array.
    public enterFactor_Array(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_Array.
    public exitFactor_Array(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_DefaultFunction.
    public enterFactor_DefaultFunction(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_DefaultFunction.
    public exitFactor_DefaultFunction(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_CheckFunction.
    public enterFactor_CheckFunction(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_CheckFunction.
    public exitFactor_CheckFunction(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_ConvertFunction.
    public enterFactor_ConvertFunction(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_ConvertFunction.
    public exitFactor_ConvertFunction(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_MathFunction.
    public enterFactor_MathFunction(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_MathFunction.
    public exitFactor_MathFunction(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_RandomFunction.
    public enterFactor_RandomFunction(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_RandomFunction.
    public exitFactor_RandomFunction(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Factor_StatisticMathFunction.
    public enterFactor_StatisticMathFunction(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Factor_StatisticMathFunction.
    public exitFactor_StatisticMathFunction(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Random_Decimal.
    public enterRandom_Decimal(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Random_Decimal.
    public exitRandom_Decimal(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Random_DecimalArray.
    public enterRandom_DecimalArray(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Random_DecimalArray.
    public exitRandom_DecimalArray(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Random_DecimalMinMax.
    public enterRandom_DecimalMinMax(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Random_DecimalMinMax.
    public exitRandom_DecimalMinMax(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Random_DecimalArrayMinMax.
    public enterRandom_DecimalArrayMinMax(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Random_DecimalArrayMinMax.
    public exitRandom_DecimalArrayMinMax(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Random_Integer.
    public enterRandom_Integer(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Random_Integer.
    public exitRandom_Integer(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Random_IntegerArray.
    public enterRandom_IntegerArray(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Random_IntegerArray.
    public exitRandom_IntegerArray(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Random_IntegerMinMax.
    public enterRandom_IntegerMinMax(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Random_IntegerMinMax.
    public exitRandom_IntegerMinMax(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Random_IntegerArrayMinMax.
    public enterRandom_IntegerArrayMinMax(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Random_IntegerArrayMinMax.
    public exitRandom_IntegerArrayMinMax(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Convert_ToArray.
    public enterConvert_ToArray(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Convert_ToArray.
    public exitConvert_ToArray(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Convert_ToBoolean.
    public enterConvert_ToBoolean(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Convert_ToBoolean.
    public exitConvert_ToBoolean(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Convert_ToNumber.
    public enterConvert_ToNumber(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Convert_ToNumber.
    public exitConvert_ToNumber(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Convert_ToString.
    public enterConvert_ToString(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Convert_ToString.
    public exitConvert_ToString(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Convert_DegreeToGrad.
    public enterConvert_DegreeToGrad(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Convert_DegreeToGrad.
    public exitConvert_DegreeToGrad(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Convert_DegreeToRadian.
    public enterConvert_DegreeToRadian(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Convert_DegreeToRadian.
    public exitConvert_DegreeToRadian(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Convert_GradToDegree.
    public enterConvert_GradToDegree(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Convert_GradToDegree.
    public exitConvert_GradToDegree(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Convert_GradToRadian.
    public enterConvert_GradToRadian(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Convert_GradToRadian.
    public exitConvert_GradToRadian(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Convert_RadianToDegree.
    public enterConvert_RadianToDegree(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Convert_RadianToDegree.
    public exitConvert_RadianToDegree(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Convert_RadianToGrad.
    public enterConvert_RadianToGrad(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Convert_RadianToGrad.
    public exitConvert_RadianToGrad(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#DateTime_Expression.
    public enterDateTime_Expression(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#DateTime_Expression.
    public exitDateTime_Expression(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#DateTime_DateEntry.
    public enterDateTime_DateEntry(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#DateTime_DateEntry.
    public exitDateTime_DateEntry(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#DateTime_DateHour.
    public enterDateTime_DateHour(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#DateTime_DateHour.
    public exitDateTime_DateHour(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#DateTime_DateHourMinute.
    public enterDateTime_DateHourMinute(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#DateTime_DateHourMinute.
    public exitDateTime_DateHourMinute(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#DateTime_DateHourMinuteSeconds.
    public enterDateTime_DateHourMinuteSeconds(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#DateTime_DateHourMinuteSeconds.
    public exitDateTime_DateHourMinuteSeconds(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#DateTime_Full.
    public enterDateTime_Full(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#DateTime_Full.
    public exitDateTime_Full(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_Indexing.
    public enterArraySlicing_Indexing(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_Indexing.
    public exitArraySlicing_Indexing(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_Slicing.
    public enterArraySlicing_Slicing(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_Slicing.
    public exitArraySlicing_Slicing(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_StepSlicing.
    public enterArraySlicing_StepSlicing(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_StepSlicing.
    public exitArraySlicing_StepSlicing(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_StartSlicing.
    public enterArraySlicing_StartSlicing(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_StartSlicing.
    public exitArraySlicing_StartSlicing(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_StartStepSlicing.
    public enterArraySlicing_StartStepSlicing(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_StartStepSlicing.
    public exitArraySlicing_StartStepSlicing(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_EndSlicing.
    public enterArraySlicing_EndSlicing(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_EndSlicing.
    public exitArraySlicing_EndSlicing(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_EndStepSlicing.
    public enterArraySlicing_EndStepSlicing(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_EndStepSlicing.
    public exitArraySlicing_EndStepSlicing(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArraySlicing_AllStepSlicing.
    public enterArraySlicing_AllStepSlicing(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArraySlicing_AllStepSlicing.
    public exitArraySlicing_AllStepSlicing(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsArray.
    public enterCheckFunction_IsArray(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsArray.
    public exitCheckFunction_IsArray(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsBoolean.
    public enterCheckFunction_IsBoolean(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsBoolean.
    public exitCheckFunction_IsBoolean(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsDateTime.
    public enterCheckFunction_IsDateTime(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsDateTime.
    public exitCheckFunction_IsDateTime(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsNull.
    public enterCheckFunction_IsNull(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsNull.
    public exitCheckFunction_IsNull(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsNumber.
    public enterCheckFunction_IsNumber(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsNumber.
    public exitCheckFunction_IsNumber(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsString.
    public enterCheckFunction_IsString(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsString.
    public exitCheckFunction_IsString(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsWhitespace.
    public enterCheckFunction_IsWhitespace(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsWhitespace.
    public exitCheckFunction_IsWhitespace(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_HasAny.
    public enterCheckFunction_HasAny(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_HasAny.
    public exitCheckFunction_HasAny(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#CheckFunction_HasDuplicates.
    public enterCheckFunction_HasDuplicates(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#CheckFunction_HasDuplicates.
    public exitCheckFunction_HasDuplicates(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_Concat.
    public enterFunction_Concat(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_Concat.
    public exitFunction_Concat(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_Count.
    public enterFunction_Count(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_Count.
    public exitFunction_Count(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_Distinc.
    public enterFunction_Distinc(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_Distinc.
    public exitFunction_Distinc(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_Difference.
    public enterFunction_Difference(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_Difference.
    public exitFunction_Difference(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_Except.
    public enterFunction_Except(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_Except.
    public exitFunction_Except(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_IndexOf.
    public enterFunction_IndexOf(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_IndexOf.
    public exitFunction_IndexOf(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_IndexOfStart.
    public enterFunction_IndexOfStart(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_IndexOfStart.
    public exitFunction_IndexOfStart(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_IndexOfStartEnd.
    public enterFunction_IndexOfStartEnd(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_IndexOfStartEnd.
    public exitFunction_IndexOfStartEnd(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_Lower.
    public enterFunction_Lower(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_Lower.
    public exitFunction_Lower(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_Reverse.
    public enterFunction_Reverse(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_Reverse.
    public exitFunction_Reverse(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_Upper.
    public enterFunction_Upper(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_Upper.
    public exitFunction_Upper(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_Sort.
    public enterFunction_Sort(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_Sort.
    public exitFunction_Sort(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Function_Trim.
    public enterFunction_Trim(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Function_Trim.
    public exitFunction_Trim(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Abs.
    public enterMath_Abs(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Abs.
    public exitMath_Abs(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ACos.
    public enterMath_ACos(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ACos.
    public exitMath_ACos(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ACosH.
    public enterMath_ACosH(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ACosH.
    public exitMath_ACosH(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ASin.
    public enterMath_ASin(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ASin.
    public exitMath_ASin(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ASinH.
    public enterMath_ASinH(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ASinH.
    public exitMath_ASinH(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ATan.
    public enterMath_ATan(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ATan.
    public exitMath_ATan(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ATan2.
    public enterMath_ATan2(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ATan2.
    public exitMath_ATan2(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ATanH.
    public enterMath_ATanH(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ATanH.
    public exitMath_ATanH(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Cbrt.
    public enterMath_Cbrt(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Cbrt.
    public exitMath_Cbrt(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Cos.
    public enterMath_Cos(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Cos.
    public exitMath_Cos(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_CosH.
    public enterMath_CosH(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_CosH.
    public exitMath_CosH(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Ceilling.
    public enterMath_Ceilling(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Ceilling.
    public exitMath_Ceilling(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Clamp.
    public enterMath_Clamp(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Clamp.
    public exitMath_Clamp(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_CrossSum.
    public enterMath_CrossSum(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_CrossSum.
    public exitMath_CrossSum(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Derivative.
    public enterMath_Derivative(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Derivative.
    public exitMath_Derivative(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Exp.
    public enterMath_Exp(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Exp.
    public exitMath_Exp(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Floor.
    public enterMath_Floor(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Floor.
    public exitMath_Floor(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Integration.
    public enterMath_Integration(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Integration.
    public exitMath_Integration(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Log.
    public enterMath_Log(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Log.
    public exitMath_Log(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Log2.
    public enterMath_Log2(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Log2.
    public exitMath_Log2(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Log10.
    public enterMath_Log10(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Log10.
    public exitMath_Log10(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Max_Array.
    public enterMath_Max_Array(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Max_Array.
    public exitMath_Max_Array(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Max_Two.
    public enterMath_Max_Two(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Max_Two.
    public exitMath_Max_Two(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Min_Array.
    public enterMath_Min_Array(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Min_Array.
    public exitMath_Min_Array(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Min_Two.
    public enterMath_Min_Two(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Min_Two.
    public exitMath_Min_Two(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Power.
    public enterMath_Power(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Power.
    public exitMath_Power(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Round_Not_Decimal.
    public enterMath_Round_Not_Decimal(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Round_Not_Decimal.
    public exitMath_Round_Not_Decimal(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Round_Decimal.
    public enterMath_Round_Decimal(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Round_Decimal.
    public exitMath_Round_Decimal(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Root.
    public enterMath_Root(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Root.
    public exitMath_Root(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Sin.
    public enterMath_Sin(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Sin.
    public exitMath_Sin(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_SinH.
    public enterMath_SinH(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_SinH.
    public exitMath_SinH(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Sqrt.
    public enterMath_Sqrt(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Sqrt.
    public exitMath_Sqrt(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Tan.
    public enterMath_Tan(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Tan.
    public exitMath_Tan(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_TanH.
    public enterMath_TanH(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_TanH.
    public exitMath_TanH(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Truncate.
    public enterMath_Truncate(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Truncate.
    public exitMath_Truncate(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Norm.
    public enterMath_Norm(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Norm.
    public exitMath_Norm(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_EulerNorm.
    public enterMath_EulerNorm(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_EulerNorm.
    public exitMath_EulerNorm(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_MaxNorm.
    public enterMath_MaxNorm(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_MaxNorm.
    public exitMath_MaxNorm(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_GreatesCommonDivisor.
    public enterMath_GreatesCommonDivisor(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_GreatesCommonDivisor.
    public exitMath_GreatesCommonDivisor(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_LeastCommonMultiple.
    public enterMath_LeastCommonMultiple(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_LeastCommonMultiple.
    public exitMath_LeastCommonMultiple(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_DotProduct.
    public enterMath_DotProduct(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_DotProduct.
    public exitMath_DotProduct(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Binomila.
    public enterMath_Binomila(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Binomila.
    public exitMath_Binomila(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ACot.
    public enterMath_ACot(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ACot.
    public exitMath_ACot(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ACotH.
    public enterMath_ACotH(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ACotH.
    public exitMath_ACotH(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ACsc.
    public enterMath_ACsc(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ACsc.
    public exitMath_ACsc(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ACscH.
    public enterMath_ACscH(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ACscH.
    public exitMath_ACscH(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ASec.
    public enterMath_ASec(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ASec.
    public exitMath_ASec(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_ASecH.
    public enterMath_ASecH(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_ASecH.
    public exitMath_ASecH(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Cot.
    public enterMath_Cot(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Cot.
    public exitMath_Cot(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_CotH.
    public enterMath_CotH(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_CotH.
    public exitMath_CotH(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Csc.
    public enterMath_Csc(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Csc.
    public exitMath_Csc(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_CscH.
    public enterMath_CscH(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_CscH.
    public exitMath_CscH(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_Sec.
    public enterMath_Sec(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_Sec.
    public exitMath_Sec(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#Math_SecH.
    public enterMath_SecH(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#Math_SecH.
    public exitMath_SecH(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_CoVariance.
    public enterMathStatistic_CoVariance(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_CoVariance.
    public exitMathStatistic_CoVariance(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_Mean.
    public enterMathStatistic_Mean(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_Mean.
    public exitMathStatistic_Mean(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_Median.
    public enterMathStatistic_Median(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_Median.
    public exitMathStatistic_Median(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_Pearson.
    public enterMathStatistic_Pearson(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_Pearson.
    public exitMathStatistic_Pearson(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_Quantil.
    public enterMathStatistic_Quantil(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_Quantil.
    public exitMathStatistic_Quantil(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_Spearman.
    public enterMathStatistic_Spearman(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_Spearman.
    public exitMathStatistic_Spearman(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_StD.
    public enterMathStatistic_StD(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_StD.
    public exitMathStatistic_StD(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#MathStatistic_Variance.
    public enterMathStatistic_Variance(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#MathStatistic_Variance.
    public exitMathStatistic_Variance(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#expr_args.
    public enterExpr_args(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#expr_args.
    public exitExpr_args(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArrayCreation_Empty.
    public enterArrayCreation_Empty(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArrayCreation_Empty.
    public exitArrayCreation_Empty(ctx: ParserRuleContext): void { }



    // Enter a parse tree produced by EveryGrammarParser#ArrayCreation.
    public enterArrayCreation(ctx: ParserRuleContext): void { }


    // Exit a parse tree produced by EveryGrammarParser#ArrayCreation.
    public exitArrayCreation(ctx: ParserRuleContext): void { }




}
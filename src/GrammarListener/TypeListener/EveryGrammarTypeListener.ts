// Generated from EveryGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import { ParserRuleContext } from 'antlr4';
import { ErrorNode, ParseTreeListener, TerminalNode } from 'antlr4/tree/Tree';

// This class defines a complete listener for a parse tree produced by EveryGrammarParser.
export default class EveryGrammarListener extends ParseTreeListener {

	private _result: EveryParserType;
private	Node: TypeNode;
private	_arguments: ArgumentType[];
private	_lastArraySlicingType: ArraySlicingType;

private	ErrorCollector: ErrorCollector;

public 	Result = () => this._result;

	
	public constructor(arguments: ArgumentType[])
{
	_arguments = arguments;
}


visitTerminal(node: TerminalNode): void


	visitErrorNode(node: ErrorNode): void;


enterEveryRule(node: ParserRuleContext): void;


exitEveryRule(node: ParserRuleContext): void;


// Enter a parse tree produced by EveryGrammarParser#startRule.
enterStartRule(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#startRule.
exitStartRule(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#expression.
enterExpression(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#expression.
exitExpression(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#IfElse_Next.
enterIfElse_Next(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#IfElse_Next.
exitIfElse_Next(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#ArraySlicing.
enterArraySlicing(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#ArraySlicing.
exitArraySlicing(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#IfElse.
enterIfElse(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#IfElse.
exitIfElse(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#InnerIfElse_Next.
enterInnerIfElse_Next(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#InnerIfElse_Next.
exitInnerIfElse_Next(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#InnerIfElse.
enterInnerIfElse(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#InnerIfElse.
exitInnerIfElse(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#BoolOr_Next.
enterBoolOr_Next(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#BoolOr_Next.
exitBoolOr_Next(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#BoolOr.
enterBoolOr(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#BoolOr.
exitBoolOr(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#BoolXOr_Next.
enterBoolXOr_Next(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#BoolXOr_Next.
exitBoolXOr_Next(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#BoolXOr.
enterBoolXOr(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#BoolXOr.
exitBoolXOr(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#BoolAnd_Next.
enterBoolAnd_Next(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#BoolAnd_Next.
exitBoolAnd_Next(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#BoolAnd.
enterBoolAnd(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#BoolAnd.
exitBoolAnd(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Equality_Contains.
enterEquality_Contains(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Equality_Contains.
exitEquality_Contains(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Equality_Next.
enterEquality_Next(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Equality_Next.
exitEquality_Next(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Equality_Equal.
enterEquality_Equal(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Equality_Equal.
exitEquality_Equal(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Equality_NotEqualIgnoreCase.
enterEquality_NotEqualIgnoreCase(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Equality_NotEqualIgnoreCase.
exitEquality_NotEqualIgnoreCase(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Equality_NotEqual.
enterEquality_NotEqual(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Equality_NotEqual.
exitEquality_NotEqual(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Equality_NotContains.
enterEquality_NotContains(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Equality_NotContains.
exitEquality_NotContains(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Equality_EqualIgnoreCase.
enterEquality_EqualIgnoreCase(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Equality_EqualIgnoreCase.
exitEquality_EqualIgnoreCase(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Check_Next.
enterCheck_Next(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Check_Next.
exitCheck_Next(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Check_Greater.
enterCheck_Greater(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Check_Greater.
exitCheck_Greater(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Check_GreaterEqual.
enterCheck_GreaterEqual(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Check_GreaterEqual.
exitCheck_GreaterEqual(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Check_Lower.
enterCheck_Lower(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Check_Lower.
exitCheck_Lower(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Check_LowerEqual.
enterCheck_LowerEqual(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Check_LowerEqual.
exitCheck_LowerEqual(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#BitOR.
enterBitOR(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#BitOR.
exitBitOR(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#BitOr_Next.
enterBitOr_Next(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#BitOr_Next.
exitBitOr_Next(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#BitAnd.
enterBitAnd(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#BitAnd.
exitBitAnd(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#BitAnd_Next.
enterBitAnd_Next(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#BitAnd_Next.
exitBitAnd_Next(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Line_Addition.
enterLine_Addition(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Line_Addition.
exitLine_Addition(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Line_Subtraction.
enterLine_Subtraction(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Line_Subtraction.
exitLine_Subtraction(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Line_Next.
enterLine_Next(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Line_Next.
exitLine_Next(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#PointTerm_PowerOperator.
enterPointTerm_PowerOperator(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#PointTerm_PowerOperator.
exitPointTerm_PowerOperator(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#PointTerm_Modulo.
enterPointTerm_Modulo(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#PointTerm_Modulo.
exitPointTerm_Modulo(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#PointTerm_Multiply.
enterPointTerm_Multiply(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#PointTerm_Multiply.
exitPointTerm_Multiply(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#PointTerm_BitShiftLeft.
enterPointTerm_BitShiftLeft(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#PointTerm_BitShiftLeft.
exitPointTerm_BitShiftLeft(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#PointTerm_IntegerDivision.
enterPointTerm_IntegerDivision(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#PointTerm_IntegerDivision.
exitPointTerm_IntegerDivision(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#PointTerm_BitShiftRight.
enterPointTerm_BitShiftRight(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#PointTerm_BitShiftRight.
exitPointTerm_BitShiftRight(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#PointTerm_Divide.
enterPointTerm_Divide(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#PointTerm_Divide.
exitPointTerm_Divide(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#PointTerm_Next.
enterPointTerm_Next(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#PointTerm_Next.
exitPointTerm_Next(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_Not.
enterFactor_Not(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_Not.
exitFactor_Not(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_Minus.
enterFactor_Minus(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_Minus.
exitFactor_Minus(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_Plus.
enterFactor_Plus(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_Plus.
exitFactor_Plus(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_Tilde.
enterFactor_Tilde(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_Tilde.
exitFactor_Tilde(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_Factorial.
enterFactor_Factorial(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_Factorial.
exitFactor_Factorial(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_Brackets.
enterFactor_Brackets(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_Brackets.
exitFactor_Brackets(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_True.
enterFactor_True(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_True.
exitFactor_True(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_False.
enterFactor_False(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_False.
exitFactor_False(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_Integer.
enterFactor_Integer(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_Integer.
exitFactor_Integer(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_Double.
enterFactor_Double(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_Double.
exitFactor_Double(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_Variable.
enterFactor_Variable(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_Variable.
exitFactor_Variable(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_ObjectVariables.
enterFactor_ObjectVariables(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_ObjectVariables.
exitFactor_ObjectVariables(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_String.
enterFactor_String(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_String.
exitFactor_String(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_DateTimeTerm.
enterFactor_DateTimeTerm(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_DateTimeTerm.
exitFactor_DateTimeTerm(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_Array.
enterFactor_Array(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_Array.
exitFactor_Array(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_DefaultFunction.
enterFactor_DefaultFunction(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_DefaultFunction.
exitFactor_DefaultFunction(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_CheckFunction.
enterFactor_CheckFunction(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_CheckFunction.
exitFactor_CheckFunction(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_ConvertFunction.
enterFactor_ConvertFunction(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_ConvertFunction.
exitFactor_ConvertFunction(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_MathFunction.
enterFactor_MathFunction(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_MathFunction.
exitFactor_MathFunction(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_RandomFunction.
enterFactor_RandomFunction(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_RandomFunction.
exitFactor_RandomFunction(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Factor_StatisticMathFunction.
enterFactor_StatisticMathFunction(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Factor_StatisticMathFunction.
exitFactor_StatisticMathFunction(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Random_Decimal.
enterRandom_Decimal(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Random_Decimal.
exitRandom_Decimal(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Random_DecimalArray.
enterRandom_DecimalArray(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Random_DecimalArray.
exitRandom_DecimalArray(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Random_DecimalMinMax.
enterRandom_DecimalMinMax(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Random_DecimalMinMax.
exitRandom_DecimalMinMax(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Random_DecimalArrayMinMax.
enterRandom_DecimalArrayMinMax(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Random_DecimalArrayMinMax.
exitRandom_DecimalArrayMinMax(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Random_Integer.
enterRandom_Integer(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Random_Integer.
exitRandom_Integer(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Random_IntegerArray.
enterRandom_IntegerArray(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Random_IntegerArray.
exitRandom_IntegerArray(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Random_IntegerMinMax.
enterRandom_IntegerMinMax(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Random_IntegerMinMax.
exitRandom_IntegerMinMax(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Random_IntegerArrayMinMax.
enterRandom_IntegerArrayMinMax(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Random_IntegerArrayMinMax.
exitRandom_IntegerArrayMinMax(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Convert_ToArray.
enterConvert_ToArray(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Convert_ToArray.
exitConvert_ToArray(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Convert_ToBoolean.
enterConvert_ToBoolean(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Convert_ToBoolean.
exitConvert_ToBoolean(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Convert_ToNumber.
enterConvert_ToNumber(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Convert_ToNumber.
exitConvert_ToNumber(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Convert_ToString.
enterConvert_ToString(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Convert_ToString.
exitConvert_ToString(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Convert_DegreeToGrad.
enterConvert_DegreeToGrad(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Convert_DegreeToGrad.
exitConvert_DegreeToGrad(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Convert_DegreeToRadian.
enterConvert_DegreeToRadian(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Convert_DegreeToRadian.
exitConvert_DegreeToRadian(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Convert_GradToDegree.
enterConvert_GradToDegree(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Convert_GradToDegree.
exitConvert_GradToDegree(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Convert_GradToRadian.
enterConvert_GradToRadian(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Convert_GradToRadian.
exitConvert_GradToRadian(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Convert_RadianToDegree.
enterConvert_RadianToDegree(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Convert_RadianToDegree.
exitConvert_RadianToDegree(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Convert_RadianToGrad.
enterConvert_RadianToGrad(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Convert_RadianToGrad.
exitConvert_RadianToGrad(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#DateTime_Expression.
enterDateTime_Expression(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#DateTime_Expression.
exitDateTime_Expression(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#DateTime_DateEntry.
enterDateTime_DateEntry(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#DateTime_DateEntry.
exitDateTime_DateEntry(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#DateTime_DateHour.
enterDateTime_DateHour(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#DateTime_DateHour.
exitDateTime_DateHour(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#DateTime_DateHourMinute.
enterDateTime_DateHourMinute(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#DateTime_DateHourMinute.
exitDateTime_DateHourMinute(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#DateTime_DateHourMinuteSeconds.
enterDateTime_DateHourMinuteSeconds(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#DateTime_DateHourMinuteSeconds.
exitDateTime_DateHourMinuteSeconds(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#DateTime_Full.
enterDateTime_Full(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#DateTime_Full.
exitDateTime_Full(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#ArraySlicing_Indexing.
enterArraySlicing_Indexing(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#ArraySlicing_Indexing.
exitArraySlicing_Indexing(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#ArraySlicing_Slicing.
enterArraySlicing_Slicing(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#ArraySlicing_Slicing.
exitArraySlicing_Slicing(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#ArraySlicing_StepSlicing.
enterArraySlicing_StepSlicing(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#ArraySlicing_StepSlicing.
exitArraySlicing_StepSlicing(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#ArraySlicing_StartSlicing.
enterArraySlicing_StartSlicing(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#ArraySlicing_StartSlicing.
exitArraySlicing_StartSlicing(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#ArraySlicing_StartStepSlicing.
enterArraySlicing_StartStepSlicing(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#ArraySlicing_StartStepSlicing.
exitArraySlicing_StartStepSlicing(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#ArraySlicing_EndSlicing.
enterArraySlicing_EndSlicing(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#ArraySlicing_EndSlicing.
exitArraySlicing_EndSlicing(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#ArraySlicing_EndStepSlicing.
enterArraySlicing_EndStepSlicing(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#ArraySlicing_EndStepSlicing.
exitArraySlicing_EndStepSlicing(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#ArraySlicing_AllStepSlicing.
enterArraySlicing_AllStepSlicing(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#ArraySlicing_AllStepSlicing.
exitArraySlicing_AllStepSlicing(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsArray.
enterCheckFunction_IsArray(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsArray.
exitCheckFunction_IsArray(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsBoolean.
enterCheckFunction_IsBoolean(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsBoolean.
exitCheckFunction_IsBoolean(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsDateTime.
enterCheckFunction_IsDateTime(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsDateTime.
exitCheckFunction_IsDateTime(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsNull.
enterCheckFunction_IsNull(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsNull.
exitCheckFunction_IsNull(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsNumber.
enterCheckFunction_IsNumber(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsNumber.
exitCheckFunction_IsNumber(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsString.
enterCheckFunction_IsString(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsString.
exitCheckFunction_IsString(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#CheckFunction_IsWhitespace.
enterCheckFunction_IsWhitespace(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#CheckFunction_IsWhitespace.
exitCheckFunction_IsWhitespace(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#CheckFunction_HasAny.
enterCheckFunction_HasAny(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#CheckFunction_HasAny.
exitCheckFunction_HasAny(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#CheckFunction_HasDuplicates.
enterCheckFunction_HasDuplicates(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#CheckFunction_HasDuplicates.
exitCheckFunction_HasDuplicates(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_Concat.
enterFunction_Concat(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_Concat.
exitFunction_Concat(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_Count.
enterFunction_Count(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_Count.
exitFunction_Count(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_Distinc.
enterFunction_Distinc(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_Distinc.
exitFunction_Distinc(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_Difference.
enterFunction_Difference(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_Difference.
exitFunction_Difference(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_Except.
enterFunction_Except(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_Except.
exitFunction_Except(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_IndexOf.
enterFunction_IndexOf(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_IndexOf.
exitFunction_IndexOf(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_IndexOfStart.
enterFunction_IndexOfStart(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_IndexOfStart.
exitFunction_IndexOfStart(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_IndexOfStartEnd.
enterFunction_IndexOfStartEnd(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_IndexOfStartEnd.
exitFunction_IndexOfStartEnd(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_Lower.
enterFunction_Lower(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_Lower.
exitFunction_Lower(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_Reverse.
enterFunction_Reverse(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_Reverse.
exitFunction_Reverse(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_Upper.
enterFunction_Upper(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_Upper.
exitFunction_Upper(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_Sort.
enterFunction_Sort(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_Sort.
exitFunction_Sort(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Function_Trim.
enterFunction_Trim(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Function_Trim.
exitFunction_Trim(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Abs.
enterMath_Abs(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Abs.
exitMath_Abs(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ACos.
enterMath_ACos(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ACos.
exitMath_ACos(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ACosH.
enterMath_ACosH(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ACosH.
exitMath_ACosH(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ASin.
enterMath_ASin(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ASin.
exitMath_ASin(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ASinH.
enterMath_ASinH(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ASinH.
exitMath_ASinH(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ATan.
enterMath_ATan(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ATan.
exitMath_ATan(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ATan2.
enterMath_ATan2(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ATan2.
exitMath_ATan2(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ATanH.
enterMath_ATanH(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ATanH.
exitMath_ATanH(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Cbrt.
enterMath_Cbrt(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Cbrt.
exitMath_Cbrt(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Cos.
enterMath_Cos(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Cos.
exitMath_Cos(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_CosH.
enterMath_CosH(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_CosH.
exitMath_CosH(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Ceilling.
enterMath_Ceilling(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Ceilling.
exitMath_Ceilling(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Clamp.
enterMath_Clamp(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Clamp.
exitMath_Clamp(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_CrossSum.
enterMath_CrossSum(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_CrossSum.
exitMath_CrossSum(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Derivative.
enterMath_Derivative(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Derivative.
exitMath_Derivative(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Exp.
enterMath_Exp(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Exp.
exitMath_Exp(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Floor.
enterMath_Floor(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Floor.
exitMath_Floor(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Integration.
enterMath_Integration(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Integration.
exitMath_Integration(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Log.
enterMath_Log(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Log.
exitMath_Log(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Log2.
enterMath_Log2(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Log2.
exitMath_Log2(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Log10.
enterMath_Log10(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Log10.
exitMath_Log10(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Max_Array.
enterMath_Max_Array(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Max_Array.
exitMath_Max_Array(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Max_Two.
enterMath_Max_Two(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Max_Two.
exitMath_Max_Two(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Min_Array.
enterMath_Min_Array(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Min_Array.
exitMath_Min_Array(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Min_Two.
enterMath_Min_Two(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Min_Two.
exitMath_Min_Two(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Power.
enterMath_Power(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Power.
exitMath_Power(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Round_Not_Decimal.
enterMath_Round_Not_Decimal(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Round_Not_Decimal.
exitMath_Round_Not_Decimal(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Round_Decimal.
enterMath_Round_Decimal(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Round_Decimal.
exitMath_Round_Decimal(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Root.
enterMath_Root(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Root.
exitMath_Root(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Sin.
enterMath_Sin(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Sin.
exitMath_Sin(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_SinH.
enterMath_SinH(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_SinH.
exitMath_SinH(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Sqrt.
enterMath_Sqrt(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Sqrt.
exitMath_Sqrt(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Tan.
enterMath_Tan(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Tan.
exitMath_Tan(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_TanH.
enterMath_TanH(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_TanH.
exitMath_TanH(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Truncate.
enterMath_Truncate(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Truncate.
exitMath_Truncate(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Norm.
enterMath_Norm(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Norm.
exitMath_Norm(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_EulerNorm.
enterMath_EulerNorm(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_EulerNorm.
exitMath_EulerNorm(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_MaxNorm.
enterMath_MaxNorm(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_MaxNorm.
exitMath_MaxNorm(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_GreatesCommonDivisor.
enterMath_GreatesCommonDivisor(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_GreatesCommonDivisor.
exitMath_GreatesCommonDivisor(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_LeastCommonMultiple.
enterMath_LeastCommonMultiple(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_LeastCommonMultiple.
exitMath_LeastCommonMultiple(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_DotProduct.
enterMath_DotProduct(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_DotProduct.
exitMath_DotProduct(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Binomila.
enterMath_Binomila(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Binomila.
exitMath_Binomila(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ACot.
enterMath_ACot(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ACot.
exitMath_ACot(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ACotH.
enterMath_ACotH(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ACotH.
exitMath_ACotH(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ACsc.
enterMath_ACsc(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ACsc.
exitMath_ACsc(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ACscH.
enterMath_ACscH(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ACscH.
exitMath_ACscH(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ASec.
enterMath_ASec(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ASec.
exitMath_ASec(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_ASecH.
enterMath_ASecH(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_ASecH.
exitMath_ASecH(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Cot.
enterMath_Cot(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Cot.
exitMath_Cot(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_CotH.
enterMath_CotH(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_CotH.
exitMath_CotH(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Csc.
enterMath_Csc(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Csc.
exitMath_Csc(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_CscH.
enterMath_CscH(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_CscH.
exitMath_CscH(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_Sec.
enterMath_Sec(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_Sec.
exitMath_Sec(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#Math_SecH.
enterMath_SecH(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#Math_SecH.
exitMath_SecH(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#MathStatistic_CoVariance.
enterMathStatistic_CoVariance(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#MathStatistic_CoVariance.
exitMathStatistic_CoVariance(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#MathStatistic_Mean.
enterMathStatistic_Mean(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#MathStatistic_Mean.
exitMathStatistic_Mean(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#MathStatistic_Median.
enterMathStatistic_Median(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#MathStatistic_Median.
exitMathStatistic_Median(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#MathStatistic_Pearson.
enterMathStatistic_Pearson(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#MathStatistic_Pearson.
exitMathStatistic_Pearson(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#MathStatistic_Quantil.
enterMathStatistic_Quantil(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#MathStatistic_Quantil.
exitMathStatistic_Quantil(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#MathStatistic_Spearman.
enterMathStatistic_Spearman(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#MathStatistic_Spearman.
exitMathStatistic_Spearman(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#MathStatistic_StD.
enterMathStatistic_StD(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#MathStatistic_StD.
exitMathStatistic_StD(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#MathStatistic_Variance.
enterMathStatistic_Variance(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#MathStatistic_Variance.
exitMathStatistic_Variance(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#expr_args.
enterExpr_args(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#expr_args.
exitExpr_args(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#ArrayCreation_Empty.
enterArrayCreation_Empty(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#ArrayCreation_Empty.
exitArrayCreation_Empty(ctx: ParserRuleContext): void;



// Enter a parse tree produced by EveryGrammarParser#ArrayCreation.
enterArrayCreation(ctx: ParserRuleContext): void;


// Exit a parse tree produced by EveryGrammarParser#ArrayCreation.
exitArrayCreation(ctx: ParserRuleContext): void;




}
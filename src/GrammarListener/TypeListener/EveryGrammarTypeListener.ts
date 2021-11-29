// Generated from EveryGrammar.g4 by ANTLR 4.9.2
// jshint ignore: start
import { ParserRuleContext } from 'antlr4';
import { ErrorNode, TerminalNode } from 'antlr4/tree/Tree';
import { Argument } from '../../Argument';
import EveryGrammarListener from '../../EveryGrammarListener';
import { ArraySlicingType } from '../ArraySlicingType';
import { ErrorCode, ErrorCollector } from '../ErrorCollector';
import { TypeCheckHelper } from '../TypeCheckHelper';
import { EveryGrammarTypeListenerHelper } from './EveryGrammarTypeListenerHelper';
import { EveryParserType, EveryParserTypeHelper } from './EveryParserType';
import { TypeNode } from './TypeNode';

// This class defines a complete listener for a parse tree produced by EveryGrammarParser.
export class EveryGrammarTypeListener implements EveryGrammarListener {

	private result: EveryParserType;
	private node?: TypeNode;
	private arguments: Argument[];
	private lastArraySlicingType: ArraySlicingType;
	private errorCollector: ErrorCollector;

	public Result = () => this.result;


	constructor(args: Argument[]) {
		this.arguments = args;
		this.errorCollector = new ErrorCollector();
		this.result = EveryParserType.None;
		this.lastArraySlicingType = ArraySlicingType.Indexing;
	}


	public visitTerminal(node: TerminalNode): void { }


	public visitErrorNode(node: ErrorNode): void { }


	public enterEveryRule(node: ParserRuleContext): void { }


	public exitEveryRule(node: ParserRuleContext): void { }


	// public enter a parse tree produced by EveryGrammarParser#startRule.
	public enterStartRule(context: ParserRuleContext): void {
		this.node = new TypeNode();
		this.errorCollector = new ErrorCollector();
		this.result = EveryParserType.None;
	}


	// public exit a parse tree produced by EveryGrammarParser#startRule.
	public exitStartRule(context: ParserRuleContext): void {
		if (this.node)
			this.result = this.node.Children[0].ValueType;
	}


	// public enter a parse tree produced by EveryGrammarParser#expression.
	public enterExpression(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#expression.
	public exitExpression(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#IfElse_Next.
	public enterIfElse_Next(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#IfElse_Next.
	public exitIfElse_Next(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#ArraySlicing.
	public enterArraySlicing(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#ArraySlicing.
	public exitArraySlicing(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.ArraySlicing(context, this.node, this.errorCollector, this.lastArraySlicingType);
	}



	// public enter a parse tree produced by EveryGrammarParser#IfElse.
	public enterIfElse(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#IfElse.
	public exitIfElse(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#InnerIfElse_Next.
	public enterInnerIfElse_Next(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#InnerIfElse_Next.
	public exitInnerIfElse_Next(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#InnerIfElse.
	public enterInnerIfElse(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#InnerIfElse.
	public exitInnerIfElse(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#BoolOr_Next.
	public enterBoolOr_Next(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#BoolOr_Next.
	public exitBoolOr_Next(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#BoolOr.
	public enterBoolOr(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#BoolOr.
	public exitBoolOr(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CalcBooleanOrBooleanArrayBinary(context, this.node, this.errorCollector, EveryParserType.Boolean, EveryParserType.ArrayOfBoolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#BoolXOr_Next.
	public enterBoolXOr_Next(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#BoolXOr_Next.
	public exitBoolXOr_Next(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#BoolXOr.
	public enterBoolXOr(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#BoolXOr.
	public exitBoolXOr(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CalcBooleanOrBooleanArrayBinary(context, this.node, this.errorCollector, EveryParserType.Boolean, EveryParserType.ArrayOfBoolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#BoolAnd_Next.
	public enterBoolAnd_Next(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#BoolAnd_Next.
	public exitBoolAnd_Next(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#BoolAnd.
	public enterBoolAnd(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#BoolAnd.
	public exitBoolAnd(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CalcBooleanOrBooleanArrayBinary(context, this.node, this.errorCollector, EveryParserType.Boolean, EveryParserType.ArrayOfBoolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#Equality_Contains.
	public enterEquality_Contains(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Equality_Contains.
	public exitEquality_Contains(context: ParserRuleContext): void {
		if (!this.node)
			return;

		if (this.errorCollector.CheckParamsCount(context, 2, this.node.Children)) {
			if (this.node.Children[0].ValueType == EveryParserType.None)
				this.errorCollector.AddError(context, ErrorCode.IsNotNumber, "First Parameter has no type!");
			else if (!EveryParserTypeHelper.IsArrayType(this.node.Children[1].ValueType) && !EveryParserTypeHelper.IsString(this.node.Children[1].ValueType))
				this.errorCollector.AddError(context, ErrorCode.IsNotNumber, "Second Parameter is not an array or string!");
			else
				this.node.ValueType = EveryParserType.Boolean;
		}

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#Equality_Next.
	public enterEquality_Next(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Equality_Next.
	public exitEquality_Next(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Equality_Equal.
	public enterEquality_Equal(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Equality_Equal.
	public exitEquality_Equal(context: ParserRuleContext): void {
		if (this.node)
			EveryGrammarTypeListenerHelper.CheckAnyBinary(context, this.node, this.errorCollector, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#Equality_NotEqualIgnoreCase.
	public enterEquality_NotEqualIgnoreCase(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Equality_NotEqualIgnoreCase.
	public exitEquality_NotEqualIgnoreCase(context: ParserRuleContext): void {
		if (this.node)
			EveryGrammarTypeListenerHelper.CheckStringOrArrayOfStringsBinary(context, this.node, this.errorCollector, EveryParserType.Boolean, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#Equality_NotEqual.
	public enterEquality_NotEqual(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Equality_NotEqual.
	public exitEquality_NotEqual(context: ParserRuleContext): void {
		if (this.node)
			EveryGrammarTypeListenerHelper.CheckAnyBinary(context, this.node, this.errorCollector, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#Equality_NotContains.
	public enterEquality_NotContains(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Equality_NotContains.
	public exitEquality_NotContains(context: ParserRuleContext): void {
		if (!this.node)
			return


		if (this.errorCollector.CheckParamsCount(context, 2, this.node.Children)) {
			if (this.node.Children[0].ValueType == EveryParserType.None)
				this.errorCollector.AddError(context, ErrorCode.IsNotNumber, "First Parameter has no type!");
			else if (!EveryParserTypeHelper.IsArrayType(this.node.Children[1].ValueType) && !EveryParserTypeHelper.IsString(this.node.Children[1].ValueType))
				this.errorCollector.AddError(context, ErrorCode.IsNotNumber, "Second Parameter is not an array or string!");
			else
				this.node.ValueType = EveryParserType.Boolean;
		}

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#Equality_EqualIgnoreCase.
	public enterEquality_EqualIgnoreCase(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Equality_EqualIgnoreCase.
	public exitEquality_EqualIgnoreCase(context: ParserRuleContext): void {
		if (this.node)
			EveryGrammarTypeListenerHelper.CheckStringOrArrayOfStringsBinary(context, this.node, this.errorCollector, EveryParserType.Boolean, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#Check_Next.
	public enterCheck_Next(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Check_Next.
	public exitCheck_Next(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Check_Greater.
	public enterCheck_Greater(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Check_Greater.
	public exitCheck_Greater(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector, EveryParserType.Boolean, EveryParserType.ArrayOfBoolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#Check_GreaterEqual.
	public enterCheck_GreaterEqual(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Check_GreaterEqual.
	public exitCheck_GreaterEqual(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector, EveryParserType.Boolean, EveryParserType.ArrayOfBoolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#Check_Lower.
	public enterCheck_Lower(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Check_Lower.
	public exitCheck_Lower(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector, EveryParserType.Boolean, EveryParserType.ArrayOfBoolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#Check_LowerEqual.
	public enterCheck_LowerEqual(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Check_LowerEqual.
	public exitCheck_LowerEqual(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector, EveryParserType.Boolean, EveryParserType.ArrayOfBoolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#BitOR.
	public enterBitOR(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#BitOR.
	public exitBitOR(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumericBinary(context, this.node, this.errorCollector, EveryParserType.Number);
	}



	// public enter a parse tree produced by EveryGrammarParser#BitOr_Next.
	public enterBitOr_Next(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#BitOr_Next.
	public exitBitOr_Next(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#BitAnd.
	public enterBitAnd(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#BitAnd.
	public exitBitAnd(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumericBinary(context, this.node, this.errorCollector, EveryParserType.Number);
	}



	// public enter a parse tree produced by EveryGrammarParser#BitAnd_Next.
	public enterBitAnd_Next(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#BitAnd_Next.
	public exitBitAnd_Next(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Line_Addition.
	public enterLine_Addition(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Line_Addition.
	public exitLine_Addition(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Line_Subtraction.
	public enterLine_Subtraction(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Line_Subtraction.
	public exitLine_Subtraction(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Line_Next.
	public enterLine_Next(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Line_Next.
	public exitLine_Next(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#PointTerm_PowerOperator.
	public enterPointTerm_PowerOperator(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#PointTerm_PowerOperator.
	public exitPointTerm_PowerOperator(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#PointTerm_Modulo.
	public enterPointTerm_Modulo(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#PointTerm_Modulo.
	public exitPointTerm_Modulo(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#PointTerm_Multiply.
	public enterPointTerm_Multiply(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#PointTerm_Multiply.
	public exitPointTerm_Multiply(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#PointTerm_BitShiftLeft.
	public enterPointTerm_BitShiftLeft(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#PointTerm_BitShiftLeft.
	public exitPointTerm_BitShiftLeft(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumericBinary(context, this.node, this.errorCollector, EveryParserType.Number);
	}



	// public enter a parse tree produced by EveryGrammarParser#PointTerm_IntegerDivision.
	public enterPointTerm_IntegerDivision(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#PointTerm_IntegerDivision.
	public exitPointTerm_IntegerDivision(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#PointTerm_BitShiftRight.
	public enterPointTerm_BitShiftRight(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#PointTerm_BitShiftRight.
	public exitPointTerm_BitShiftRight(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumericBinary(context, this.node, this.errorCollector, EveryParserType.Number);
	}



	// public enter a parse tree produced by EveryGrammarParser#PointTerm_Divide.
	public enterPointTerm_Divide(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#PointTerm_Divide.
	public exitPointTerm_Divide(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#PointTerm_Next.
	public enterPointTerm_Next(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#PointTerm_Next.
	public exitPointTerm_Next(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_Not.
	public enterFactor_Not(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Factor_Not.
	public exitFactor_Not(context: ParserRuleContext): void {
		if (!this.node)
			return;

		if (this.errorCollector.CheckParamsCount(context, 1, this.node.Children)) {
			if (this.node.Children[0].ValueType != EveryParserType.Boolean)
				this.errorCollector.AddError(context, ErrorCode.IsNotNumber, "Parameter is not a boolean!");
			else
				this.node.ValueType = EveryParserType.Boolean;
		}

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#Factor_Minus.
	public enterFactor_Minus(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Factor_Minus.
	public exitFactor_Minus(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Factor_Plus.
	public enterFactor_Plus(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Factor_Plus.
	public exitFactor_Plus(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Factor_Tilde.
	public enterFactor_Tilde(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Factor_Tilde.
	public exitFactor_Tilde(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Factor_Factorial.
	public enterFactor_Factorial(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Factor_Factorial.
	public exitFactor_Factorial(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Factor_Brackets.
	public enterFactor_Brackets(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Factor_Brackets.
	public exitFactor_Brackets(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_True.
	public enterFactor_True(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode(EveryParserType.Boolean);
	}


	// public exit a parse tree produced by EveryGrammarParser#Factor_True.
	public exitFactor_True(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_False.
	public enterFactor_False(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode(EveryParserType.Boolean);
	}


	// public exit a parse tree produced by EveryGrammarParser#Factor_False.
	public exitFactor_False(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_Integer.
	public enterFactor_Integer(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode(EveryParserType.Number);
	}


	// public exit a parse tree produced by EveryGrammarParser#Factor_Integer.
	public exitFactor_Integer(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_Double.
	public enterFactor_Double(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode(EveryParserType.Number);
	}


	// public exit a parse tree produced by EveryGrammarParser#Factor_Double.
	public exitFactor_Double(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_Variable.
	public enterFactor_Variable(context: ParserRuleContext): void {
		if (!this.node)
			return;


		const text = context.getText();
		let type = EveryParserType.None;

		if (text.toLowerCase() === "e" || text.toLowerCase() === "pi")
			type = EveryParserType.Number;
		else {
			var value = this.errorCollector.GetCheckedArgument(context, this.arguments, text);

			if (value == null)
				type = EveryParserType.None;
			else if (TypeCheckHelper.IsBoolean(value))
				type = EveryParserType.Boolean;
			else if (TypeCheckHelper.IsNumber(value))
				type = EveryParserType.Number;
			else if (TypeCheckHelper.IsDateTime(value))
				type = EveryParserType.DateTime;
			else if (TypeCheckHelper.IsString(value))
				type = EveryParserType.String;
			else if (TypeCheckHelper.IsStringOrStringList(value))
				type = EveryParserType.ArrayOfString;
			else if (TypeCheckHelper.IsArrayOfNumber(value))
				type = EveryParserType.ArrayOfNumber;
			else if (TypeCheckHelper.IsArrayOfDateTime(value))
				type = EveryParserType.ArrayOfDateTime;
			else if (TypeCheckHelper.IsArrayOfBoolean(value))
				type = EveryParserType.ArrayOfBoolean;
		}

		this.node.AddChildNode(type);
	}


	// public exit a parse tree produced by EveryGrammarParser#Factor_Variable.
	public exitFactor_Variable(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_ObjectVariables.
	public enterFactor_ObjectVariables(context: ParserRuleContext): void {
		if (!this.node)
			return;

		const text = context.getText();
		let type = EveryParserType.None;

		if (text.toLowerCase() == "datetime.now")
			type = EveryParserType.DateTime;
		else {
			var value = this.errorCollector.GetCheckedObjectArgument(context, this.arguments, text);

			if (value == null)
				type = EveryParserType.None;
			else if (TypeCheckHelper.IsBoolean(value))
				type = EveryParserType.Boolean;
			else if (TypeCheckHelper.IsNumber(value))
				type = EveryParserType.Number;
			else if (TypeCheckHelper.IsDateTime(value))
				type = EveryParserType.DateTime;
			else if (TypeCheckHelper.IsString(value))
				type = EveryParserType.String;
			else if (TypeCheckHelper.IsStringOrStringList(value))
				type = EveryParserType.ArrayOfString;
			else if (TypeCheckHelper.IsArrayOfNumber(value))
				type = EveryParserType.ArrayOfNumber;
			else if (TypeCheckHelper.IsArrayOfDateTime(value))
				type = EveryParserType.ArrayOfDateTime;
			else if (TypeCheckHelper.IsArrayOfBoolean(value))
				type = EveryParserType.ArrayOfBoolean;
		}

		this.node.AddChildNode(type);
	}


	// public exit a parse tree produced by EveryGrammarParser#Factor_ObjectVariables.
	public exitFactor_ObjectVariables(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_String.
	public enterFactor_String(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode(EveryParserType.String);
	}


	// public exit a parse tree produced by EveryGrammarParser#Factor_String.
	public exitFactor_String(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_DateTimeTerm.
	public enterFactor_DateTimeTerm(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Factor_DateTimeTerm.
	public exitFactor_DateTimeTerm(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_Array.
	public enterFactor_Array(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Factor_Array.
	public exitFactor_Array(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_DefaultFunction.
	public enterFactor_DefaultFunction(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Factor_DefaultFunction.
	public exitFactor_DefaultFunction(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_CheckFunction.
	public enterFactor_CheckFunction(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Factor_CheckFunction.
	public exitFactor_CheckFunction(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_ConvertFunction.
	public enterFactor_ConvertFunction(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Factor_ConvertFunction.
	public exitFactor_ConvertFunction(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_MathFunction.
	public enterFactor_MathFunction(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Factor_MathFunction.
	public exitFactor_MathFunction(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_RandomFunction.
	public enterFactor_RandomFunction(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Factor_RandomFunction.
	public exitFactor_RandomFunction(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Factor_StatisticMathFunction.
	public enterFactor_StatisticMathFunction(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Factor_StatisticMathFunction.
	public exitFactor_StatisticMathFunction(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Random_Decimal.
	public enterRandom_Decimal(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode(EveryParserType.Number);
	}


	// public exit a parse tree produced by EveryGrammarParser#Random_Decimal.
	public exitRandom_Decimal(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Random_DecimalArray.
	public enterRandom_DecimalArray(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Random_DecimalArray.
	public exitRandom_DecimalArray(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumericUnary(context, this.node, this.errorCollector, EveryParserType.ArrayOfNumber);
	}



	// public enter a parse tree produced by EveryGrammarParser#Random_DecimalMinMax.
	public enterRandom_DecimalMinMax(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Random_DecimalMinMax.
	public exitRandom_DecimalMinMax(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumericBinary(context, this.node, this.errorCollector, EveryParserType.Number);
	}



	// public enter a parse tree produced by EveryGrammarParser#Random_DecimalArrayMinMax.
	public enterRandom_DecimalArrayMinMax(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Random_DecimalArrayMinMax.
	public exitRandom_DecimalArrayMinMax(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumericTri(context, this.node, this.errorCollector, EveryParserType.ArrayOfNumber);
	}



	// public enter a parse tree produced by EveryGrammarParser#Random_Integer.
	public enterRandom_Integer(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode(EveryParserType.Number);
	}


	// public exit a parse tree produced by EveryGrammarParser#Random_Integer.
	public exitRandom_Integer(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Random_IntegerArray.
	public enterRandom_IntegerArray(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Random_IntegerArray.
	public exitRandom_IntegerArray(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumericUnary(context, this.node, this.errorCollector, EveryParserType.ArrayOfNumber);
	}



	// public enter a parse tree produced by EveryGrammarParser#Random_IntegerMinMax.
	public enterRandom_IntegerMinMax(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Random_IntegerMinMax.
	public exitRandom_IntegerMinMax(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumericBinary(context, this.node, this.errorCollector, EveryParserType.Number);
	}



	// public enter a parse tree produced by EveryGrammarParser#Random_IntegerArrayMinMax.
	public enterRandom_IntegerArrayMinMax(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Random_IntegerArrayMinMax.
	public exitRandom_IntegerArrayMinMax(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumericTri(context, this.node, this.errorCollector, EveryParserType.ArrayOfNumber);
	}



	// public enter a parse tree produced by EveryGrammarParser#Convert_ToArray.
	public enterConvert_ToArray(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Convert_ToArray.
	public exitConvert_ToArray(context: ParserRuleContext): void {
		if (!this.node)
			return;

		if (this.errorCollector.CheckParamsCount(context, 1, this.node.Children)) {
			var type = this.node.Children[0].ValueType;

			if (EveryParserTypeHelper.IsArrayType(type))
				this.node.ValueType = type;
			else if (EveryParserTypeHelper.IsString(type))
				this.node.ValueType = EveryParserType.ArrayOfString;
			else if (EveryParserTypeHelper.IsNumber(type))
				this.node.ValueType = EveryParserType.ArrayOfNumber;
			else if (EveryParserTypeHelper.IsBoolean(type))
				this.node.ValueType = EveryParserType.ArrayOfBoolean;
			else if (EveryParserTypeHelper.IsDateTime(type))
				this.node.ValueType = EveryParserType.ArrayOfDateTime;
		}

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#Convert_ToBoolean.
	public enterConvert_ToBoolean(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Convert_ToBoolean.
	public exitConvert_ToBoolean(context: ParserRuleContext): void {
		if (!this.node)
			return;

		if (this.errorCollector.CheckParamsCount(context, 1, this.node.Children)) {
			var type = this.node.Children[0].ValueType;

			if (EveryParserTypeHelper.IsArrayType(type) || EveryParserTypeHelper.IsBoolean(type) ||
				EveryParserTypeHelper.IsString(type) || EveryParserTypeHelper.IsNumber(type))
				this.node.ValueType = EveryParserType.Boolean;
		}

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#Convert_ToNumber.
	public enterConvert_ToNumber(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Convert_ToNumber.
	public exitConvert_ToNumber(context: ParserRuleContext): void {
		if (!this.node)
			return;

		if (this.errorCollector.CheckParamsCount(context, 1, this.node.Children)) {
			var type = this.node.Children[0].ValueType;

			if (EveryParserTypeHelper.IsNumber(type) || EveryParserTypeHelper.IsBoolean(type) || EveryParserTypeHelper.IsString(type))
				this.node.ValueType = EveryParserType.Number;
		}

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#Convert_ToString.
	public enterConvert_ToString(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Convert_ToString.
	public exitConvert_ToString(context: ParserRuleContext): void {
		if (!this.node)
			return;

		if (this.errorCollector.CheckParamsCount(context, 1, this.node.Children))
			this.node.ValueType = EveryParserType.String;

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#Convert_DegreeToGrad.
	public enterConvert_DegreeToGrad(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Convert_DegreeToGrad.
	public exitConvert_DegreeToGrad(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Convert_DegreeToRadian.
	public enterConvert_DegreeToRadian(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Convert_DegreeToRadian.
	public exitConvert_DegreeToRadian(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Convert_GradToDegree.
	public enterConvert_GradToDegree(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Convert_GradToDegree.
	public exitConvert_GradToDegree(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Convert_GradToRadian.
	public enterConvert_GradToRadian(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Convert_GradToRadian.
	public exitConvert_GradToRadian(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Convert_RadianToDegree.
	public enterConvert_RadianToDegree(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Convert_RadianToDegree.
	public exitConvert_RadianToDegree(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Convert_RadianToGrad.
	public enterConvert_RadianToGrad(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Convert_RadianToGrad.
	public exitConvert_RadianToGrad(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#DateTime_Expression.
	public enterDateTime_Expression(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#DateTime_Expression.
	public exitDateTime_Expression(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.SetNodeForDateTimeValue(context, this.node, this.errorCollector, 1);
	}



	// public enter a parse tree produced by EveryGrammarParser#DateTime_DateEntry.
	public enterDateTime_DateEntry(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#DateTime_DateEntry.
	public exitDateTime_DateEntry(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.SetNodeForDateTimeValue(context, this.node, this.errorCollector, 3);
	}



	// public enter a parse tree produced by EveryGrammarParser#DateTime_DateHour.
	public enterDateTime_DateHour(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#DateTime_DateHour.
	public exitDateTime_DateHour(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.SetNodeForDateTimeValue(context, this.node, this.errorCollector, 4);
	}



	// public enter a parse tree produced by EveryGrammarParser#DateTime_DateHourMinute.
	public enterDateTime_DateHourMinute(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#DateTime_DateHourMinute.
	public exitDateTime_DateHourMinute(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.SetNodeForDateTimeValue(context, this.node, this.errorCollector, 5);
	}



	// public enter a parse tree produced by EveryGrammarParser#DateTime_DateHourMinuteSeconds.
	public enterDateTime_DateHourMinuteSeconds(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#DateTime_DateHourMinuteSeconds.
	public exitDateTime_DateHourMinuteSeconds(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.SetNodeForDateTimeValue(context, this.node, this.errorCollector, 6);
	}



	// public enter a parse tree produced by EveryGrammarParser#DateTime_Full.
	public enterDateTime_Full(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#DateTime_Full.
	public exitDateTime_Full(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.SetNodeForDateTimeValue(context, this.node, this.errorCollector, 7);
	}



	// public enter a parse tree produced by EveryGrammarParser#ArraySlicing_Indexing.
	public enterArraySlicing_Indexing(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#ArraySlicing_Indexing.
	public exitArraySlicing_Indexing(context: ParserRuleContext): void {
		this.lastArraySlicingType = ArraySlicingType.Indexing;
	}



	// public enter a parse tree produced by EveryGrammarParser#ArraySlicing_Slicing.
	public enterArraySlicing_Slicing(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#ArraySlicing_Slicing.
	public exitArraySlicing_Slicing(context: ParserRuleContext): void {
		this.lastArraySlicingType = ArraySlicingType.Slicing;
	}



	// public enter a parse tree produced by EveryGrammarParser#ArraySlicing_StepSlicing.
	public enterArraySlicing_StepSlicing(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#ArraySlicing_StepSlicing.
	public exitArraySlicing_StepSlicing(context: ParserRuleContext): void {
		this.lastArraySlicingType = ArraySlicingType.StepSlicing;
	}



	// public enter a parse tree produced by EveryGrammarParser#ArraySlicing_StartSlicing.
	public enterArraySlicing_StartSlicing(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#ArraySlicing_StartSlicing.
	public exitArraySlicing_StartSlicing(context: ParserRuleContext): void {
		this.lastArraySlicingType = ArraySlicingType.StartSlicing;
	}



	// public enter a parse tree produced by EveryGrammarParser#ArraySlicing_StartStepSlicing.
	public enterArraySlicing_StartStepSlicing(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#ArraySlicing_StartStepSlicing.
	public exitArraySlicing_StartStepSlicing(context: ParserRuleContext): void {
		this.lastArraySlicingType = ArraySlicingType.StartStepSlicing;
	}



	// public enter a parse tree produced by EveryGrammarParser#ArraySlicing_EndSlicing.
	public enterArraySlicing_EndSlicing(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#ArraySlicing_EndSlicing.
	public exitArraySlicing_EndSlicing(context: ParserRuleContext): void {
		this.lastArraySlicingType = ArraySlicingType.EndSlicing;
	}



	// public enter a parse tree produced by EveryGrammarParser#ArraySlicing_EndStepSlicing.
	public enterArraySlicing_EndStepSlicing(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#ArraySlicing_EndStepSlicing.
	public exitArraySlicing_EndStepSlicing(context: ParserRuleContext): void {
		this.lastArraySlicingType = ArraySlicingType.EndStepSlicing;
	}



	// public enter a parse tree produced by EveryGrammarParser#ArraySlicing_AllStepSlicing.
	public enterArraySlicing_AllStepSlicing(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#ArraySlicing_AllStepSlicing.
	public exitArraySlicing_AllStepSlicing(context: ParserRuleContext): void {
		this.lastArraySlicingType = ArraySlicingType.AllStepSlicing;
	}



	// public enter a parse tree produced by EveryGrammarParser#CheckFunction_IsArray.
	public enterCheckFunction_IsArray(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#CheckFunction_IsArray.
	public exitCheckFunction_IsArray(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckAnyUnary(context, this.node, this.errorCollector, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#CheckFunction_IsBoolean.
	public enterCheckFunction_IsBoolean(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#CheckFunction_IsBoolean.
	public exitCheckFunction_IsBoolean(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckAnyUnary(context, this.node, this.errorCollector, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#CheckFunction_IsDateTime.
	public enterCheckFunction_IsDateTime(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#CheckFunction_IsDateTime.
	public exitCheckFunction_IsDateTime(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckAnyUnary(context, this.node, this.errorCollector, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#CheckFunction_IsNull.
	public enterCheckFunction_IsNull(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#CheckFunction_IsNull.
	public exitCheckFunction_IsNull(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckAnyUnary(context, this.node, this.errorCollector, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#CheckFunction_IsNumber.
	public enterCheckFunction_IsNumber(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#CheckFunction_IsNumber.
	public exitCheckFunction_IsNumber(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckAnyUnary(context, this.node, this.errorCollector, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#CheckFunction_IsString.
	public enterCheckFunction_IsString(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#CheckFunction_IsString.
	public exitCheckFunction_IsString(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckAnyUnary(context, this.node, this.errorCollector, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#CheckFunction_IsWhitespace.
	public enterCheckFunction_IsWhitespace(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#CheckFunction_IsWhitespace.
	public exitCheckFunction_IsWhitespace(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckStringOrArrayOfStringsUnary(context, this.node, this.errorCollector, EveryParserType.Boolean, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#CheckFunction_HasAny.
	public enterCheckFunction_HasAny(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#CheckFunction_HasAny.
	public exitCheckFunction_HasAny(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckStringOrListUnary(context, this.node, this.errorCollector, EveryParserType.Boolean, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#CheckFunction_HasDuplicates.
	public enterCheckFunction_HasDuplicates(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#CheckFunction_HasDuplicates.
	public exitCheckFunction_HasDuplicates(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckStringOrListUnary(context, this.node, this.errorCollector, EveryParserType.Boolean, EveryParserType.Boolean);
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_Concat.
	public enterFunction_Concat(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_Concat.
	public exitFunction_Concat(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckOnlyStringOrOnlyArraySameResult(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_Count.
	public enterFunction_Count(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_Count.
	public exitFunction_Count(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckStringOrListUnary(context, this.node, this.errorCollector, EveryParserType.Number, EveryParserType.Number);
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_Distinc.
	public enterFunction_Distinc(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_Distinc.
	public exitFunction_Distinc(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckStringOrListUnary(context, this.node, this.errorCollector, EveryParserType.String, EveryParserType.Array);
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_Difference.
	public enterFunction_Difference(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_Difference.
	public exitFunction_Difference(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckOnlyStringOrOnlyArraySameResult(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_Except.
	public enterFunction_Except(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_Except.
	public exitFunction_Except(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckOnlyStringOrOnlyArraySameResult(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_IndexOf.
	public enterFunction_IndexOf(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_IndexOf.
	public exitFunction_IndexOf(context: ParserRuleContext): void {
		if (!this.node)
			return;

		if (this.errorCollector.CheckParamsCount(context, 2, this.node.Children)) {
			var type1 = this.node.Children[0].ValueType;

			if (!EveryParserTypeHelper.IsString(type1) && !EveryParserTypeHelper.IsArrayType(type1))
				this.errorCollector.AddError(context, ErrorCode.FirstIsNotArray, "First parameter must be a string or an Array");
			else
				this.node.ValueType = EveryParserType.Number;
		}

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_IndexOfStart.
	public enterFunction_IndexOfStart(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_IndexOfStart.
	public exitFunction_IndexOfStart(context: ParserRuleContext): void {
		if (!this.node)
			return;

		if (this.errorCollector.CheckParamsCount(context, 3, this.node.Children)) {
			var type1 = this.node.Children[0].ValueType;
			var type3 = this.node.Children[2].ValueType;

			if (!EveryParserTypeHelper.IsString(type1) && !EveryParserTypeHelper.IsArrayType(type1))
				this.errorCollector.AddError(context, ErrorCode.FirstIsNotArray, "First parameter must be a string or an Array");
			else if (!EveryParserTypeHelper.IsNumber(type3))
				this.errorCollector.AddError(context, ErrorCode.ThridNotNumber, "Third parameter must be a number");
			else
				this.node.ValueType = EveryParserType.Number;
		}

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_IndexOfStartEnd.
	public enterFunction_IndexOfStartEnd(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_IndexOfStartEnd.
	public exitFunction_IndexOfStartEnd(context: ParserRuleContext): void {
		if (!this.node)
			return;

		if (this.errorCollector.CheckParamsCount(context, 4, this.node.Children)) {
			var type1 = this.node.Children[0].ValueType;
			var type3 = this.node.Children[2].ValueType;
			var type4 = this.node.Children[3].ValueType;

			if (!EveryParserTypeHelper.IsString(type1) && !EveryParserTypeHelper.IsArrayType(type1))
				this.errorCollector.AddError(context, ErrorCode.FirstIsNotArray, "First parameter must be a string or an Array");
			else if (!EveryParserTypeHelper.IsNumber(type3))
				this.errorCollector.AddError(context, ErrorCode.ThridNotNumber, "Third parameter must be a number");
			else if (!EveryParserTypeHelper.IsNumber(type4))
				this.errorCollector.AddError(context, ErrorCode.ForthNotNumber, "Forth parameter must be a number");
			else
				this.node.ValueType = EveryParserType.Number;
		}

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_Lower.
	public enterFunction_Lower(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_Lower.
	public exitFunction_Lower(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckStringOrArrayOfStringsUnary(context, this.node, this.errorCollector, EveryParserType.String, EveryParserType.ArrayOfString);
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_Reverse.
	public enterFunction_Reverse(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_Reverse.
	public exitFunction_Reverse(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckStringOrListUnary(context, this.node, this.errorCollector, EveryParserType.String, EveryParserType.Array);
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_Upper.
	public enterFunction_Upper(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_Upper.
	public exitFunction_Upper(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckStringOrArrayOfStringsUnary(context, this.node, this.errorCollector, EveryParserType.String, EveryParserType.ArrayOfString);
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_Sort.
	public enterFunction_Sort(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_Sort.
	public exitFunction_Sort(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckStringOrListUnary(context, this.node, this.errorCollector, EveryParserType.String, EveryParserType.Array);
	}



	// public enter a parse tree produced by EveryGrammarParser#Function_Trim.
	public enterFunction_Trim(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Function_Trim.
	public exitFunction_Trim(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckStringOrListUnary(context, this.node, this.errorCollector, EveryParserType.String, EveryParserType.Array);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Abs.
	public enterMath_Abs(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Abs.
	public exitMath_Abs(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ACos.
	public enterMath_ACos(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ACos.
	public exitMath_ACos(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ACosH.
	public enterMath_ACosH(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ACosH.
	public exitMath_ACosH(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ASin.
	public enterMath_ASin(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ASin.
	public exitMath_ASin(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ASinH.
	public enterMath_ASinH(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ASinH.
	public exitMath_ASinH(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ATan.
	public enterMath_ATan(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ATan.
	public exitMath_ATan(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ATan2.
	public enterMath_ATan2(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ATan2.
	public exitMath_ATan2(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ATanH.
	public enterMath_ATanH(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ATanH.
	public exitMath_ATanH(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Cbrt.
	public enterMath_Cbrt(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Cbrt.
	public exitMath_Cbrt(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Cos.
	public enterMath_Cos(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Cos.
	public exitMath_Cos(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_CosH.
	public enterMath_CosH(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_CosH.
	public exitMath_CosH(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Ceilling.
	public enterMath_Ceilling(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Ceilling.
	public exitMath_Ceilling(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Clamp.
	public enterMath_Clamp(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Clamp.
	public exitMath_Clamp(context: ParserRuleContext): void {
		if (!this.node)
			return;

		if (this.errorCollector.CheckParamsCount(context, 3, this.node.Children)) {
			var type1 = this.node.Children[0].ValueType;
			var type2 = this.node.Children[1].ValueType;
			var type3 = this.node.Children[2].ValueType;

			if ((!EveryParserTypeHelper.IsNumberArray(type1) && !EveryParserTypeHelper.IsNumber(type1)) || (!EveryParserTypeHelper.IsNumberArray(type2) && !EveryParserTypeHelper.IsNumber(type2)) || (!EveryParserTypeHelper.IsNumberArray(type3) && !EveryParserTypeHelper.IsNumber(type3)))
				this.errorCollector.AddError(context, ErrorCode.IsNotNumberOrArrayOfNumbers, "One or more parameters are not Numbers or Array of Numbers!");
			else if (EveryParserTypeHelper.IsNumberArray(type1) || EveryParserTypeHelper.IsNumberArray(type2) || EveryParserTypeHelper.IsNumberArray(type3))
				this.node.ValueType = EveryParserType.ArrayOfNumber;
			else
				this.node.ValueType = EveryParserType.Number;
		}

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_CrossSum.
	public enterMath_CrossSum(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_CrossSum.
	public exitMath_CrossSum(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Derivative.
	public enterMath_Derivative(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Math_Derivative.
	public exitMath_Derivative(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Math_Exp.
	public enterMath_Exp(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Exp.
	public exitMath_Exp(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Floor.
	public enterMath_Floor(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Floor.
	public exitMath_Floor(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Integration.
	public enterMath_Integration(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#Math_Integration.
	public exitMath_Integration(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#Math_Log.
	public enterMath_Log(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Log.
	public exitMath_Log(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Log2.
	public enterMath_Log2(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Log2.
	public exitMath_Log2(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Log10.
	public enterMath_Log10(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Log10.
	public exitMath_Log10(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Max_Array.
	public enterMath_Max_Array(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Max_Array.
	public exitMath_Max_Array(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector, EveryParserType.Number, EveryParserType.Number, EveryParserType.None);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Max_Two.
	public enterMath_Max_Two(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Max_Two.
	public exitMath_Max_Two(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Min_Array.
	public enterMath_Min_Array(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Min_Array.
	public exitMath_Min_Array(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector, EveryParserType.Number, EveryParserType.Number, EveryParserType.None);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Min_Two.
	public enterMath_Min_Two(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Min_Two.
	public exitMath_Min_Two(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Power.
	public enterMath_Power(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Power.
	public exitMath_Power(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Round_Not_Decimal.
	public enterMath_Round_Not_Decimal(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Round_Not_Decimal.
	public exitMath_Round_Not_Decimal(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Round_Decimal.
	public enterMath_Round_Decimal(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Round_Decimal.
	public exitMath_Round_Decimal(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Root.
	public enterMath_Root(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Root.
	public exitMath_Root(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Sin.
	public enterMath_Sin(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Sin.
	public exitMath_Sin(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_SinH.
	public enterMath_SinH(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_SinH.
	public exitMath_SinH(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Sqrt.
	public enterMath_Sqrt(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Sqrt.
	public exitMath_Sqrt(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Tan.
	public enterMath_Tan(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Tan.
	public exitMath_Tan(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_TanH.
	public enterMath_TanH(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_TanH.
	public exitMath_TanH(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Truncate.
	public enterMath_Truncate(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Truncate.
	public exitMath_Truncate(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Norm.
	public enterMath_Norm(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Norm.
	public exitMath_Norm(context: ParserRuleContext): void {
		if (!this.node)
			return;

		if (this.errorCollector.CheckParamsCount(context, 2, this.node.Children)) {
			if (!EveryParserTypeHelper.IsNumberArray(this.node.Children[0].ValueType))
				this.errorCollector.AddError(context, ErrorCode.FirstNotNumberArray, "First parameter must be an Array");
			else if (!EveryParserTypeHelper.IsNumber(this.node.Children[1].ValueType))
				this.errorCollector.AddError(context, ErrorCode.SecondNotNumber, "Second parameter must be a number");
			else
				this.node.ValueType = EveryParserType.Number;
		}

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_EulerNorm.
	public enterMath_EulerNorm(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_EulerNorm.
	public exitMath_EulerNorm(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckListOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_MaxNorm.
	public enterMath_MaxNorm(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_MaxNorm.
	public exitMath_MaxNorm(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckListOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_GreatesCommonDivisor.
	public enterMath_GreatesCommonDivisor(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_GreatesCommonDivisor.
	public exitMath_GreatesCommonDivisor(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_LeastCommonMultiple.
	public enterMath_LeastCommonMultiple(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_LeastCommonMultiple.
	public exitMath_LeastCommonMultiple(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_DotProduct.
	public enterMath_DotProduct(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_DotProduct.
	public exitMath_DotProduct(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckListOfNumbersBinary(context, this.node, this.errorCollector, EveryParserType.Number);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Binomila.
	public enterMath_Binomila(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Binomila.
	public exitMath_Binomila(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersBinary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ACot.
	public enterMath_ACot(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ACot.
	public exitMath_ACot(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ACotH.
	public enterMath_ACotH(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ACotH.
	public exitMath_ACotH(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ACsc.
	public enterMath_ACsc(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ACsc.
	public exitMath_ACsc(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ACscH.
	public enterMath_ACscH(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ACscH.
	public exitMath_ACscH(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ASec.
	public enterMath_ASec(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ASec.
	public exitMath_ASec(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_ASecH.
	public enterMath_ASecH(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_ASecH.
	public exitMath_ASecH(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Cot.
	public enterMath_Cot(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Cot.
	public exitMath_Cot(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_CotH.
	public enterMath_CotH(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_CotH.
	public exitMath_CotH(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Csc.
	public enterMath_Csc(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Csc.
	public exitMath_Csc(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_CscH.
	public enterMath_CscH(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_CscH.
	public exitMath_CscH(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_Sec.
	public enterMath_Sec(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_Sec.
	public exitMath_Sec(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#Math_SecH.
	public enterMath_SecH(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#Math_SecH.
	public exitMath_SecH(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckNumberOrArrayOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#MathStatistic_CoVariance.
	public enterMathStatistic_CoVariance(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#MathStatistic_CoVariance.
	public exitMathStatistic_CoVariance(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckListOfNumbersBinary(context, this.node, this.errorCollector, EveryParserType.Number);
	}



	// public enter a parse tree produced by EveryGrammarParser#MathStatistic_Mean.
	public enterMathStatistic_Mean(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#MathStatistic_Mean.
	public exitMathStatistic_Mean(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckListOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#MathStatistic_Median.
	public enterMathStatistic_Median(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#MathStatistic_Median.
	public exitMathStatistic_Median(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckListOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#MathStatistic_Pearson.
	public enterMathStatistic_Pearson(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#MathStatistic_Pearson.
	public exitMathStatistic_Pearson(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckListOfNumbersBinary(context, this.node, this.errorCollector, EveryParserType.Number);
	}



	// public enter a parse tree produced by EveryGrammarParser#MathStatistic_Quantil.
	public enterMathStatistic_Quantil(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#MathStatistic_Quantil.
	public exitMathStatistic_Quantil(context: ParserRuleContext): void {
		if (!this.node)
			return;

		if (this.errorCollector.CheckParamsCount(context, 2, this.node.Children)) {
			if (!EveryParserTypeHelper.IsNumberArray(this.node.Children[0].ValueType))
				this.errorCollector.AddError(context, ErrorCode.FirstNotNumberArray, "First parameter must be an Array");
			else if (!EveryParserTypeHelper.IsNumber(this.node.Children[1].ValueType))
				this.errorCollector.AddError(context, ErrorCode.SecondNotNumber, "Second parameter must be a number");
			else
				this.node.ValueType = EveryParserType.Number;
		}

		this.node = this.node.Parent;
	}



	// public enter a parse tree produced by EveryGrammarParser#MathStatistic_Spearman.
	public enterMathStatistic_Spearman(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#MathStatistic_Spearman.
	public exitMathStatistic_Spearman(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckListOfNumbersBinary(context, this.node, this.errorCollector, EveryParserType.Number);
	}



	// public enter a parse tree produced by EveryGrammarParser#MathStatistic_StD.
	public enterMathStatistic_StD(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#MathStatistic_StD.
	public exitMathStatistic_StD(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckListOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#MathStatistic_Variance.
	public enterMathStatistic_Variance(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#MathStatistic_Variance.
	public exitMathStatistic_Variance(context: ParserRuleContext): void {
		if (this.node)
			this.node = EveryGrammarTypeListenerHelper.CheckListOfNumbersUnary(context, this.node, this.errorCollector);
	}



	// public enter a parse tree produced by EveryGrammarParser#expr_args.
	public enterExpr_args(context: ParserRuleContext): void { }


	// public exit a parse tree produced by EveryGrammarParser#expr_args.
	public exitExpr_args(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#ArrayCreation_Empty.
	public enterArrayCreation_Empty(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode(EveryParserType.EmptyArray);
	}


	// public exit a parse tree produced by EveryGrammarParser#ArrayCreation_Empty.
	public exitArrayCreation_Empty(context: ParserRuleContext): void { }



	// public enter a parse tree produced by EveryGrammarParser#ArrayCreation.
	public enterArrayCreation(context: ParserRuleContext): void {
		if (this.node)
			this.node = this.node.AddChildNode();
	}


	// public exit a parse tree produced by EveryGrammarParser#ArrayCreation.
	public exitArrayCreation(context: ParserRuleContext): void {
		if (this.node) {
			this.node.ValueType = EveryGrammarTypeListenerHelper.GetArrayType(this.node.Children);
			this.node = this.node.Parent;
		}
	}
}
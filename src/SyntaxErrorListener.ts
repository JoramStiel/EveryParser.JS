import { Recognizer, Token } from "antlr4";
import { ErrorListener } from "antlr4/error/ErrorListener";
import { ErrorCode } from "./GrammarListener/ErrorCollector"

namespace EveryParser {
    type SyntaxError = {
        errorCode: number;
        message: string;
    }

    class SyntaxErrorListener extends ErrorListener {
        private _errors: SyntaxError[] = [];

        hasErrors = () => this._errors?.length > 0;

        GetErrors = (): SyntaxError[] => this._errors;

        ClearErrors = () => this._errors = [];

        syntaxError = (recognizer: Recognizer, offendingSymbol: Token, line: number, column: number, msg: string, e: any): void => {
            this._errors.push({ errorCode: ErrorCode.SyntaxError, message: `${msg} ${line}:${column}` });
        }
    }
}
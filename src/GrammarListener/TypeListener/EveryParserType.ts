namespace EveryParser.GrammarListener.TypeListener {
    export enum EveryParserType {
        None = 0,
        Number = 1,
        Boolean = 2,
        String = 4,
        DateTime = 8,
        ArrayOfNumber = 16,
        ArrayOfBoolean = 32,
        ArrayOfString = 64,
        ArrayOfDateTime = 128,
        EmptyArray = 256,
        Array = 512,
    }

    export class EveryParserTypeHelper {
        public static IsNumber = (type: EveryParserType) => (type & EveryParserType.Number) == EveryParserType.Number;

        public static IsNumberArray = (type: EveryParserType) => (type & EveryParserType.ArrayOfNumber) == EveryParserType.ArrayOfNumber;

        public static IsNumberOrArrayOfNumbers = (type: EveryParserType) => (type & (EveryParserType.Number | EveryParserType.ArrayOfNumber)) == (EveryParserType.Number | EveryParserType.ArrayOfNumber);

        public static IsEmptyArray = (type: EveryParserType) => (type & EveryParserType.EmptyArray) == EveryParserType.EmptyArray;

        public static IsArray = (type: EveryParserType) => (type & EveryParserType.Array) == EveryParserType.Array;

        public static IsString = (type: EveryParserType) => (type & EveryParserType.String) == EveryParserType.String;

        public static IsStringArray = (type: EveryParserType) => (type & EveryParserType.ArrayOfString) == EveryParserType.ArrayOfString;

        public static IsStringOrArrayOfStrings = (type: EveryParserType) => (type & (EveryParserType.String | EveryParserType.ArrayOfString)) == (EveryParserType.String | EveryParserType.ArrayOfString);

        public static IsArrayType = (type: EveryParserType) => {
            switch (type) {
                case EveryParserType.ArrayOfNumber:
                case EveryParserType.ArrayOfBoolean:
                case EveryParserType.ArrayOfString:
                case EveryParserType.ArrayOfDateTime:
                case EveryParserType.EmptyArray:
                case EveryParserType.Array:
                    return true;
            }

            return false;
        }

        public static IsBoolean = (type: EveryParserType) => (type & EveryParserType.Boolean) == EveryParserType.Boolean;

        public static IsBooleanArray = (type: EveryParserType) => (type & EveryParserType.ArrayOfBoolean) == EveryParserType.ArrayOfBoolean;

        public static IsDateTime = (type: EveryParserType) => (type & EveryParserType.DateTime) == EveryParserType.DateTime;
    }
}
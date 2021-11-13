class TypeCheckHelper {
    /// <summary>
    /// Checks if all objects are type of List(object)
    /// </summary>
    /// <param name="objs"></param>
    /// <returns></returns>
    static IsArrayOfObjectList = (objs: Array<any>): objs is Array<any> => !objs.find(obj => !(obj.map !== undefined));

    /// <summary>
    /// Checks if all objects are type of boolean
    /// </summary>
    /// <param name="objs"></param>
    static IsArrayOfBoolean = (objs: Array<any>): objs is Array<any> => !objs.find(obj => !this.IsBoolean(obj));

    /// <summary>
    /// Checks if all objects are type of boolean and/or List(boolean)
    /// </summary>
    /// <param name="objs"></param>
    /// <returns></returns>
    static IsArrayOfBooleanOrBooleanList = (objs: Array<any>): objs is Array<any> =>
        !objs.find(obj => !(this.IsBoolean(obj) || (obj.find !== undefined && !obj.find(x => !this.IsBoolean(x)))));

    /// <summary>
    /// Checks if all objects are type of string or List(string)
    /// </summary>
    /// <param name="objs"></param>
    /// <returns></returns>
    static IsStringOrStringList = (objs: Array<any>): objs is Array<any> =>
        !objs.find(obj => !(obj instanceof String || (obj.find !== undefined && !obj.find(x => !this.IsString(x)))));

    /// <summary>
    /// Checks if all objects are type of string or List(object)
    /// </summary>
    /// <param name="objs"></param>
    /// <returns></returns>
    static IsStringOrList = (objs: Array<any>): objs is Array<any> =>
        !objs.find(obj => !(obj instanceof String || obj.find !== undefined));

    /// <summary>
    /// Checks if all objects are type of List(number)
    /// </summary>
    /// <param name="objs"></param>
    /// <returns></returns>
    static IsArrayOfNumberList = (objs: Array<any>): objs is Array<any> =>
        !objs.find(obj => !(obj.find !== undefined && this.IsArrayOfNumber(obj)));

    /// <summary>
    /// Checks if all objects are type of number and/or List(number)
    /// </summary>
    /// <param name="objs"></param>
    /// <returns></returns>
    static IsArrayOfNumberOrNumberList = (objs: Array<any>): objs is Array<any> =>
        !objs.find(obj => !(this.IsNumber(obj) || (obj.find !== undefined && this.IsArrayOfNumber(obj))));

    /// <summary>
    /// Checks if all objects are type of number
    /// </summary>
    /// <param name="objs"></param>
    /// <returns></returns>
    static IsArrayOfNumber = (objs: Array<any>): objs is Array<any> => !objs.find(obj => !this.IsNumber(obj));

    /// <summary>
    /// Checks if one object of the array is null
    /// </summary>
    /// <param name="objs"></param>
    /// <returns></returns>
    static IsOneOfNull = (objs: Array<any>): objs is Array<any> => objs.find(obj => obj == null);

    /// <summary>
    /// Checks if object is type of number
    /// </summary>
    /// <param name="obj"></param>
    /// <returns></returns>
    static IsNumber = (obj: any): obj is number => obj instanceof Number;

    /// <summary>
    /// Checks if object is type of boolean
    /// </summary>
    /// <param name="obj"></param>
    /// <returns></returns>
    static IsBoolean = (obj: any): obj is boolean => obj instanceof Boolean;

    /// <summary>
    /// Checks if object is type of DateTime
    /// </summary>
    /// <param name="obj"></param>
    /// <returns></returns>
    static IsDateTime = (obj: any): obj is Date => obj.getDate !== undefined;

    static IsString = (obj: any): obj is string => obj instanceof String;

    static IsArrayOfDateTime = (objs: Array<any>): objs is Array<any> => !objs.find(obj => !this.IsDateTime(obj));
}
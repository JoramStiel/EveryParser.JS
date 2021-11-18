/// <summary>
/// Type for ArraySlicing
/// </summary>
export enum ArraySlicingType {
    Indexing,
    Slicing,
    StepSlicing,
    StartSlicing,
    StartStepSlicing,
    EndSlicing,
    EndStepSlicing,
    AllStepSlicing
}

export class ArraySlicingTypeExtension {
    /// <summary>
    /// Returns the count of parameters for each type of ArraySlicing
    /// </summary>
    /// <param name="type">ArraySlicingType</param>
    /// <returns>int</returns>
    static GetParameterCount(type: ArraySlicingType): number {
        switch (type) {
            case ArraySlicingType.Indexing:
                return 2;

            case ArraySlicingType.Slicing:
                return 3;

            case ArraySlicingType.StepSlicing:
                return 4;

            case ArraySlicingType.StartSlicing:
                return 2;

            case ArraySlicingType.StartStepSlicing:
                return 3;

            case ArraySlicingType.EndSlicing:
                return 2;

            case ArraySlicingType.EndStepSlicing:
                return 3;

            case ArraySlicingType.AllStepSlicing:
                return 2;

            default:
                return -1;
        }
    }
}
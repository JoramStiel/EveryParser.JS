export class NodeCalculator {
    public Parent?: NodeCalculator;
    public Index: number = -1;
    public Value: any = undefined;
    public Children: NodeCalculator[] = [];

    constructor(parent?: NodeCalculator) {
        this.Parent = parent;
    }



    public static CreateFromParentAndIndex(parent: NodeCalculator, index: number) {
        let node = new NodeCalculator(parent);
        node.Index = index;
        return node;
    }

    public static CreateFromParentAndIndexAndValue(parent: NodeCalculator, index: number, value: any) {
        let node = new NodeCalculator(parent);
        node.Index = index;
        node.Value = value;
        return node;
    }

    public static CreateFromValue(value: any) {
        let node = new NodeCalculator();
        node.Value = value;
        return node;
    }
    public AddChildNode = (value?: number) => {
        if (!this.Children)
            this.Children = [];

        const newNode = NodeCalculator.CreateFromParentAndIndexAndValue(this, this.Children.length, value);
        this.Children.push(newNode);
        return newNode;
    }
}
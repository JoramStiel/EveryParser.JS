import { EveryParserType } from "./EveryParserType";

export class TypeNode {
    public Parent?: TypeNode;
    public ValueType = EveryParserType.None;
    public Children: TypeNode[] = [];

    constructor(parent?: TypeNode) {
        this.Parent = parent;
    }

    public static CreateFromType(type: EveryParserType): TypeNode {
        let node = new TypeNode();
        node.ValueType = type;
        return node;
    }

    public static CreateFromParentAndType(parent: TypeNode, type: EveryParserType): TypeNode {
        let node = new TypeNode(parent);
        node.ValueType = type;
        return node;
    }

    public AddChildNode = (value = EveryParserType.None): TypeNode => {
        if (this.Children)
            this.Children = [];

        const newNode = TypeNode.CreateFromParentAndType(this, value);
        this.Children.push(newNode);
        return newNode;
    }
}
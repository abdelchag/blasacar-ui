class LinkedNode<T> {
    element: T;
    next: LinkedNode<T> | null;
    previous: LinkedNode<T> | null;

    constructor(element: T) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

export class LinkedList<T> {
    head: LinkedNode<T> | null = null;
    len = 0;

    constructor(headElement?: LinkedNode<T>) {
        this.head = headElement || null;
    }

    public append(elem: T): LinkedList<T> {
        let node = new LinkedNode(elem);
        let current: LinkedNode<T>;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            while (node.previous) {
                node = node.previous;
            }
            node.previous = current;
        }
        this.len++;
        return this;
    }
}

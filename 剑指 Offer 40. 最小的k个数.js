/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
    let heap = new MaxHeap(arr.slice(0, k));
    for (let i = k; i < arr.length; i++) {
        if (heap.top() > arr[i]) {
            heap.extract();
            heap.insert(arr[i]);
        }
    }
    return heap.container;
}
class MaxHeap {
        constructor(arr = []) {
            this.container = [];
            if (Array.isArray(arr)) {
                arr.forEach(this.insert.bind(this));
            }
        }

        insert(data) {
            const { container } = this;
            container.push(data);
            let index = container.length - 1;
            while (index) {
                let parent = Math.floor((index - 1) / 2);
                if (container[parent] >= container[index]) {
                    break;
                }
                [container[parent], container[index]] = [container[index], container[parent]];
                index = parent;
            }
        }

        extract() {
            const { container } = this;
            [container[0], container[container.length - 1]] = [container[container.length - 1], container[0]];
            const val = container.pop();
            let index = 0;
            let child = 1;
            while (child < container.length) {
                if (child + 1 < container.length && container[child + 1] > container[child]) {
                    child = child + 1;
                }

                if (container[index] >= container[child]) {
                    break;
                }

                [container[index], container[child]] = [container[child], container[index]];
                index = child;
                child = child * 2 + 1; 
            }
            return val;
        }

        top() {
            const { container } = this;
            if (container.length) {
                return container[0];
            }
            return null;

        }
    }
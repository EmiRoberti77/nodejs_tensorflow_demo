const tf = require('@tensorflow/tfjs-node');

const a = tf.tensor1d([1, 2, 3]);
a.print();
const b = tf.tensor1d([10, 20, 30]);
b.print();
a.add(b).print();

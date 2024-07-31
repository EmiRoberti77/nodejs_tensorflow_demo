const tf = require('@tensorflow/tfjs-node');

function createLotsOfTensors() {
  for (let i = 0; i < 1000; i++) {
    const a = tf.tensor1d([1, 2, 3]);
    const b = tf.scalar(i);
    a.mul(b).print();
  }
}

//this will not clear memory to be cleaned out
//  createLotsOfTensors();
//  console.log(tf.memory().numTensors);

//this allows memory to be cleaned out
tf.tidy(createLotsOfTensors);
console.log(tf.memory().numTensors);

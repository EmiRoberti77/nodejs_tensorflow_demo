const tf = require('@tensorflow/tfjs-node');

//tidy will clean up all tensor after all use
const y = tf.tidy(() => {
  const a = tf.tensor1d([1, 2, 3]);
  const b = tf.tensor1d([4, 5, 6]);
  return a.add(b);
});

y.print();
console.log(tf.memory().numTensors);

async function trainModel() {
  const output = document.getElementById("output");
 output.innerText = "Обучаване... ⏳";

  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  model.compile({
    loss: 'meanSquaredError',
    optimizer: 'sgd'
  });

  const xs = tf.tensor([1, 2, 3, 4], [4, 1]);
  const ys = tf.tensor([1, 3, 5, 7], [4, 1]);

  await model.fit(xs, ys, { epochs: 200 });

  // използваме въведеното число
  const prediction = model.predict(tf.tensor([userValue], [1, 1]));
  const result = prediction.dataSync()[0];

  output.innerText = `Прогноза за x=${userValue}: ${result.toFixed(2)}`;
}

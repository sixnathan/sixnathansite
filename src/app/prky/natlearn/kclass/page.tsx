export default function KClassClassification() {
  return (
    <div className="space-y-8">
      <div>
        <a href="/prky/natlearn" className="text-sm text-muted hover:text-accent">
          ← back to natlearn
        </a>
      </div>
      <section>
        <h1 className="text-3xl font-bold mb-4">kclass</h1>
        <time className="text-sm text-muted hidden">2025-12-13</time>
      </section>

      <section>
        <pre className="p-4 border border-muted rounded-lg overflow-x-auto">
          <code>{`import numpy as np

class KClassClassification:
    def __init__(self, inputs, kclasses):
        self.theta = np.random.randn(kclasses, inputs.shape[1]) * 0.01
        self.biases = np.zeros((kclasses, 1))


    def logits(self, inputs):
        adjustedinputs = self.theta @ inputs.T
        logits = adjustedinputs + self.biases
        return logits

    def softmax(self, logits):
        probs = np.exp(logits-np.max(logits))/ np.sum(np.exp(logits-np.max(logits)), axis=0)
        return probs

    def lossy(self, probs, targs):
        loss = -np.log(probs.T @ targs)
        return loss

    def grad(self, probs, targs, inputs):
        dz = probs - targs
        dw = dz @ inputs
        db = dz
        return dw, db

    def update(self, dw, db, learningrate):

        self.theta = self.theta  - (learningrate * dw)

        self.biases = self.biases - (learningrate * db)

    def trainingloop(self, inputs, targs, learningrate, epochs):

        for i in range(epochs):

            logit = self.logits(inputs)
            probs = self.softmax(logit)
            dw, db = self.grad(probs, targs, inputs)
            self.update(dw, db, learningrate)
            print('loss:' , self.lossy(probs, targs))


    def predict(self, inputs):
        logs = self.logits(inputs)
        dist = self.softmax(logs)
        prediction = np.argmax(dist)
        confidence = np.max(dist)

        return prediction, dist, confidence`}</code>
        </pre>
      </section>
    </div>
  );
}

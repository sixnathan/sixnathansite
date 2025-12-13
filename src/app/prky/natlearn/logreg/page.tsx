export default function LogisticRegression() {
  return (
    <div className="space-y-8">
      <div>
        <a href="/prky/natlearn" className="text-sm text-muted hover:text-accent">
          ← back to natlearn
        </a>
      </div>
      <section>
        <h1 className="text-3xl font-bold mb-4">logreg</h1>
        <time className="text-sm text-muted">2025-12-04</time>
      </section>

      <section>
        <pre className="p-4 border border-zinc-400 rounded-lg whitespace-pre-wrap break-words">
          <code>{`import numpy as np

class LogisticRegression:
    def __init__(self):
        self.theta = None

    def sig(self, z):
        h = 1 / (1 + np.exp(-z))
        return h

    def hypo(self, X):
        return self.sig(X @ self.theta)

    def cost(self, X, y):
        h = self.hypo(X)
        cost = (-1/X.shape[0]) * np.sum(y * np.log(h) + (1-y) * np.log(1-h))
        return cost

    def graddec(self, X, y, rate, iterations):
        self.theta = np.zeros((X.shape[1], 1))
        for i in range(iterations):
            h = self.hypo(X)
            newgrad = (1/X.shape[0]) * X.T @ (h - y)
            self.theta = self.theta - rate * newgrad`}</code>
        </pre>
      </section>
    </div>
  );
}

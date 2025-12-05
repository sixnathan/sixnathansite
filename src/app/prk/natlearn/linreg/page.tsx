export default function LinearRegression() {
  return (
    <div className="space-y-8">
      <div>
        <a href="/prk/natlearn" className="text-sm text-muted hover:text-accent">
          ← back to natlearn
        </a>
      </div>
      <section>
        <h1 className="text-3xl font-bold mb-4">linreg</h1>
        <time className="text-sm text-muted">2025-12-02</time>
      </section>

      <section>
        <pre className="p-4 border border-zinc-400 rounded-lg overflow-x-auto">
          <code>{`import numpy as np

class LinearRegression:
    def __init__(self):
        self.theta = None

    def hypo(self, X):
        return X @ self.theta

    def cost(self, X, y):
        h = self.hypo(X)
        loss = h - y
        cost = (loss.T @ loss)[0,0] / (2 * X.shape[0])
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

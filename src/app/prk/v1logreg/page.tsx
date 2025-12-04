export default function V1LogisticRegression() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">v1 logreg</h1>
      </section>

      <section>
        <pre className="p-4 border border-zinc-400 rounded-lg overflow-x-auto">
          <code>{`import numpy as np

def sig(z):
    h = 1 / (1 + np.exp(-z))
    return h

def cost(X, y, theta):
    b = X @ theta
    thing = np.sum(y * np.log(sig(b)) + (1-y) * np.log(1-sig(b)))
    cost = (-1/(X.shape[0])) * thing
    return cost

def graddec(X, y, rate, iterations):
    theta = np.zeros((X.shape[1], 1))
    for i in range(iterations):
        b = X @ theta
        hypo = sig(b)
        newgrad = (1/X.shape[0]) * X.T @ (hypo - y)
        theta = theta - rate * newgrad
    return theta`}</code>
        </pre>
      </section>
    </div>
  );
}

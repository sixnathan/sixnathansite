export default function V1LinearRegression() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">v1 linear regression</h1>
        <p className="text-muted">cs 229 is pretty fun.</p>
      </section>

      <section>
        <pre className="p-4 border border-zinc-400 rounded-lg overflow-x-auto">
          <code>{`import numpy as np

class LinearRegression:
    def __init__(self):
        self.theta = np.zeros((3,1))

    def hypo(self, test_x):
        h = test_x @ self.theta
        return h

    def cost(self,X, y, h):
        loss = h - y
        squareloss = loss.T @ loss
        c = squareloss[0,0]/(2*X.shape[0])
        return c, loss


    def graddec(self, X, y, rate, iterations):
        for i in range(iterations):
            h = X @ self.theta
            newgrad = (1/(X.shape[0])) * X.T @ (h - y)
            self.theta = self.theta - rate * newgrad
            loss = h - y
            squareloss = loss.T @ loss
            print(squareloss[0,0])`}</code>
        </pre>
      </section>
    </div>
  );
}

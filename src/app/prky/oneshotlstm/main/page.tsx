export default function MainModule() {
  return (
    <div className="space-y-8">
      <div>
        <a href="/prky/oneshotlstm" className="text-sm text-muted hover:text-accent">
          ← back to oneshotlstm
        </a>
      </div>
      <section>
        <h1 className="text-3xl font-bold mb-4">main</h1>
        <p className="text-muted text-sm mb-4">training loop</p>
        <time className="text-sm text-muted">2025-12-10</time>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">implementation</h2>
        <pre className="p-4 border border-zinc-400 rounded-lg overflow-x-auto">
          <code className="text-sm font-mono">{`from features import *

todaysinput = np.random.randn(10, 425)
targets = np.random.randn(10)

trained_weights = trainingloop(
    epochs=100,
    hiddensize=64,
    inputsize=425,
    todaysinput=todaysinput,
    targets=targets,
    learningrate=0.001
)`}</code>
        </pre>
      </section>
    </div>
  );
}

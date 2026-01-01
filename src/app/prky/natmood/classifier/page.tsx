export default function Classifier() {
  return (
    <div className="space-y-8">
      <div>
        <a href="/prky/natmood" className="text-sm text-muted hover:text-accent">
          ← back to natmood
        </a>
      </div>
      <section>
        <h1 className="text-3xl font-bold mb-4">classifier</h1>
        <time className="text-sm text-muted hidden">2025-12-08</time>
      </section>

      <section>
        <pre className="p-4 border border-muted rounded-lg overflow-x-auto">
          <code>{`import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix

def converttolabels(labels):
    newlabels = np.zeros(len(labels))
    newlabels[labels ==3] = 1
    newlabels[labels >=4] = 2
    return newlabels

def selectfeatures(X, y, k):
    correlations = []
    for i in range(X.shape[1]):
        corr = np.corrcoef(X[:, i], y)[0,1]
        correlations.append(corr)
    correlations = np.array(correlations)
    abscorr = np.abs(correlations)

    sortedindicies = np.argsort(abscorr)
    topkindicies = sortedindicies[-k:]

    Xselected = X[:, topkindicies]

    return topkindicies, Xselected

def traineval(X, y, nestimators=100, testsize = 0.2, randomstate=42):
    Xtrain, Xtest, ytrain, ytest = train_test_split(X,y, test_size = testsize, random_state = randomstate)

    model = RandomForestClassifier(n_estimators=nestimators, random_state=randomstate)
    model.fit(Xtrain, ytrain)

    ypred = model.predict(Xtest)
    accuracy = accuracy_score(ytest, ypred)
    f1 = f1_score(ytest, ypred, average='weighted')
    cm = confusion_matrix(ytest, ypred)

    return {
        'accuracy': accuracy,
        'f1': f1,
        'confusion_matrix': cm,
        'model': model

    }`}</code>
        </pre>
      </section>
    </div>
  );
}

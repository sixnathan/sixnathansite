export default function Features() {
  return (
    <div className="space-y-8">
      <div>
        <a href="/prky/natmood" className="text-sm text-muted hover:text-accent">
          ← back to natmood
        </a>
      </div>
      <section>
        <h1 className="text-3xl font-bold mb-4">features</h1>
        <time className="text-sm text-muted hidden">2025-12-08</time>
      </section>

      <section>
        <pre className="p-4 border border-muted rounded-lg overflow-x-auto">
          <code>{`import numpy as np
from scipy.signal import welch
from scipy.integrate import trapezoid
from src.preprocessing import segmentintowindows

BANDS = {
      'delta': (0.5, 4),
      'theta': (4, 8),
      'alpha': (8, 13),
      'beta': (13, 30),
      'gamma': (30, 50)
  }


def computepsd(data, fs):
    freqs, psd = welch(data, fs, nperseg=min(256, len(data)))
    return freqs, psd

def computebandpower(data, fs, band):
    freqs, psd = computepsd(data, fs)
    idxband = (freqs>= band[0]) & (freqs <=band[1])
    freqsinband = freqs[idxband]
    psdinband = psd[idxband]
    bandpower = trapezoid(psdinband, freqsinband)
    return bandpower

def extractbandpowers(data, fs):
    bandpowers = {}
    for bandname, bandrange in BANDS.items():
        power = computebandpower(data, fs, bandrange)
        bandpowers[bandname] = power
    return bandpowers

def mobility(data):
    diff1 = np.diff(data)
    signalvar = np.var(data)
    if signalvar > 0:
        vardiff = np.var(diff1)
        mobility = np.sqrt(vardiff/signalvar)
    else:
        mobility = 0
    return mobility

def complexity(data):
    diff1 = np.diff(data)
    mobdata = mobility(data)
    if mobdata > 0:
        complexity = mobility(diff1)/mobdata
    else:
        complexity = 0
    return complexity

def hjorthparams(data):
    activity1 = np.var(data)
    mobility1 = mobility(data)
    complexity1 = complexity(data)
    return {
        'activity' : activity1,
        'mobility' : mobility1,
        'complexity' : complexity1
    }

def shannonentropy(data, nbins=50,):
    hist, _ = np.histogram(data, bins=nbins, density = True)
    hist = hist[hist>0]
    probs = hist/hist.sum()
    entropy = -np.sum(probs * np.log(probs))
    return entropy

def extractfeaturessinglewindow(window, fs):
    bandpowers = extractbandpowers(window, fs)
    hjorth = hjorthparams(window)
    entropy = shannonentropy(window)
    features = []
    features.append(bandpowers['delta'])
    features.append(bandpowers['theta'])
    features.append(bandpowers['alpha'])
    features.append(bandpowers['beta'])
    features.append(bandpowers['gamma'])

    features.append(hjorth['activity'])
    features.append(hjorth['mobility'])
    features.append(hjorth['complexity'])

    features.append(entropy)

    return np.array(features)

def extractfeaturestrial(trialdata, fs, windowsize):
    windows = segmentintowindows(trialdata, windowsize)
    allfeatures =[]
    for channelidx in range(windows.shape[1]):
        channelwindows = windows[:, channelidx, :]
        windowsfeatureslist = []
        for windowidx in range(windows.shape[0]):
            singlewindow = channelwindows[windowidx, :]
            features = extractfeaturessinglewindow(singlewindow, fs)
            windowsfeatureslist.append(features)

        avgfeatures = np.mean(windowsfeatureslist, axis=0)
        allfeatures.extend(avgfeatures)
    return np.array(allfeatures)

def buildfeaturematrix(eegdata, fs, windowsize):
    ntrials = eegdata.shape[0]
    allfeatures = []
    for i in range(ntrials):
        trialdata = eegdata[i]
        features = extractfeaturestrial(trialdata, fs, windowsize)
        allfeatures.append(features)
    featurematrix = np.array(allfeatures)
    return featurematrix
`}</code>
        </pre>
      </section>
    </div>
  );
}

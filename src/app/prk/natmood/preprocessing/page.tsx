export default function Preprocessing() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">preprocessing</h1>
        <time className="text-sm text-muted">2025-12-08</time>
      </section>

      <section>
        <pre className="p-4 border border-zinc-400 rounded-lg overflow-x-auto">
          <code>{`import numpy as np
from scipy.signal import butter, filtfilt

def selectchannels(data, channels):
    if data.ndim == 2:
        selecteddata = data[channels]
    elif data.ndim == 3:
        selecteddata = data[:, channels]
    elif data.ndim == 1:
        selecteddata = np.empty(len(data), dtype=object)
        for i, trial in enumerate(data):
            selecteddata[i] = trial[channels]
    else:
        raise ValueError(f"Unexpected data dimensions: {data.ndim}")
    return selecteddata

def bandpassfilter(data, lowcut, highcut, fs, order=4):
    nyquist = fs/2
    low = lowcut/nyquist
    high = highcut/nyquist

    b, a = butter(order, [low, high], btype = 'band')

    filtered = filtfilt(b, a, data, axis =-1)

    return filtered

def segmentintowindows(data, windowsize, overlap=0):
    step = windowsize-overlap
    nsamples = data.shape[1]
    nwindows = (nsamples - windowsize) // step + 1
    windowlist = []
    for i in range(nwindows):
        start = i * step
        end = start + windowsize
        window = data[:, start:end]
        windowlist.append(window)
    windows = np.array(windowlist)
    return windows
`}</code>
        </pre>
      </section>
    </div>
  );
}

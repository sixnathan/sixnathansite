export default function Dataloader() {
  return (
    <div className="space-y-8">
      <div>
        <a href="/prky/natmood" className="text-sm text-muted hover:text-accent">
          ← back to natmood
        </a>
      </div>
      <section>
        <h1 className="text-3xl font-bold mb-4">dataloader</h1>
        <time className="text-sm text-muted">2025-12-08</time>
      </section>

      <section>
        <pre className="p-4 border border-zinc-400 rounded-lg overflow-x-auto">
          <code>{`import numpy as np
from scipy.io import loadmat

def loaddreamer(filepath):
    mat = loadmat(filepath)
    data = mat['DREAMER'][0,0]['Data'][0]

    alleeg = []
    allvalence = []
    allarousal = []
    nparticipants = 23
    nvideos = 18
    for participant in range(nparticipants):
        for video in range(nvideos):
            eegtrial = data[participant]['EEG'][0, 0]['stimuli'][0, 0][video, 0]

            if eegtrial.shape[0] > eegtrial.shape[1]:
                eegtrial = eegtrial.T

            valence = data[participant]['ScoreValence'][0, 0][video, 0]
            arousal = data[participant]['ScoreArousal'][0, 0][video, 0]

            alleeg.append(eegtrial)
            allvalence.append(valence)
            allarousal.append(arousal)

    eegdata = np.empty(len(alleeg), dtype=object)
    for i, trial in enumerate(alleeg):
        eegdata[i] = trial

    valencelabels = np.array(allvalence).flatten()
    arousallabels = np.array(allarousal).flatten()

    return eegdata, valencelabels, arousallabels
`}</code>
        </pre>
      </section>
    </div>
  );
}

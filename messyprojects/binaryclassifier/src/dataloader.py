import numpy as np
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

            # Transpose to get (n_channels, n_samples) instead of (n_samples, n_channels)
            if eegtrial.shape[0] > eegtrial.shape[1]:
                eegtrial = eegtrial.T

            valence = data[participant]['ScoreValence'][0, 0][video, 0]
            arousal = data[participant]['ScoreArousal'][0, 0][video, 0]

            alleeg.append(eegtrial)
            allvalence.append(valence)
            allarousal.append(arousal)
    
    # Convert to arrays
    eegdata = np.empty(len(alleeg), dtype=object)
    for i, trial in enumerate(alleeg):
        eegdata[i] = trial

    valencelabels = np.array(allvalence).flatten()
    arousallabels = np.array(allarousal).flatten()

    return eegdata, valencelabels, arousallabels

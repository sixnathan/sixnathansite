import numpy as np
from scipy.signal import butter, filtfilt

def selectchannels(data, channels):
    if data.ndim == 2:
        # Single trial: (n_channels, n_samples)
        selecteddata = data[channels]
    elif data.ndim == 3:
        # Multiple trials stacked: (n_trials, n_channels, n_samples)
        selecteddata = data[:, channels]
    elif data.ndim == 1:
        # Object array of trials - process each individually
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


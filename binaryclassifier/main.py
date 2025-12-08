import numpy as np
from src.dataloader import loaddreamer
from src.preprocessing import selectchannels, bandpassfilter
from src.features import buildfeaturematrix
from src.classifier import converttolabels, selectfeatures, traineval

def runpipeline(datapath):
    """
    Run the complete EEG emotion classification pipeline.

    Args:
        datapath: Path to DREAMER.mat file

    Returns:
        results: Dictionary with accuracy, F1, confusion matrix, model
    """
    print("Loading DREAMER dataset...")
    eegdata, valencelabels, arousallabels = loaddreamer(datapath)
    print(f"Loaded {eegdata.shape[0]} trials")

    print("Selecting 4 Muse-equivalent channels...")
    musechannels = [1, 4, 9, 12]
    eegdata = selectchannels(eegdata, musechannels)
    print(f"Selected channels, new shape: {eegdata.shape}")

    print("Applying bandpass filter...")
    filtereddata = np.empty(len(eegdata), dtype=object)
    for i, trial in enumerate(eegdata):
        filtereddata[i] = bandpassfilter(trial, 0.5, 50, fs=128)
    print(f"Filtered data shape: {filtereddata.shape}")

    print("Extracting features...")
    X = buildfeaturematrix(filtereddata, fs=128, windowsize=128)
    print(f"Feature matrix shape: {X.shape}")

    print("Converting labels to 3-class...")
    y = converttolabels(valencelabels)
    print(f"Label distribution - Negative: {np.sum(y==0)}, Neutral: {np.sum(y==1)}, Positive: {np.sum(y==2)}")

    print("Selecting top 20 features by correlation...")
    selectedindices, Xselected = selectfeatures(X, y, k=20)
    print(f"Selected features shape: {Xselected.shape}")
    print(f"Selected feature indices: {selectedindices}")

    print("Training Random Forest classifier...")
    results = traineval(Xselected, y, nestimators=100, testsize=0.2, randomstate=42)

    print("\n=== Results ===")
    print(f"Accuracy: {results['accuracy']:.3f}")
    print(f"F1 Score: {results['f1']:.3f}")
    print(f"Confusion Matrix:")
    print(results['confusion_matrix'])

    return results

if __name__ == "__main__":
    datapath = "data/DREAMER.mat"
    results = runpipeline(datapath)

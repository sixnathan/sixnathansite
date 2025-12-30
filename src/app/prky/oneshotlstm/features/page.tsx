export default function FeaturesModule() {
  return (
    <div className="space-y-8">
      <div>
        <a href="/prky/oneshotlstm" className="text-sm text-muted hover:text-accent">
          ← back to oneshotlstm
        </a>
      </div>
      <section>
        <h1 className="text-3xl font-bold mb-4">features</h1>
        <p className="text-muted text-sm mb-4">lstm implementation with forward and backward pass</p>
        <time className="text-sm text-muted">2025-12-10</time>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">implementation</h2>
        <pre className="p-4 border border-muted rounded-lg overflow-x-auto">
          <code className="text-sm font-mono">{`import numpy as np

def sigmoid(z):
    sig = 1/(1+np.exp(-z))
    return sig

def initialiseweights(hiddensize, inputsize,):
    fanout = hiddensize
    fanin = hiddensize + inputsize
    std = np.sqrt(2 / (fanout + fanin))
    stdout = np.sqrt(2 / (hiddensize + 1))
    wf = np.random.randn(fanout, fanin) * std
    wi = np.random.randn(fanout, fanin) * std
    wc = np.random.randn(fanout, fanin) * std
    wo = np.random.randn(fanout, fanin) * std
    wout= np.random.randn(1, hiddensize) * stdout

    bf = np.zeros(fanout)
    bi = np.zeros(fanout)
    bc = np.zeros(fanout)
    bo = np.zeros(fanout)
    bout = np.zeros(1)

    hiddenstate = np.zeros(hiddensize)
    cellstate = np.zeros((hiddensize))
    return wf, wi, wc, wo, wout, bf, bi, bc, bo, bout, hiddenstate, cellstate

def forwardpass(wf, wi, wc, wo, wout, bf, bi, bc, bo, bout, previoushiddenstate, previouscellstate, todaysinput):
    combined = np.concatenate([previoushiddenstate, todaysinput])
    forgetgate = sigmoid(wf@combined + bf)
    inputgate = sigmoid(wi@combined + bi)
    candidategate = np.tanh(wc@combined + bc)
    outputgate = sigmoid(wo@combined+bo)
    newcellstate = forgetgate * previouscellstate + inputgate * candidategate

    newhiddenstate = np.tanh(newcellstate) * outputgate

    prediction = wout @ newhiddenstate + bout

    return prediction, newhiddenstate, newcellstate, combined, forgetgate, inputgate, candidategate, outputgate

def backwardpass(prediction, newhiddenstate, newcellstate, combined, forgetgate, inputgate, candidategate, outputgate, wf, wi, wc, wo, wout, bf, bi, bc, bo, bout, previouscellstate, dnewhiddenstate_from_next, dnewcellstate_from_next, target):
    dprediction = 2 * (prediction - target)
    dnewhiddenstate_local = (dprediction * wout.T).flatten()
    dnewhiddenstate = dnewhiddenstate_local + dnewhiddenstate_from_next
    doutputgate = dnewhiddenstate * np.tanh(newcellstate)
    dnewcellstate = dnewhiddenstate * outputgate * (1 - np.tanh(newcellstate)**2) + dnewcellstate_from_next
    dforgetgate = dnewcellstate * previouscellstate
    dinputgate = dnewcellstate * candidategate
    dcandidategate = dnewcellstate * inputgate

    dzoutputgate = doutputgate * outputgate * (1 - outputgate)
    dzforgetgate = dforgetgate * forgetgate * (1 - forgetgate)
    dzinputgate = dinputgate * inputgate * (1 - inputgate)
    dzcandidategate = dcandidategate * (1 - candidategate**2)

    dwf = np.outer(dzforgetgate, combined)
    dwi = np.outer(dzinputgate, combined)
    dwc = np.outer(dzcandidategate, combined)
    dwo = np.outer(dzoutputgate, combined)
    dwout = np.outer(dprediction, newhiddenstate)

    dbf = dzforgetgate
    dbi = dzinputgate
    dbc = dzcandidategate
    dbo = dzoutputgate
    dbout = dprediction

    dpreviouscellstate = forgetgate * dnewcellstate
    forgetblame = wf.T @ dzforgetgate
    inputblame = wi.T @ dzinputgate
    candidateblame = wc.T @ dzcandidategate
    outputblame = wo.T @ dzoutputgate

    dcombined = forgetblame + inputblame + candidateblame + outputblame

    dprevioushiddenstate = dcombined[: newhiddenstate.shape[0]]

    return dwf, dwi, dwc, dwo, dwout, dbf, dbi, dbc, dbo, dbout, dprevioushiddenstate, dpreviouscellstate

def updateweights(wf, wi, wc, wo, wout, bf, bi, bc, bo, bout, dwf, dwi, dwc, dwo, dwout, dbf, dbi, dbc, dbo, dbout, learningrate):
    newwf = wf - learningrate * (dwf)
    newwi = wi - learningrate * (dwi)
    newwc = wc - learningrate * (dwc)
    newwo = wo - learningrate * (dwo)
    newwout = wout - learningrate * (dwout)

    newbf = bf - learningrate * (dbf)
    newbi = bi - learningrate * (dbi)
    newbc = bc - learningrate * (dbc)
    newbo = bo - learningrate * (dbo)
    newbout = bout - learningrate * (dbout)

    return newwf, newwi, newwc, newwo, newwout, newbf, newbi, newbc, newbo, newbout


def trainingloop(epochs, hiddensize, inputsize, todaysinput, targets, learningrate):
    weights = initialiseweights(hiddensize, inputsize)


    for k in range(epochs):

        dh_from_next = np.zeros(hiddensize)
        dc_from_next = np.zeros(hiddensize)
        mainlist = []
        dwf_total = np.zeros_like(weights[0])
        dwi_total = np.zeros_like(weights[1])
        dwc_total = np.zeros_like(weights[2])
        dwo_total = np.zeros_like(weights[3])
        dwout_total = np.zeros_like(weights[4])
        dbf_total = np.zeros_like(weights[5])
        dbi_total = np.zeros_like(weights[6])
        dbc_total = np.zeros_like(weights[7])
        dbo_total = np.zeros_like(weights[8])
        dbout_total = np.zeros_like(weights[9])

        for i in range(todaysinput.shape[0]):
            if i ==0 :
                vals = forwardpass(*weights, todaysinput[i])
                mainlist.append(vals)

            elif i > 0 :
                vals = forwardpass(*weights[:-2], *vals[1: 3], todaysinput[i])
                mainlist.append(vals)


        total_loss = sum((mainlist[i][0] - targets[i])**2 for i in range(len(mainlist)))
        print(f"Epoch {k}, Loss: {total_loss}")


        for b in range(todaysinput.shape[0]-1, -1, -1):

            if b == 0:
                grads = backwardpass(*mainlist[b], *weights[: -2], weights[-1], dh_from_next, dc_from_next, targets[b])

            elif b > 0:
                grads = backwardpass(*mainlist[b], *weights[: -2], mainlist[b-1][2], dh_from_next, dc_from_next, targets[b])
            dwf_total += grads[0]
            dwi_total += grads[1]
            dwc_total += grads[2]
            dwo_total += grads[3]
            dwout_total += grads[4]
            dbf_total += grads[5]
            dbi_total += grads[6]
            dbc_total += grads[7]
            dbo_total += grads[8]
            dbout_total += grads[9]
            dh_from_next = grads[10]
            dc_from_next = grads[11]



        updatedweights = updateweights(*weights[: -2], dwf_total, dwi_total, dwc_total, dwo_total, dwout_total, dbf_total, dbi_total, dbc_total, dbo_total, dbout_total, learningrate)
        weights = updatedweights + (weights[-2], weights[-1])

    return weights`}</code>
        </pre>
      </section>
    </div>
  );
}

import numpy as np

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
            print(squareloss[0,0])
            


import torch
import torch.nn as nn
import collections as namedtuple
import matplotlib
import torch.optim as optim
import torch.nn.functional as F
import torchvision.transforms as T
class DQN(nn.Module):
    def __init__(self,h,w):
        super().__init__()
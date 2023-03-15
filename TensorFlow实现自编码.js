// ==UserScript==
// @name         New Userscript
// @namespace    https://viayoo.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        *
// @grant        all
// ==/UserScript==

(function() {
#TensorFlow实现自编码
#全连接神经网络
#TensorFlow实现全连接神经网络
#自编码简介

#深度学习在早期被认为是一种无监督的特征学习（Unsupervised Feature Learning），模仿了人脑对特征逐层抽象提取的过程，这其中有两点很重要：一是无监督学习，即不需要标注数据就可以对数据进行一定程度的学习，这种学习是对数据内容组织形式的学习，提取的是频繁出现的特征；二是逐层抽象，特征是需要不断抽象的，就像人总是从简单基础的感念开始学习，再到复杂的概念。学生们要从加减乘除开始学起，再到简单函数，然后到微积分，深度学习也是一样的，它从简单的微观的特征开始学起，不断抽象特征的层级，逐渐往复杂的宏观特征转变。
自编码（AutoEncoder），顾名思义，即可以使用自身的高阶特征编码自己。自编码其实也是一种神经网络，它的输入和输出是一致的，它借助稀疏编码的思想，目标是使用稀疏的一些高阶特征重新组合重构自己。因此它的特点非常明显：第一，期望输入/输出一致；第二，希望使用高阶特征来重构自己，而不只是复制像素点。

#自编码器的输入节点和输出节点的数量是一致的，但如果只是单纯地逐个复制输入则没有意义，自编码通常希望使用少量稀疏的高阶特征来重构输入，所以可以加入限制。

（1）限制中间隐含层节点数量，让中间隐含层节点数量小于输入/输出节点的数量，这相当于一个降为的过程。此时已经不可能出现复制所有节点的情况，因为中间节点数小于输入节点数，那只能学习数据中最重要的特征复原，将可能不太相关的内容去除。此时，如果再给中间隐含层的权重加一个L1的正则，则可以通过惩罚系数控制隐含节点的稀疏程度，惩罚系数越大，学到的特征组合越稀疏，实际使用（非零权重）的特征数量越少。
（2）给数据加入噪声，去噪自编码器（Denoising AutoEncoder）也不可能完全复制数据，只有学习数据频繁出现的模式和结构，将无规则的噪声略去，才可能复原数据。

#TensorFlow实现自编码

#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : Laochen

import numpy as np
import sklearn.preprocessing as prep
import tensorflow as tf
from tensorflow.examples.tutorials.mnist import input_data

#通过tf.random_uniform创建了均匀分布，实现标准的均匀分布的xavier初始化器，fan_in是输入节点数量，fan_out是输出节点数量
def xavier_init(fan_in,fan_out,constant = 1):
    low=-constant * np.sqrt(6.0/(fan_in+fan_out))
    high = constant * np.sqrt(6.0/(fan_in+fan_out))
    return tf.random_uniform((fan_in,fan_out),
                             minval = low, maxval = high,
                             dtype = tf.float32)
#去噪自编码的class，构建函数__init__:n_input输入变量数、n_hidden隐含层节点数、transfer_function隐含层激活函数，默认为softplus
#optimizer优化器，默认为Adam、scale高斯噪声系数，默认为0.1。class内scale参数做成了一个placeholder
#网络结构
#为x创建一个维度为n_input的placeholder，然后建立一个能提取特征的隐含层，先将输入x加上噪声self.x + scale * tf.random_normal((n_input,)，
#然后用tf.matmul将加了噪声的输入与隐含层的权重w1相乘，并使用tf.add加上隐含层的偏置b1，最后使用self.transfer对结果进行激活函数处理
#经过隐含层后，在输出层进行数据复原、重建，建立reconstruction层。直接将隐含层的输出self.hidden乘上输出层的权重w2，加上输出层的偏置b2
#自编码器的损失函数，
# 平方差误差（Squared Error）作为 cost，即用tf.subtract计算输出self.reconstruction与输入self.x之差，再使用tf.pow求差的平方，最后使用tf.reduce_sum求和
#定义训练操作作为优化器self.optimizer对损失self.cost进行优化。创建Session，并初始化自编码器的全部模型参数

class AdditiveGaussianNoiseAutoencoder(object):

    def __init__(self,n_input,n_hidden,transfer_function=tf.nn.softplus,
                 optimizer = tf.train.AdamOptimizer(),scale=0.1):
        self.n_input = n_input
        self.n_hidden = n_hidden
        self.transfer = transfer_function
        self.scale = tf.placeholder(tf.float32)
        self.tranining_scale = scale
        network_weights = self._initialize_weights()
        self.weights = network_weights

        self.x = tf.placeholder(tf.float32,[None, self.n_input])
        self.hidden = self.transfer(tf.add(tf.matmul(
            self.x + scale * tf.random_normal((n_input,)),
            self.weights['w1']), self.weights['b1']))
        self.reconstruction = tf.add(tf.matmul(self.hidden,
            self.weights['w2']), self.weights['b2'])

        self.cost = 0.5 * tf.reduce_sum(tf.pow(tf.subtract(
            self.reconstruction, self.x), 2.0))
        self.optimizer = optimizer.minimize(self.cost)

        init = tf.global_variables_initializer()
        self.sess = tf.Session()
        self.sess.run(init)

#参数初始化函数_initialize_weights，
#先创建all_weights字典，将w1,b1,w2,b2全部放入，最后返回all_weights，w1使用xavier_init函数初始化，
# 输入输入节点数和隐含层节点数返回一个比较适合softplus等激活函数的权重初始分布，偏执b1使用tf.zeros全置为0
#输出层self.reconstruction，w2，b2全部初始化为0

    def _initialize_weights(self):
        all_weights = dict()
        all_weights['w1'] = tf.Variable(xavier_init(self.n_input,
                                                    self.n_hidden))
        all_weights['b1'] = tf.Variable(tf.zeros([self.n_hidden],
                                                 dtype = tf.float32))
        all_weights['w2'] = tf.Variable(tf.zeros([self.n_hidden,
                                  self.n_input], dtype = tf.float32))
        all_weights['b2'] = tf.Variable(tf.zeros([self.n_input],
                                                 dtype=tf.float32))
        return all_weights

#定义计算损失cost及执行一步训练的函数partial_fit.函数里让Session执行两个计算图的节点，分别是损失cost和训练过程optimizer
#输入的feed_dict包括输入数据x，以及噪声的系数scale。函数partial_fit作的就是用一个batch数据进行训练并返回当前的损失cost

    def partial_fit(self,X):
        cost, opt = self.sess.run((self.cost, self.optimizer),
            feed_dict={self.x:X, self.scale: self.tranining_scale})
        return cost

#只求损失cost的函数calc_total_cost，这里只让Session执行一个计算图节点self.cost，传入的参数和partial_fit一致
#这个函数是在自编码器训练完毕后，在测试集上对模型性能进行评测时用到，不会像partial_fit那样触发训练操作

    def calc_total_cost(self,X):
        return self.sess.run(self.cost, feed_dict = {self.x:X,          
                                     self.scale:self.tranining_scale})

#定义transform函数，返回自编码器隐含层的输出结果，用来获得抽象后的特征，自编码器的隐含层的最主要功能就是学习出数据中的高阶特征


    def transform(self,X):
        return self.sess.run(self.hidden,feed_dict={self.x:X,
                               self.scale:self.tranining_scale})

    def generate(self,hidden = None):
        if hidden is None:
            hidden = np.random.normal(size=self.weights['b1'])
        return self.sess.run(self.reconstruction,
                             feed_dict={self.hidden:hidden})
#定义reconstruct函数，运行复原过程，包括提取高阶特征和通过高阶特征复原数据

    def reconstruct(self,X):
        return self.sess.run(self.reconstruction,feed_dict={self.x:X,
                                  self.scale:self.tranining_scale})

#getWeights函数获取隐含层权重w1

    def getWeights(self):
        return self.sess.run(self.weights['w1'])

#getBiases函数获取隐含层的偏置函数

    def getBiases(self):
        return self.sess.run(self.weights['b1'])

mnist = input_data.read_data_sets('MNIST_data',one_hot =  True)

#standard_scale,对数据进行标准化处理，先在训练集上进行fit，再将这个Scaler用到训练数据和测试数据上。
#必须保证训练集和测试集使用完全相同的Scaler，这也是为什么先在训练集上进行fit，再将这个Scaler用到训练数据和测试数据上。

def standard_scale(X_train,X_test):
    preprocessor = prep.StandardScaler().fit(X_train)
    X_train = preprocessor.transform(X_train)
    X_test = preprocessor.transform(X_test)
    return X_train, X_test

#不放回抽样，可以提高数据利用率，

def get_random_block_from_data(data,batch_size):
    start_index = np.random.randint(0,len(data) - batch_size)
    return data[start_index:(start_index + batch_size)]

X_train, X_test = standard_scale(mnist.train.images,mnist.test.images)

n_samples=int(mnist.train.num_examples)
training_epochs = 20
batch_size = 128
display_step = 1

autoencoder = AdditiveGaussianNoiseAutoencoder(n_input=784,
                                               n_hidden=200,
                                               transfer_function=tf.nn.softplus,
                                               optimizer=tf.train.AdamOptimizer(learning_rate=0.001),
                                               scale=0.01)

for epoch in range(training_epochs):
    avg_cost = 0.
    total_batch = int(n_samples / batch_size)
    for i in range(total_batch):
        batch_xs=get_random_block_from_data(X_train,batch_size)

        cost=autoencoder.partial_fit(batch_xs)
        avg_cost += cost / n_samples*batch_size

    if epoch % display_step == 0:
        print("Epoch:",'%04d' % (epoch + 1),"cost=",
              "{:.9f}".format(avg_cost))

print("Total cost:" + str(autoencoder.calc_total_cost(X_test)))

全连接神经网络

全连接神经网络的隐含层中的每一个结点都与上一层的所有结点相连，用来把前边提取到的特征综合起来。如图其中，x1、x2、x3为全连接层的输入，a1、a2、a3为输出。
在这里插入图片描述

TensorFlow实现全连接神经网络

下面代码仅加入一个隐含层，使用交叉信息熵损失函数和ReLU激活函数利用AdagradOptimizer优化器，在MNIST数据集上有98%准确率。

#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author  : Laochen

from tensorflow.examples.tutorials.mnist import input_data
import tensorflow as tf

mnist = input_data.read_data_sets("MNIST_data/",one_hot=True)
sess = tf.InteractiveSession()

#in_units是输入节点数，h1_units是隐含层输出节点，w1、b1是隐含层的权重和偏置，将偏置全部为0，将权重初始化为截断的正态分布，标准差为0.1

in_units = 784
h1_units = 300
w1 = tf.Variable(tf.truncated_normal([in_units,h1_units], stddev=0.1))
b1 = tf.Variable(tf.zeros([h1_units]))
w2 = tf.Variable(tf.zeros([h1_units,10]))
b2 = tf.Variable(tf.zeros([10]))

x = tf.placeholder(tf.float32,[None,in_units])
keep_prob = tf.placeholder(tf.float32)

#第一步，定义隐含层

hidden1 = tf.nn.relu(tf.matmul(x,w1) + b1)
hidden1_drop = tf.nn.dropout(hidden1,keep_prob)
y = tf.nn.softmax(tf.matmul(hidden1_drop,w2) + b2)

#第二步，定义损失函数选择优化器，交叉信息熵
y_ = tf.placeholder(tf.float32,[None,10])
cross_entropy = tf.reduce_mean(-tf.reduce_sum(y_*tf.log(y),
                                              reduction_indices=[1]))
train_step = tf.train.AdagradOptimizer(0.3).minimize(cross_entropy)

#第三步，训练步骤
tf.global_variables_initializer().run()
for i in range(3000):
    batch_xs, batch_ys = mnist.train.next_batch(100)
    train_step.run({x:batch_xs,y_:batch_ys,keep_prob:0.75})

#第四步,准确率评估
correct_prediction = tf.equal(tf.argmax(y,1),tf.argmax(y_,1))
accuracy = tf.reduce_mean(tf.cast(correct_prediction,tf.float32))
print(accuracy.eval({x:mnist.test.images,y_:mnist.test.labels,keep_prob:1.0}))
    // Your code here...
})();

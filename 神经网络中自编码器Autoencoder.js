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
%神经网络中自编码器Autoencoder 
#什么是自编码器（Autoencoder）

#自动编码器是一种数据的压缩算法，其中数据的压缩和解压缩函数是数据相关的、有损的、从样本中自动学习的。在大部分提到自动编码器的场合，压缩和解压缩的函数是通过神经网络实现的。

压缩与解压



       假设刚刚那个神经网络是这样, 对应上刚刚的图片, 可以看出图片其实是经过了压缩,再解压的这一道工序. 当压缩的时候, 原有的图片质量被缩减, 解压时用信息量小却包含了所有关键信息的文件恢复出原本的图片. 为什么要这样做呢?



       原来有时神经网络要接受大量的输入信息, 比如输入信息是高清图片时, 输入信息量可能达到上千万, 让神经网络直接从上千万个信息源中学习是一件很吃力的工作. 所以, 何不压缩一下, 提取出原图片中的最具代表性的信息, 缩减输入信息量, 再把缩减过后的信息放进神经网络学习. 这样学习起来就简单轻松了. 所以, 自编码就能在这时发挥作用. 通过将原数据白色的X 压缩, 解压 成黑色的X, 然后通过对比黑白 X ,求出预测误差, 进行反向传递, 逐步提升自编码的准确性. 训练好的自编码中间这一部分就是能总结原数据的精髓. 可以看出, 从头到尾, 我们只用到了输入数据 X, 并没有用到 X 对应的数据标签, 所以也可以说自编码是一种非监督学习. 到了真正使用自编码的时候. 通常只会用到自编码前半部分.

编码器 Encoder



       这部分也叫作 encoder 编码器. 编码器能得到原数据的精髓, 然后我们只需要再创建一个小的神经网络学习这个精髓的数据,不仅减少了神经网络的负担, 而且同样能达到很好的效果.

这是一个通过自编码整理出来的数据, 他能从原数据中总结出每种类型数据的特征, 如果把这些特征类型都放在一张二维的图片上, 每种类型都已经被很好的用原数据的精髓区分开来. 如果你了解 PCA 主成分分析, 再提取主要特征时, 自编码和它一样,甚至超越了 PCA. 换句话说, 自编码 可以像 PCA 一样 给特征属性降维.

解码器 Decoder

至于解码器 Decoder, 我们也能那它来做点事情. 我们知道, 解码器在训练的时候是要将精髓信息解压成原始信息, 那么这就提供了一个解压器的作用, 甚至我们可以认为是一个生成器 (类似于GAN).

至于自编码器的讲解网络上有很多，暂时还没学到那么深，只给出链接：https://blog.csdn.net/marsjhao/article/details/73480859

这篇文章讲的很好。

学习的例子是利用的mnist的例子，这里也会给出。

# 我们先从压缩 MNIST dataset开始.首先，我们使用编码器(encoder)传入输入：inputs. 然后，通过解码器（decoder）重构输入数据.
# 在这里，我们编码器和解码器都用神经网络来构建，然后进行训练。
 
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
# from tensorflow.examples.tutorials.mnist import input_data
from tensorflow.contrib.learn.python.learn.datasets.mnist import read_data_sets
mnist = read_data_sets("./MNIST",validation_size = 0)
 
# 展示图片的内容
# image2 = mnist.train.images[2]
# print(image2.shape[0])
# plt.imshow(image2.reshape(28,28),cmap="Greys_r")
# plt.show()
 
hidden_num = 32
images_size = mnist.train.images.shape[1]
inputs_ = tf.placeholder(tf.float32,(None,images_size),name="inputs")
targets_ = tf.placeholder(tf.float32,(None,images_size),name="target")
 
# hidden_layer
encode = tf.layers.dense(inputs_,hidden_num,activation=tf.nn.relu)
logits = tf.layers.dense(encode,images_size,activation=None)
 
# 由于mnist的数据集，是已经经过标准化的数据【0,1】，所以我们需要对logits进行sigmoid的亚索变换
decode = tf.nn.sigmoid(logits,name="outputs")
 
loss = tf.reduce_mean(tf.nn.sigmoid_cross_entropy_with_logits(labels=targets_,logits=logits))
opt = tf.train.AdamOptimizer(0.001).minimize(loss)
 
# training step
"""
在这里我们并不需要关注验证误差，所以我们只监控了训练损失。调用 mnist.train.next_batch(batch_size) 
将会返回：a tuple of (images, labels).但这里我们并不需要标签 ：labels ,我们需要的只是图片。
我们使用sess.run(tf.global_variables_initializer())初始化变量. 然后跑优化器并获得损失： 
batch_cost, _ = sess.run([cost, opt], feed_dict=feed).
"""
with tf.Session() as sess:
    sess.run(tf.global_variables_initializer())
    epoches = 50
    batch_size = 64
    for i in range(epoches):
        for ii in range(mnist.train.num_examples//batch_size):
            batch = mnist.train.next_batch(batch_size)
            cost_loss,_ = sess.run([loss,opt],feed_dict = {inputs_ :batch[0],targets_:batch[0]})
            print("epoches:{}/{}".format(i,epoches),"loss is {}:".format(cost_loss))
 
# 下面我们展示了一些我们重构的图片，可以看到大部分看起来不错，只是有一些模糊。
    fig,axes = plt.subplots(2,10,sharex=True,sharey=True,figsize = (20,4))
    # print(axes)
    # plt.show()
 
    test_images = mnist.test.images[:10]
    reconstructed = sess.run(decode,feed_dict={inputs_:test_images})
 
    for images,rows in zip([test_images,reconstructed],axes):
        for image,ax in zip(images,rows):
            ax.imshow(image.reshape(28,28),cmap='Greys_r')
            ax.get_xaxis().set_visible(False)
            ax.get_yaxis().set_visible(False)
            # plt.show()
    fig.tight_layout(pad=0.1)
    plt.show()
 
    // Your code here...
})();

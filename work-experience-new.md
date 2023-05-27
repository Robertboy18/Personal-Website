---
title: ML Theory
permalink: /ml/
layout: page
excerpt: Outreach
---

I am one of the organizers for the ML Theory Learning group at [Cohere For AI](https://cohere.for.ai/) and we will be having our session's bi-weekly from 2 - 3 pm MST! If you aren't a part of this wonderful community feel free to apply through this [form](https://share.hsforms.com/10OrjljwpQ52ILJA6ftENIwch5vw) to join us. 

<img src = "https://i.ibb.co/ZMzFgB5/MLTheory-Learning-Group-Discord.png">

This community is amazing and we have tons of other reading groups and I personally am enjoying the Reinforcement Learning Reading group events, Fireside talks and other events that the community holds. It's a really supportive environment, intellectually motivating and you definitely are going to find atleast one person who shares the same research interest as you.

<hr>

<html>
<head>
<style>
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: transparent;
  font-size: 15px;
  transition: background-color 0.1s;
}

.active, .collapsible:hover {
  background-color: transparent;
  outline: transparent;
}

.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  outline: transparent;
  background-color: #f9f9f9;
}
</style>
</head>
<body>

<button class="collapsible">Ninth Session</button>
<div class="content">
Hey everyone! Yaroslav Bulatov was the first speaker as part of our speaker series "Learning to learn: Unravelling learning theory". 
<br>

The talk was based on Generating functions approach to gradient descent analysis (like in <a href = "https://arxiv.org/abs/2206.11124">https://arxiv.org/abs/2206.11124</a>). Classical optimization theorems characterise behaviour in the worst case, while generating functions can tell you how things behave in average case. <a href = "https://machine-learning-etc.ghost.io/">https://machine-learning-etc.ghost.io/</a> a blog by the speaker has some cool resources regarding topics in learning theory.
<br>
It was a great session and the slides are available <a href ="https://notability.com/n/9KbYpGDd9D8d9HeCl1KP4"> here </a>. The talk is also on Youtube <a href = "https://www.youtube.com/watch?v=i3YPm7MCMf0"> here </a>.
</div>

<button class="collapsible">Eigth Session</button>
<div class="content">
Hey everyone! We had a very fruitful session last Saturday, where Ajinkya presented on the Privacy of Noisy SGD. The slides are available <a href ="https://docs.google.com/presentation/d/10XSIitnJ3DnM0KxevFk6iIQ0Qk71AzsjDTnAeowH54Q/edit"> here </a>.
</div>

<button class="collapsible">Seventh Session</button>
<div class="content">
Hey everyone! We had a very fruitful session last Saturday, and I presented on Neural Operators. The slides are available <a href ="https://docs.google.com/presentation/d/1jxtR6m2yw7i59QcFWqqAbyGyStsbGlqz/edit?usp=sharing&ouid=118309576339488509705&rtpof=true&sd=true"> here </a>.
Neural Operators refer to a class of neural network architectures that enable the learning of mathematical operations from input-output data pairs, without explicit knowledge of the underlying equations. In contrast to traditional machine learning models that rely on pre-defined functions or equations, Neural Operators aim to learn the underlying physical laws directly from data.
<br>
Neural Operators are inspired by the concept of differential operators, which are used in mathematics and physics to describe the relationship between functions and their derivatives. By learning differential operators directly from data, Neural Operators can be used to model complex physical systems and make predictions about their behavior.

One of the advantages of Neural Operators is their ability to generalize to new, unseen data, which is critical for applications such as scientific discovery, control systems, and robotics. Another advantage is their flexibility, as they can be tailored to different types of input data, such as images, time-series, or point clouds.

Although Neural Operators are a relatively new area of research, they hold promise for advancing the fields of machine learning and scientific computing, by enabling more efficient and accurate modeling of complex systems. You can check out some of the reading resources in <a href = "https://www.robertj1.com/reading/"> my reading list</a>.

<img src = "https://d2r55xnwy6nx47.cloudfront.net/uploads/2021/04/Infinite-mapping-2.svg">
</div>

# Sixth Session
Hey everyone! We had a very fruitful session last Saturday, and it was great meeting everyone new and our first meeting for this year. 

We briefly discussed the Lottery Ticket Hypothesis, Neural Operators and why Adam is still being used as the main optimizer in most deep-learning models. 

Best of luck to everyone submitting to ICML or the ICLR blog/tiny paper: )!

> Research Proposal by [Bhavnick](https://twitter.com/BhavnickMinhas) for Adam Optimizer

The lottery ticket hypothesis suggests that deep neural networks have sparse subnetworks that can perform equally well or better than the original dense network. These sparse subnetworks can be obtained through a process called pruning, where the unnecessary connections in the network are removed.

Recent research has shown that the pruned subnetworks often exhibit a regular structure, which can be visualized as a set of neurons that are strongly connected to each other while having weaker connections to the rest of the network. This regular structure is believed to be a circuit that enables the network to perform well on a specific task.

The identification of this regular structure has significant implications for artificial general intelligence (AGI). If we can identify and compose these regular structures like functions, we can potentially create a single model that can perform well on multiple tasks, leading us closer to achieving AGI.

Overall, the existence of regular structures in lottery tickets suggests that neural networks are not just a collection of random connections, but rather have underlying organizational principles that can be uncovered through careful pruning and analysis.

> Research Proposal by members on understanding Adam and alternatives for Large Language Models. 

Despite the many advances in the field of optimization, Adam is still widely used as the main optimizer for deep learning models, including large language models. Adam is popular because it is efficient, easy to use, and has been shown to perform well in many different settings.

While there are hundreds of optimizers claiming to be better than Adam, it can be challenging to determine which optimizer is truly superior, as the effectiveness of an optimizer can vary depending on the specific task and architecture of the model. Additionally, some of the newer optimizers may require more tuning and experimentation to achieve optimal results.

That being said, researchers are continuing to explore new optimization techniques and many promising alternatives to Adam have been proposed, such as RAdam and Ranger. These optimizers have been shown to perform well on a variety of tasks, and they will likely continue to gain popularity in the deep learning community.

Overall, while Adam remains a popular choice for deep learning optimization, it is important for researchers to stay informed about new developments in the field and to explore alternative optimizers to ensure that their models are performing at their best.

Join the community [here](https://cohere.for.ai/) for the discussion and how you can contribute to the research proposal.

<img src="https://internetpolicy.mit.edu/wp-content/uploads/2019/05/neural-network.png" alt="Image">

# Fifth Session
Hey everyone! Last Saturday, we had our final ML theory session for the year, and it went really well. 

We had two pitches, where I spoke on Fourier Neural Operators (FNO) and Harsha spoke on Gradient Descent proofs. On the other hand Ashish also pitched his topic of presenting on Diffusion models. Harsha also presented his idea on starting the Optimization Book Reading plan and lastly, our next meeting will probably be in the first week of January, and we will keep you updated! We want to thank everyone who came to our meetings regularly and the whole community for engaging with various topics in ML theory. It truly means a lot to us, and we can't wait to hold numerous events (even potentially with other groups: )) and hope you all have a great winter break! Merry Christmas and a happy new year in advance : )!

Sneak peak of what I presented:)

<img src="https://i.ibb.co/KVgRN93/Screenshot-2022-12-22-142947.png" alt="Image">

# Fourth Session

I unfortunately couldn't make it to this session as I had to write the Putnam but the session was a great successs. Thank you to Ahmad Mustafa for presenting on CLIP by OpenAI. He shared key insights on contrastive learning and language-guided recognition, and touched on key points of the CLIP paper.

<img src = "https://miro.medium.com/max/1200/1*tg7akErlMSyCLQxrMtQIYw.png">

# Third Session

Last saturday, we had our third ML theory session and we had two wonderful speakers Sree Harsha Nelaturu and Max Marion who talked about Meta Learning and Neural Information Retrieval respectively. I enjoyed the talks and it was very informative. 

Some of the resources are listed below 

**Neural Information Retrieval** - Lecture Notes on
Neural Information Retrieval - [https://arxiv.org/pdf/2207.13443.pdf](https://arxiv.org/pdf/2207.13443.pdf)

**Meta Learning** 

1. Meta Genetic Programming - [https://people.idsia.ch/~juergen/diploma.html](https://people.idsia.ch/~juergen/diploma.html)
2. Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks - [https://arxiv.org/abs/1703.03400](https://arxiv.org/abs/1703.03400)
3. Prototypical Networks for Few-shot Learning - [https://arxiv.org/abs/1703.05175](https://arxiv.org/abs/1703.05175)
4. Learning to learn by gradient descent by gradient descent - [https://arxiv.org/abs/1606.04474](https://arxiv.org/abs/1606.04474)
5. Meta-Dataset: A Dataset of Datasets for Learning to Learn from Few Examples - [https://arxiv.org/abs/1903.03096v4](https://arxiv.org/abs/1903.03096v4)
6. Meta Policy Gradients - [https://roberttlange.github.io/posts/2020/12/meta-policy-gradients/](https://roberttlange.github.io/posts/2020/12/meta-policy-gradients/)
7. Differentiable Plasticity: training plastic networks with Backprop - [https://arxiv.org/abs/1804.02464](https://arxiv.org/abs/1804.02464)
8. Meta RL - [https://lilianweng.github.io/posts/2019-06-23-meta-rl/](https://lilianweng.github.io/posts/2019-06-23-meta-rl/)
9. Synthetic Petri Dish - [https://arxiv.org/abs/2005.13092](https://arxiv.org/abs/2005.13092)
10. POET - [https://arxiv.org/abs/1901.01753](https://arxiv.org/abs/1901.01753)

# Second Session

Yesterday, we had our second session, which went really well! We had 4 exciting proposals from Sree Harsha Nelaturu, Ashish Gaurav, Max Marion and Harry Saini on the topics Meta Learning, Quantum probability, Neural Information Retrieval and Representation learning, respectively. 

The voting also happened, and for the next meeting on 19/11/2022, we will have Harsha and Max talk on Meta-Learning and Neural Information Retrieval. In the subsequent meeting on 3/12/2022, we will have Harry and Ashish talk on Representation Learning and Quantum Probability. 

All the speakers will post some pre-requisite material to read up on or familiarize ourselves with before the talk (at least 1 week in advance), so we all prepare and learn as much as we can from the talk! Each presenter will talk for 25 minutes, followed by a 5 - 10 min Q/A! If you have more questions for the speakers, we will also create forums after each presentation where the conversation can be carried on. Thanks to everyone who came the other day; see you all next meeting:)

<hr>

# First Session

We had the ML Theory Learning group's first session, which was a great success. We discussed what we all hope to gain out of this reading group, our mission statement (which is subject to change over time) as well as potential topics we could cover. I am super excited to see where this group goes and I hope to see you all there!

<img src="https://pbs.twimg.com/media/Ffs7-BDagAAYugH?format=png&name=small" alt="Image">

<hr>
We are a non-profit ML research lab and community exploring the unknown, together.
<img src="https://txt.cohere.ai/content/images/size/w600/2022/06/Blog-header-image---Desktop--3--1.png" alt="Image">

<script>
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
</script>

</body>
</html>

<!-- # Twitter Feed

<a class="twitter-timeline" data-width="700" data-height="400" data-theme="dark" href="https://twitter.com/Robertljg?ref_src=twsrc%5Etfw">Tweets by Robertljg</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->
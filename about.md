---
title: Research
permalink: /about/
layout: page
excerpt: Hello peeps
comments: false
---
# Conference Proceedings, Workshops and Poster Sympossium's

**Joseph, Robert**, Martha White, Adam White and Samuel Neumann. “Making Reinforcement Learning Experiments More Reproducible and Computationally Efficient.” Undergraduate Research Symposium, University of Alberta, 2022, pp. 15–16. [[Poster](https://www.scribd.com/document/589614018/RL-Poster#from_embed)], [[Codebase](https://github.com/Robertboy18/MinAtar-Faster)]

<!--<sup> **Abstract**: The Arcade Learning Environment (ALE) is a well-known testing ground for reinforcement learning agents. MinAtar, short for miniature Atari, was introduced in 2018 by researchers at the University of Alberta and Google Brain/Deepmind as a new set of environments that capture the general mechanics of specific Atari games while simplifying the representational complexity to focus more on the behavioral challenges. Seaquest, Breakout, Asterix, Freeway, and Space Invaders are all counterparts of Atari games in MinAtar. Currently, the implementation of these gaming environments is slow, and we refactored the whole codebase to reduce training time by roughly 50% across all environments and also included a Just in time compiler (Numba) that makes the code even faster. This is a huge improvement for researchers to train their algorithms on these environments and get the results faster. Secondly, we propose a new approach to select the best hyperparameters after a hyperparameter sweep wherein the old method just used to choose the best hyper that resulted in largest area under the learning curve (AUC) but suffered from not taking into account the hyperparameter sensitivity etc. We compare the Soft Actor Critic (SAC) Discrete CNN and Vanilla ActorCritic (VAC) Discrete CNN agents’ mean learning curves in several contexts utilizing this new approach. We hope that MinAtar and this new hyperparameter approach can allow researchers to use it as a testbed for Reinforcement Learning and Artificial Intelligence Agents.</sup>-->

**Joseph, Robert**, Noel Murasko and John Bowman. “Hybrid Dealiasing Convolutions.” Undergraduate Research Symposium, University of Alberta, 2022, pp. 12–13. [[Poster](https://www.scribd.com/document/589613666/Hybrid-Poster#from_embed)]

<!--<sup> **Abstract**: The convolution theorem provides a method for efficiently computing convolutions using Fast Fourier Transforms (FFTs), with the caveat that the convolution is periodic. Many applications such as nonlinear PDEs require a linear convolution, which can be computed using the convolution theorem, provided that the data is sufficiently padded with zeros. Implicit dealiasing provides an alternative to explicit dealiasing: the FFTs are formulated to implicitly take account of the known zero values, avoiding the need for explicit zero padding. Recently, implicit dealiasing has been extended to handle arbitrary data and padding lengths. To maximize performance, the padding is chosen to be fully implicit, fully explicit, or somewhere in between. We offer unique solutions that expand hybrid dealiasing to issues with uneven input or minimum padded sizes, reducing memory and computation time. We also expand this to 1D/2D scenarios (3D is still in process), where we now have image convolution and construct the first hybrid dealiasing solution, which is around 10 times quicker than typical explicit padding approaches. We also expand this to multi-convolution, applying the convolution to a sequence of data, N arrays rather than just two, and demonstrate a conventional grid search hyperparameters search strategy that selects the optimal hyperparameters that result in the shortest convolution time. Finally, we are developing them for existing state-of-the-art fast Fourier transform libraries such as FFTW++, which can result in low memory FFT algorithms that are faster, and we are comparing the performance of our approach to the standard approach in Convolution Neural Networks, Machine Learning, turbulence simulations, signal filtering etc. Therefore, we expect hybrid dealiasing to become the standard method for convolutions in the future.</sup>-->

**Joseph, Robert**, and Xinwei Yu. “Numerical Analysis for real-time Nonlinear Model Predictive Control of Ethanol Steam Reformers.” Canadian Undergraduate Mathematics Conference, 2022, pp. 30–31. (Also at the 2022 Eureka Undergraduate Symposium). [[Presentation](https://www.scribd.com/document/589615195/cumc#from_embed)] 

<!--<sup> **Abstract**: The utilization of renewable energy technologies, particularly hydrogen, has seen a boom in interest and spread worldwide. Ethanol steam reformation (ESR) is one of the primary methods capable of producing hydrogen efficiently and reliably. This paper provides an in-depth study of the reformulated sys tem, both theoretically and numerically, and a plan to explore the possibility of converting the system into its conservation form. We aim to enable a mech anistic model to be employed in real-time control calculations while explicitly accounting for input, state and output constraints with minimal computation cost. Lastly, we offer an overview of several numerical approaches for solving the general first-order quasi-linear hyperbolic equation to the model for ESR. We conclude by presenting some results that would enable these ODE/PDE solvers to be used in non-linear model predictive control algorithms and discuss the limitations of our approach and directions for future work.</sup>-->


**Joseph, Robert**. “Infodemiology and Infoveillance of Covid19 Using GPT-3.” STEM Fellowship Journal, vol. 7, no. 1, 2021, pp. 87–88. [[Paper](https://www.scribd.com/document/510636938/Research-GPT3)], [[Journal](https://doi.org/10.17975/sfj-2021-003)]

<!--<sup> **Abstract**: Fake news detection is the task of detecting forms of news consisting of deliberate disinformation or hoaxes spread via traditional news media (print and broadcast) or online social media. Fake news is especially rampant in the current COVID-19 pandemic, leading to people believing and blindly following in false and potentially harmful claims and stories. Detecting fake news quickly can alleviate the spread of panic, chaos and potential health hazards as well reducing stress and other mental health issues. Using the Generative Pretrained Transformer 3 (GPT-3) which is an autoregressive language model that uses deep learning to produce humanlike text, classify text,design, generate code and various other use cases. Using the classifications endpoint provides the ability to leverage a labeled set of examples without fine- tuning and can be used for any text-to-label task and hence by using various data sets which contain fake and real Covid19 tweets/news GPT-3 was trained on the dataset and achieved a 98% accuracy by correctly classifying fake news and real news. Apart from using GPT-3 we also used a Passive Aggressive Classifier which is an online machine learning algorithm which also achieved an accuracy of 91%. We also provide future discussions and the limitations of the Deep Learning Model ( GPT-3 ) as well as the simple Machine Learning model ( Passive Aggressive Classifier). We hope to combat the misinformation of Covid19 spread online with these two models.</sup>-->

**Joseph, Robert**, et al. “Correlation between COVID-19, Mental Illness and Substance Abuse Prevalence.” STEM Fellowship Journal, vol. 6, no. 1, 2020, pp. 127–128. [[Paper](https://www.scribd.com/document/464077531/National-Undergraduate-Big-Data-Challenge-2020#from_embed)], [[Journal](https://doi.org/10.17975/sfj-2020-004)], [[Codebase](https://gist.github.com/Robertboy18/2168d899ea5cb0732d4290bbba1ca515#file-big-data-science-2020-ipynb)]

<!--<sup> **Abstract**: The aim of this paper is to determine if the experience of 
the COVID-19 pandemic correlates with worsened mental 
health and increased substance use among the affected 
populations. Data sets from the National Addiction & HIV Data 
Archive Program (NAHDAP) and Statistics Canada (StatCan) 
were analyzed, with the aim of determining the trends in 
mental health and alcohol purchases during the COVID-19 
pandemic. Using machine learning model techniques, a 
strong association between the two was discovered. It was 
also predicted that similar future situations would yield 
the same results. Statistical tools within Python, R, and SAS 
were used to explore the data and analyse it using various 
techniques., including linear regression. As a result, our 
findings demonstrate that coronavirus pandemics correlate 
with increased mental illness and substance use within 
the affected populations. If its effects are similar to SARS, 
however, considering that COVID-19 has had a much more 
widespread impact, significant increases in mental illness 
and substance abuse can be expected in the months and 
years to come. The analysis determined that there is a strong 
correlation between the COVID-19 pandemic, mental illness 
and alcohol and drug use. Limitations to this conclusion 
involve the fact that the pandemic is still ongoing and the 
datasets used were relatively new and small.</sup>-->

**Joseph, Robert** and Paul Buckingham ”Riemann ζ(2k) using Fourier Analysis” Undergraduate Number Theory Society, University of Alberta, 2020. [[Paper](https://www.scribd.com/document/462045997/Riemann-zeta-2k-Using-Fourier-Analysis#from_embed)]

# Summer Schools Attended

Summer School in Logic and Formal Epistemology, Carnegie Mellon University, 2022.

International Undergraduate Summer Enrichment Program, University of Alberta, 2021.

**Joseph, Robert**, “Statistical Machine Learning - Analysis of Cardiovascular diseases.” International Undergraduate Summer Enrichment Program, 2021.

Alberta Number Theory Days XIII, Banff International Research Station for Mathematical Innovation and Discovery, 2021.

Western Summer School in Algebra, University of Alberta, 2020.

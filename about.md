---
title: Research
permalink: /about/
layout: page
excerpt: Hello peeps
comments: false
---
# Conference Proceedings and Poster Sympossium's

**Joseph, Robert**, et al. “Making Reinforcement Learning Experiments More Reproducible and Computationally Efficient.” Undergraduate Research Symposium, University of Alberta, 2022, pp. 15–16.

> Abstract: The Arcade Learning Environment (ALE) is a well-known testing ground for reinforcement learning agents. MinAtar, short for miniature Atari, was introduced in 2018 by
researchers at the University of Alberta and Google Brain/Deepmind as a new set of environments that capture the general mechanics of specific Atari games while simplifying the
representational complexity to focus more on the behavioral challenges. Seaquest, Breakout,
Asterix, Freeway, and Space Invaders are all counterparts of Atari games in MinAtar. Currently, the implementation of these gaming environments is slow, and we refactored the whole
codebase to reduce training time by roughly 50% across all environments and also included a
Just in time compiler (Numba) that makes the code even faster. This is a huge improvement
for researchers to train their algorithms on these environments and get the results faster. Secondly, we propose a new approach to select the best hyperparameters after a hyperparameter
sweep wherein the old method just used to choose the best hyper that resulted in largest area
under the learning curve (AUC) but suffered from not taking into account the hyperparameter
sensitivity etc. We compare the Soft Actor Critic (SAC) Discrete CNN and Vanilla ActorCritic (VAC) Discrete CNN agents’ mean learning curves in several contexts utilizing this new
approach. We hope to compare various other algorithms in the future and create a benchmark
for MinAtar so researchers can compare their algorithms on these environments. Lastly we also
hope to add more games from ALE to the MinAtar codebase for further testing. We hope that
MinAtar and this new hyperparameter approach can allow researchers to use it as a testbed
for reinforcement learning

**Joseph, Robert**, et al. “Hybrid Dealiasing Convolutions.” Undergraduate Research Symposium, University of Alberta, 2022, pp. 12–13.

> Abstract:  The convolution theorem provides a method for efficiently computing convolutions
using Fast Fourier Transforms (FFTs), with the caveat that the convolution is periodic. Many
applications such as nonlinear PDEs require a linear convolution, which can be computed using
the convolution theorem, provided that the data is sufficiently padded with zeros. Implicit
dealiasing provides an alternative to explicit dealiasing: the FFTs are formulated to implicitly
take account of the known zero values, avoiding the need for explicit zero padding. Recently,
implicit dealiasing has been extended to handle arbitrary data and padding lengths. To maximize performance, the padding is chosen to be fully implicit, fully explicit, or somewhere in
between. We offer unique solutions that expand hybrid dealiasing to issues with uneven input
or minimum padded sizes, reducing memory and computation time. We also expand this to
1D/2D scenarios (3D is still in process), where we now have image convolution and construct the
first hybrid dealiasing solution, which is around 10 times quicker than typical explicit padding
approaches. We also expand this to multi-convolution, applying the convolution to a sequence
of data, N arrays rather than just two, and demonstrate a conventional grid search hyperparameters search strategy that selects the optimal hyperparameters that result in the shortest
convolution time. Finally, we are developing them for existing state-of-the-art fast Fourier
transform libraries such as FFTW++, which can result in low memory FFT algorithms that
are faster, and we are comparing the performance of our approach to the standard approach in
Convolution Neural Networks, Machine Learning, turbulence simulations, signal filtering, PDEs
etc. Therefore, we expect hybrid dealiasing to become the standard method for convolutions
in the future and hope to develop hybrid dealiased convolutions for computing sparse Fourier
Transforms, fractional phase, and partial Fourier transforms

**Joseph, Robert**, and Xinwei Yu. “Numerical Analysis for real-time Nonlinear Model Predictive Control of Ethanol Steam Reformers.” Canadian Undergraduate Mathematics Conference, 2022, pp. 30–31.

>Abstract: 

**Joseph, Robert**, and Xinwei Yu. “Numerical Analysis for real-time Nonlinear Model Predictive Control of Ethanol Steam Reformers.” Eureka Undergraduate Symposium, 2022.

**Joseph, Robert**. “Infodemiology and Infoveillance of Covid19 Using GPT-3.” STEM Fellowship Journal, vol. 7, no. 1, 2021, pp. 87–88. https://doi.org/10.17975/sfj-2021-003.

**Joseph, Robert**, “Statistical Machine Learning - Analysis of Cardiovascular diseases.” International Undergraduate Summer Enrichment Program, 2021.

**Joseph, Robert**, et al. “Correlation between COVID-19, Mental Illness and Substance Abuse Prevalence.” STEM Fellowship Journal, vol. 6, no. 1, 2020, pp. 127–128. https://doi.org/10.17975/sfj-2020-004.

**Joseph, Robert**. ”Riemann ζ(2k) using Fourier Analysis” Undergraduate Number Theory Society, University of Alberta, 2020.

# Summer Schools Attended

International Undergraduate Summer Enrichment Program, University of Alberta, 2021.

Alberta Number Theory Days XIII, Banff International Research Station for Mathematical Innovation and Discovery, 2021.

Western Summer School in Algebra, University of Alberta, 2020.

---
layout: post
title:  Reinforcement Learning Part 1 - Introduction
date: 2022-08-15 21:01:00
description: A short intro into RL
tags: RL
categories: RL
---

In reinforcement learning a so called _agent_ learns to solve a task by learning from trial and error when interacting with an _environment_. This interaction is triggered by the agent by choosing an action $$A(s)$$ (here, an action is denoted as function as the action to be chosen might depend on the current state). As a response to the action, the agent gets information about the new environment state $$S_{t+1}$$ and a scalar reward $$R_{t+1}$$. The following image shows this basic relationship between the agent and the environment:

{% include figure.html path="assets/img/posts/drl_basics.png" class="img-fluid rounded z-depth-1" %}
The reward serves as feedback on the quality of a certain action in a given state. The goal of the agent is to maximize the sum of rewards over time.

## Sources:

- R. S. Sutton and A. G. Barto, Reinforcement Learning: An Introduction [http://incompleteideas.net/book/the-book.html](http://incompleteideas.net/book/the-book.html)
- D. Silver, “Lecture 1: Introduction to Reinforcement Learning”, [https://www.davidsilver.uk/teaching/](https://www.davidsilver.uk/teaching/)
---
title: "Workshop on Springer Volume 2023 - Abstracts"
layout: page
excerpt: "Workshop on Springer Volume 2023 - Abstracts"
sitemap: false
permalink: /WSV2023-abstracts/
---

<h1 style="text-align: center;">Workshop on Springer Volume 2023 <br>Abstracts</h1>

<br>

<h4 id="Abramsky"><b>Samson Abramsky</b> <br> TBA</h4>

<br>
<h4 id="Barbosa"><b>Rui Soares Barbosa</b> <br> Logic and structure at the borders of paradox</h4>

<br>
<h4 id="Clairambault"><b>Pierre Clairambault</b> <br> The Geometry of Causality: Multi-token Geometry of Interaction and Its Causal Unfolding</h4>

<p>
Concurrent Games is a framework developed in the past decade
for semantics of programming languages. In Concurrent Games, a program
is interpreted as an event structure, representing its interactive
behaviour with its execution environment. The representation is
extremely fine-grained: it is causal as in so-called truly concurrent
models of concurrency, showing explicitely the dependence and
independence of computational events, and the non-deterministic
branching points.
</p>

<p>
This interpretation is computed in a modular way by induction on
programs, following the methodology of denotational semantics. This is
good, because it means that the semantics can be used to reason
compositionally on programs. But it is also bad, because the many layers
of the interpretation of the source code in a denotational model and the
complexity of the operations involved (notably, the composition of
strategies) blurs the relationship between the source code and the
semantics.
</p>

<p>
In this work, we make concurrent games operational. More precisely, we
show that programs can be translated compositionally intro certain
coloured Petri nets, combining intuitions from game semantics, Girard's
Geometry of Interaction, and folklore ideas on the representation of
first-order imperative concurrent programs as Petri nets. We regard
these coloured Petri nets as a kind of intermediate representation,
still close to the source code. But as finite graphs *unfold* to
infinite trees, Petri nets *unfold* to event structures; and here we
show that this unfolding yields the same event structure obtained
denotationally from the interpretation in concurrent games.
</p>

<p>
We deploy this for Idealized Parallel Algol, a call-by-name higher-order
concurrent programming language that is well-studied in the game
semantics literature. The translation is implemented, and available at:
</p>

<p>
<a href="https://ipatopetrinets.github.io/">https://ipatopetrinets.github.io/</a>
</p>

<p>
This is joint work with Simon Castellan.
</p>

<br>
<h4 id="Constantin"><b>Carmen Constantin</b> <br> Towards a Classification of Contextuality</h4>
<p>
This talk will discuss some of the early steps taken towards classifying quantum states according to the hierarchy of contextuality introduced by Abramsky and Brandenburger. We will briefly mention some of the results which led to the conjecture that almost all entangled states admit Hardy-type proofs of non-locality without inequalities and probabilities and also give a constructive proof of this conjecture. In particular, we will showcase an algorithm for producing local, n+2 one-qubit observables, which witness the logical contextuality of almost all n-qubit entangled states, with the exception of tensor products of single-qubit states and Bell states. 
</p>

<br>
<h4 id="Dawar"><b>Anuj Dawar</b> <br> Variables, Pebbles, Width and Support</h4>
<p>
In finite model theory, the number of distinct variables that appear in
a formula emerged as an important measure of the complexity of a
formula.  This is related to pebbling games and formed the basis of the
pebbling comonad introduced by Abramsky, Dawar and Wang.  In this talk,
I relate the measure to a number of different notions of width in the
literature showing that it describes a fundamental resource.  In
particular, I make a connection with supports in circuit complexity and
show how it yields novel complexity lower bounds.
</p>

<br>
<h4 id="Greco"><b>Giuseppe Greco</b> <br> Lambek-Grishin Calculus: Focusing, Display and Full Polarization
</h4>

<p>
*Focused sequent calculi* are a refinement of sequent calculi, where additional side conditions on the applicability of inference rules force the implementation of a proof search strategy. Focused cut-free proofs exhibit a special normal form that is used for defining identity of sequent calculi proofs. We introduce a novel focused display calculus **fD.LG** and a fully polarized algebraic semantics $\mathbb{FP.LG}$ for Lambek-Grishin logic by generalizing the theory of *multi-type calculi* and their algebraic semantics with *heterogenous consequence relations*. The calculus **fD.LG** has *strong focalization* and it is *sound and complete* w.r.t. $\mathbb{FP.LG}$. This completeness result is in a sense stronger than completeness with respect to standard polarized algebraic semantics, insofar as we do not need to quotient over proofs with consecutive applications of shifts over the same formula. We also show a number of additional results. **fD.LG** is sound and complete w.r.t. LG-algebras: this amounts to a semantic proof of the so-called *completeness of focusing*, given that the standard (display) sequent calculus for Lambek-Grishin logic is complete w.r.t. LG-algebras. **fD.LG** and the focused calculus **fLG** of Moortgat and Moot are equivalent with respect to proofs, indeed there is an effective translation from **fLG**-derivations to **fD.LG**-derivations and vice versa: this provides the link with operational semantics, given that every **fLG**-derivation is in a Curry-Howard correspondence with a directional $\overline\lambda\mu\widetilde{\mu}$-term.	
</p>	

<br>
<h4 id="Heunen"><b>Chris Heunen</b> <br> Compact Inverse Categories</h4>
<p>
<a href="/downloads/WSV2023/Heunen-Compact_Inverse_Categories.pdf">Download PDF</a>
</p>

<br>
<h4 id="Hines"><b>Peter Hines</b> <br> “It's all Greek to me” - on the pre-history of categorical logic</h4>
<p>
<a href="/downloads/WSV2023/Hines-It's_all_Greek_to_me.pdf">Download PDF</a>
</p>

<br>
<h4 id="Jakl"><b>Tomáš Jakl</b> <br> Towards comonadic locality theorems</h4>
<p>
In this talk I overview my progress towards obtaining a fully axiomatic account of Gaifman and Hanf locality theorems, which are an important tool in finite model theory. As a by-product I obtain an abstract version of the Workspace Lemma of Samson Abramsky and Dan Marsden. My axiomatic setting is based on the framework of game comonads and arboreal categories studied in the Resources and co-Resources project where Samson Abramsky was in the leading role together with Anuj Dawar.	
</p>	

<br>
<h4 id="Karamlou"><b>Amin Karamlou</b> <br> CSP relaxations and the hierarchy of contextuality</h4>
<p>
I will aim to explain connections between Abramsky and Brandenburger's hierarchy of contextuality and constraint satisfaction problems (CSPs). It is already known that any possibilistic empirical model corresponds to a CSP. Moreover, this CSP is solvable iff the model is not strongly contextual. Here we establish similar links between probabilistic and logical notions of contextuality, and relaxations of CSPs. By exploiting existing connections between the hierarchy of contextuality and the graph-theoretic framework for contextuality, we obtain as immediate corollaries links between CSP solving and invariants of exclusivity graphs, which to the best of my knowledge is a novel observation.
</p>

<br>
<h4 id="Kolaitis"><b>Phokion Kolaitis</b> <br> Consistency, Acyclicity, and Positive Semirings</h4>
<p>
In several different settings, one comes across situations in which the objects of study are locally consistent but globally inconsistent. Earlier work on probability distributions in the 1960s and relational database theory in the 1980s produced characterizations of when local consistency implies global consistency. We will discuss a common generalization of these results by considering K-relations over an arbitrary positive semiring K and establishing that a collection H of sets of attributes has the property that every pairwise consistent collection of K-relations over those sets of attributes is globally consistent if and only if the collection H forms an acyclic hypergraph.
</p>

<p>
This talk is based on a chapter with the same title by Albert Atserias and Phokion G. Kolaitis in the volume “Samson Abramsky on Logic and Structure in Computer Science and Beyond”.
</p>

<br>
<h4 id="Laird"><b>Jim Laird</b> <br> Axioms for sequentiality, state and concurrency</h4>
<p>
In our contribution to the "Logic and Structure" volume, Guy McCusker and I give Abramsky-style "axioms for full abstraction" of a games model of general references. The categorical structure on which these are based - final coalgebras for the sequoid, an asymmetric connective capturing causality - suggests a general methodology for constructing higher-order mutable objects by hiding their internal state, and coinductive theories for reasoning about them. Relating this structure to adjunction models of computational effects and linear logic opens the prospect of extending these theories to concurrent objects.	
</p>

<br>
<h4 id="Mansfield"><b>Shane Mansfield</b> <br> Testing Contextuality on a General-purpose Single-photon-based Quantum Computing Platform</h4>
<p>
Among the promising technological approaches to quantum computing, photonics offers the advantages of low decoherence, information processing with modest cryogenic requirements, and native integration with classical and quantum networks. To date, quantum computing demonstrations with light have implemented specific tasks with specialized hardware, notably Gaussian Boson Sampling which permitted quantum computational advantage to be reached. At Quandela we have recently reported a first user-ready general-purpose quantum computing prototype based on single photons, which is available on the cloud. The device comprises a high-efficiency quantum-dot single-photon source feeding a universal linear optical network on a reconfigurable chip for which hardware errors are compensated by a machine-learned transpilation process. A full software stack allows remote control of the device to perform computations via logic gates or direct photonic operations. I will describe the platform and some applications that can be run on it. This includes a contextuality experiment which can be used as the basis for a protocol for the certified generation of private randomness.
</p>

<br>
<h4 id="Marsden"><b>Dan Marsden</b> <br> Ripples from Pebbles</h4>
<p>
This talk will survey aspects of the game comonads programme of research, beginning with pebble games,
and Abramsky, Dawar and Wang's introduction of game comonads. The talk will then sketch subsequent
work of myself and Samson, expanding these ideas to guarded and bounded fragments of first-order logic. 
Time permitting, we shall conclude with a discussion of ongoing work, originating from the finite model theory 
and game comonads project at this year's Adjoint School.	
</p>	

<br>
<h4 id="Moshier"><b>Andrew Moshier</b> <br> Relations in Order-enriched Categories</h4>
<p>
When one considers structure in computer science (and beyond), partial orders and relations between partially-ordered structures figure prominently. Domain theory is probably the most obvious example, but programming logics, agent-based reasoning, models of distributed computing, and so on, all involve variously motivated partial orders along with relations between them.
</p>

<p>
Regular categories are suitable for dealing with structures that arise from ordinary relations, but they fail to account for order (apart from our ability to encode partial-orders as special relations). On the other hand, motivated by their investigation of categories equivalent to quasivarieties and varieties of ordered algebra, Alex Kurz and Jiry Velebil (Quasivarieties and Varieties of Ordered Algebras, Math Structures in CS, 7(11), 2017) proposed a class of order regular categories. We investigate how a slight generalization of their order regular categories supports a category of relations that is well-suited to reasoning about relations in order-enriched settings. We give some examples, and with enough time, prove that the dual lattice of frame pre-orders on a given frame is (a) ultraparacompact, and (b) isomorphic to the frame of nuclei.
</p>

<br>
<h4 id="Murawski"><b>Andrzej Murawski</b> <br> Deconstructing general references via game semantics</h4>
<p>
We investigate the game semantics of general references through the fully abstract game model of Abramsky, Honda and McCusker (AHM), which demonstrated that the visibility condition in games corresponds to the extra expressivity afforded by higher-order references with respect to integer references. First, we prove a stronger version of the visible factorisation result from AHM, by decomposing any strategy into a visible one and a single strategy corresponding to a reference cell of type unit → unit (AHM accounted only for finite strategies and its result involved unboundedly many cells).
</p>

<p>
We show that the strengthened version of the theorem implies universality of the model and, consequently, we can rely upon it to provide semantic proofs of program transformation results. In particular, one can prove that any program with general references is equivalent to a purely functional program augmented with a single unit → unit reference cell and a single integer cell. We also propose a syntactic method of achieving such a transformation.
Finally, we provide a type-theoretic characterisation of terms in which the use of general references can be simulated with an integer reference cell or through purely functional computation, without any changes to the underlying types.	
</p>	

<br>
<h4 id="Raussendorf"><b>Robert Raussendorf</b> <br> Interwoven paths: my journey through contextuality, cohomology and paradox</h4>
<p>
I first met Samson at one of the Obergurgl meetings, in 2008. But I got really drawn into his research when he was not present: at QPL 2011 in Nijmegen. Two of his then-students, Rui Soares Barbosa and Shane Mansfield, presented on a cohomological formulation of contextuality that they and Samson had come up with. Their work resonated with me, because of the connection between contextuality and measurement-based quantum computation (MBQC) that was already known at the time. It seemed to me that a cohomological description of contextual measurement-based quantum computations was in reach! Excited by that prospect, I spent a good fraction of the workshop chasing Rui and Shane.
</p>

<p>
As became clearer in the following year, establishing the cohomology — contextuality — MBQC triangle was not as easy as I had anticipated. Even today, 12 years later, the story is incomplete. In my talk I give a brief overview of what we found out so far, which obstacles we faced and still face, and the surprise discoveries we made along the way. 
</p>

<br>
<h4 id="Reggio"><b>Luca Reggio</b> <br> Paths without homotopy, and homotopy without paths</h4>

<p>
Building on the game comonads research programme, started by Samson Abramsky and Anuj Dawar, I will outline some preliminary ideas on how to use abstract homotopy theory to combine two distinct approaches to the study of "Logic and Structure": the geometric/topological one (exemplified by duality theory) and the categorical one (in the form of game comonads).	
</p>	
	
<br>
<h4 id="Searle"><b>Amy Searle</b> <br> Quantifying Non-Classicality in Temporal Measurement Scenarios</h4>
<p>
We study the setup in which measurements are performed in a particular temporal order on a system, which may be a system governed by the laws of classical physics, quantum physics, or most generally any general probabilistic theory. We utilise a sheaf theoretic approach akin to that of Abramsky and Brandenburger's approach to contextuality [1], the difference being that here our notion of classicality must reflect that measurements could be sensitive to previous measurements. Of central significance in this framework is the ability to map temporal measurement setups as well as the empirical models for such setups (tables of data arising from measurement) to certain carefully constructed contextuality measurement scenarios and empirical models. Doing so allows us to utilise a Theorem from [2] for contextuality setups, adapted from Vorob'ev's Theorem in the context of game theory, in order to understand which temporal measurement scenarios are capable of exhibiting non-classicality.
</p>

<p>
[1] S. Abramsky and A. Brandenburger, “The sheaf-theoretic structure of non-locality and contextuality,” New
Journal of Physics, vol. 13, p. 113036, Nov. 2011.
</p>

<p>
[2] R. Barbosa, “Contextuality in quantum mechanics and beyond,” 2015	
</p>	

<br>
<h4 id="Shah"><b>Nihil Shah</b> <br> Mixed Distributive Laws: Game Comonads over Distribution/Quantum Monads</h4>
<p>
In the seminal paper, The Pebbling Comonad in Finite Model Theory, Abramsky, Dawar and Wang encoded the pebble model comparison game as an indexed family of comonads over the category of relational structures. This game, and thus the comonad, is an important tool in finite model theory as it characterizes when two structures are equivalent in finite variable logic and has important connections to local consistency and graph isomorphism testing. Parallel to this development, in the paper The Quantum Monad on Relational Structures, Abramsky, Barbosa, de Silva, and Zapata constructed a graded monad over the category of relational structures which captured a notion of quantum homomorphism originally phrased in terms non-local games from quantum information theory. Finding a graded distributive law between the pebbling comonad and the quantum monad would give rise to biKleisli category allowing these two constructions to interact compositionally. In this talk, I will go over how in the process of searching for such a law, we obtained interesting, but unrelated, no-go theorems demonstrating that directed containers do not distribute over a large class of discrete probability distribution monads.  We also discovered a general tool for transferring distributive laws of (co)monads on some category to related (co)monads on a (co)reflective subcategory. Finally, I will conclude with recent work demonstrating that there are distributive laws of game comonads over the quantum monad.	
</p>

<br>
<h4 id="Stefański"><b>Rafał Stefański</b> <br> Monads, Comonads, and Transdcuers</h4>
<p>
The topic of this talk are functors (in Set) that are both monads and comonads, and how they connect with the theory of transducers (which are output producing automata). For each such functor M, we show how to define a class of recognizable functions of type MΣ → MΓ. Then, we present a couple of examples of Ms whose recognizable functions correspond to some well-know classes of transducers, such as Mealy machines and rational functions. We also present M's for more complex structures such as terms or infinite words.Then, we discuss what properties of M are required to ensure that its class of recognizable functions is closed under compositions. Finally, we talk about the problems one encounters while trying to extending the results to a general category.	
</p>

<br>
<h4 id="Väänänen"><b>Jouko Väänänen</b> <br> Dependence logic and dimension</h4>
<p>
Starting with my work with Samson on dependence logic (“From IF to BI”, Synthese 2009), I present some ideas of my recent joint work with L. Hella and K Luosto on a notion of dimension for families of sets, which leads to new hierarchy results inside dependence logic and its friends.
</p>

<br>
<h4 id="Wang"><b>Daphne Wang</b> <br> Causality and Signalling of Garden-Path Sentences</h4>
<p>
Sheaves are mathematical objects that describe the globally compatible data associated with open sets of a topological space. Original examples of sheaves were continuous functions; later they also became powerful tools in algebraic geometry, as well as logic and set theory. More recently, sheaves have been applied to the theory of contextuality in quantum mechanics. Whenever the local data is not necessarily compatible, sheaves are replaced by the simpler setting of presheaves.  In previous work, we used presheaves to model lexically ambiguous phrases in natural language and identified the order of their disambiguation. In the work presented here, we model syntactic ambiguities and study a phenomenon in human parsing called garden-pathing. It has been shown that the information-theoretic quantity known as “surprisal” correlates with human reading times in natural language but fails to do so in garden-path sentences. We compute the degree of signalling in our presheaves using probabilities from the large language model BERT and evaluate predictions on two psycholinguistic datasets.  Our degree of signalling outperforms surprisal in two ways: (1) it distinguishes between hard and easy garden-path sentences (with a p < 10^{-5}) whereas existing work could not, (2) its garden-path effect is larger in one of the datasets (32 ms vs 8.75 ms per word), leading to better prediction accuracies.
</p>

<br>
<h4 id="Winskel"><b>Glynn Winskel</b> <br> GoI to SmP</h4>
<p>
In the early nineties Samson Abramsky and Radha Jagadeesan provided new foundations for GoI (Jean-Yves Girard’s Geometry of Interaction). Their idea returns in understanding two-sided games and strategies over relational structures within the general programme of  Structure meets Power, which began in the relatively recent work of Samson Abramsky, Anuj Dawar and Pengming Wang.
</p>

<br>
<h4 id="Zamdzhiev"><b>Vladimir Zamdzhiev</b> <br> Central Submonads and Notions of Computation</h4>
<p>
In a recent paper, Samson posed interesting questions regarding the vision of mathematical semantics: "That is, should mathematical semantics still be conceived as following in the track of preexisting languages, trying to explain their novel features, and to provide firm foundations for them? Or should it be seen as operating in a more autonomous fashion, developing new semantic paradigms, which may then give rise to new languages?"
</p>

<p>
For me, personally, it is the second question that is of higher interest. In this talk I will present some joint work that aims (and hopefully succeeds) to fit into the spirit of this question.
</p>

<p>
Monads in category theory are algebraic structures that can be used to model computational effects in programming languages. We show how the notion of "centre", and more generally "centrality", i.e. the property for an effect to commute with all other effects, may be formulated for strong monads acting on symmetric monoidal categories.  We provide a computational interpretation by formulating equational theories of lambda calculi equipped with central submonads, we describe categorical models for these theories and prove soundness, completeness and internal language results for our semantics.
</p>

<p>
This is joint work with Titouan Carette and Louis Lemonnier.
</p>

<br>
---
title: "Components of a machine learning system"
path: "components-of-a-machine-learning-system"
author: "Josh Zastrow"
date: "2018-10-22"
description: "Let us lift up the hood and survey the components of a production grade machine learning system"
image: "components-of-a-machine-learning-system.jpg"
---

There is tremendous promise from machines that can make decisions for themselves. Routine decisions made from observations of a business can now be automated and scaled ad infinitum. Suggestion engines that serve as intelligent helpers can multiply the capabilities of your specialized knowledge worker many times over. The age of discovery in Artificial Intelligence has hinted at powerfully intelligent algorithms that can offer new capabilities. These algorithms are equipped to address a new class of problems previously thought reserved for the human domain.

But in practice, these algorithms alone are not enough. They can serve as the core engine of a sophisticated system, but they make up a small part of the system design and engineering efforts. Let us lift up the hood and survey the components of a production grade machine learning system.

# Fuel For Your Engine

To provide intelligent power, the machine learning engine relies on information as fuel. Fuel arrives in the form of data—, raw signals from external sources. Your Data Scientist dictates which signals are important for an optimally performing engine, and your Software or Data Engineer creates an interface for extracting the right data from the sources.

Data is in abundance, and you probably have more access to it than you know. Websites (if you can see it, you can scrape it), spreadsheets, APIs, logs, sensor readings, databases, file systems, digital documents, GPS, photos, videos, audio recordings can all be configured for data collection.

Collection can come from many places in many forms, and with varying levels of quality. High grade fuel comes from de-normalized, cleaned datasets:; rows upon rows of observations, with each unique signal delimited and readily accessible from structured storage. Low grade fuel can be messy, unstructured data from uncontrolled external sources. This requires extensive cleaning, processing and transforming to refine it.

Gain an understanding through data analysis and domain expertise on which signals are informative, and build a system that transforms the valuable signals into an engine ready format. Keep in mind, the more sources and signals needed to operate your machine learning engine, the more costly the system becomes to maintain.

# Ingestion Pipeline

The information required to make accurate decisions may come from disparate sources. Each source needs to be joined together; pulled at regular intervals or streamed in a consistent flow. This is referred to as batch processing or stream processing.

This piping infrastructure routes data to wherever it's needed: storage systems that hold structured or unstructured data, dashboards that visualize metrics, monitoring systems that check the quality of the data, data processing systems that transform data into machine learning signals, and the inlet and outlets of your machine learning engine.

Engineering efforts can be significant here, as pipelines can become increasingly complex. Disruptions in the flow of data can go by undetected, or halt the system entirely. It is advised to establish a process to manage your data pipeline, using data work-flow management tools to maintain your pipeline as your business infrastructure grows.

# Quality Gauges

You may not notice when your machine learning engine performance drops. In the data science labs, the prototype engine may have achieved desirable benchmarks with fully processed data, but in the real world the engine itself will not tell you when signals are dropped, or when the behavior of the signals change dramatically from when training occurred.

A knowledge worker performing analysis may be aware when the reviewed information looks very irregular, but a machine learning model will try its best to predict on the information given. Additional 'data checkers' are needed prior to the signals reaching the engine, to make sure the behavior of your system is operating as intended.

These recorded measurements require that your engineer builds additional systems for data processing, and necessitates the use of reporting tools, dashboards and data monitors that will notify the maintainer when irregularities arise.

# Processors and Transformers

Most machine learning models are quite inflexible to signals outside of it's interpretable range. Much like how humans process a tremendous amount of visual information from only wavelengths of light within the narrow band of 300-900hz, machine learning models are well suited for interpreting numerical values between 0 and 1. There are a range of techniques at your data scientists disposal to massage information, such as the words in this article, into signals that are interpretable by your machine learning engine. Once developed, these techniques must be packaged into self contained systems that your data can reliably flow through.

Your final system will likely have a series of data cleaners, processors and transformers to turn the raw data from your source into prepared machine learning signals. Keep in mind, the tooling your data scientist used for developing data processing techniques might be very different than the tooling used in production. Expect a great deal of engineering for translating research into production.

# Storage

The cleaned and processed data may be ready for your machine learning system, but it is wise to store the flow of signals in a storage system for quality checks and for use in other applications and machine learning efforts.

There may be different storage systems that serve different purposes. You may have a Data Lake, that holds vast quantities of unstructured data in various formats. This architecture promotes "schema-on-read", where the structure and modeling of your data happens once data is read from storage. This is useful when the desired organization of your incoming data is not known. Conversely, a Data Warehouse promotes "schema-on-write", where the format and destination of your data has already been modeled, and it's a matter of transforming raw information into the proper format and loading in.

The storage that holds this information must necessarily be separate than the storage systems used by your other business processes or products. Queries that demand the attention of your production resources for analytical purposes may have a deleterious effect on your customers who rely on the same storage resource for their user experience.

# Machine Learning Engine

The machine learning engine is your core system -- responsible for receiving in signals from your business and making decisions; whether classifying observations to be in one category or another, or by providing a quantified prediction of what the results should be. They are best built for routine decisions that are based on the same subset of information -- ones that require much of your valuable knowledge workers time to process.

To build one, you must have many historical examples that are labeled with the results you want to duplicate. Documents that failed or passed examination, images that have been flagged as appropriate or inappropriate, activity that has been recorded to be suspicious, price assignment based on descriptors, date assignment based on requirements. A machine learning algorithm will learn by example, finding subtle patterns in the many dimensions of the incoming data and learn how to make the decision for itself. This class of algorithms is considered "supervised learning"

There are learning algorithms that do not require labeled "Truths" of your data. They are also excellent at finding patterns in the data; uncovering structures and groupings that are not immediately realized by manual analysis. Deciding the precise location of a new cell tower, or chain-store based on geography, existing locations and population density can be determined by learning the underlying pattern of data. Market segmentation of your customers by more dimensions than visualization tools allow can be determined by these same algorithms.

To develop a functioning engine, the algorithms need a trainer. Your Machine Learning Engineer or Data Scientist will review the available information, process them into machine learning signals, understand the underlying structure and correlation of the signals, and train an algorithm to accurately predict the desired outcome from a set of withheld information. These steps encapsulate all the components of the full production system, built at a smaller scale for ad-hoc analysis as a means to creating a robust engine.

# Output Gauges

In the research department of your organization, these cognitive engines may have achieved a capability that satisfies your business needs, but will they stay that way forever? Customer behavior changes, business processes change, signals may shift. Subtle changes can cause your engine to suddenly behave erratically, or slowly deteriorate into sub-optimal performance. It is important to record measurements of your engine's output, and make sure the characteristics of it's predictions are similar to that of your expected behavior.

Drop in decision making performance can prompt a retraining of the machine learning algorithms. Erratic behavior can be captured and recorded for further analysis by your data scientist, resulting in new approaches for a more robust engine.

The historical reporting of your engine should be recorded, and your data analyst should regularly compare the characteristics of your engine's output with the historical "Truths" you once wanted it to match.

# Internal Monitoring System

When it comes to machine learning systems, there are two categories of metrics:. yYour KPIs, which areis the business critical measurement that you are interested in improving, and your system behaviour metrics. The purpose of your engine is to improve the value of your KPIsthis metric; it is the business outcome you desired when first embarking on a full machine learning system build. This should be established and measured before starting your machine learning system. The purpose of the system behaviour metrics is to monitor your engine to ensure that it is functioning as expected.

There are also metrics that help describe the behavior of your system. Whatever these numbers show, a sudden difference should inform you to act, and allow you to maintain a pulse on all parts of your system. A departure from regular behavior should prompt the question "Why?" and a combination of different metrics can help you find the root cause. With enough dials and gauges, you can fly a jumbo jet through the clouds.

These dashboards, reports and monitors are the hallmark of business intelligence. Data-driven organizations know these well, but it is even more important to have a robust monitoring system around your machine learning ecosystem. Your Business Intelligence Engineer, Data Analyst, UI/UX Designer and Data Visualization Specialist can build and maintain the organizational tooling for creating these systems, but every worker in the organization should be empowered to develop their own analytical dashboards.

# Human Interface

The outputs of your machine learning engine can provide human-like decisions, but the algorithm produces values in numerical form. There is an additional layer that translates the numerical output into a human-interpretable form, specifically delivered to the person who will rely on it. This involves an understanding of your business process and the end user of your engine. How should they be interacting with the results? Your Front-End Engineer, UI/UX Designer, Data Analyst, Data Visualization Engineer, or Software Engineer is responsible for taking the output of the machine learning engine and incorporating it into your business process or product in a seamless way.

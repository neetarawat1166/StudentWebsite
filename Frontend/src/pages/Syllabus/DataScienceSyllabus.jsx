import React from 'react'
import Syllabus from '../../components/common/Syllabus';

const DataScienceSyllabus = () => {
  // Define topics here
  const topics = [
    {
      heading: "Introduction",
      subtopics: [
        "Introduction with AI & Machine Learning",
        "Data Science vs Data Engineering vs Data Analysis vs AI",
        "Use of Data in the world of AI",
        "Connecting with Upflairs Community",
        "Basic Linux/Windows Commands",
        "Setting Up GITHUB & Google Colab/Kaggle"
      ]
    },
    {
      heading: "Python Overview",
      subtopics: [
        "Command line & Script based Python Programming",
        "Python Quicker:Keywords, Data Types, Operators",
        "Conditional/Looping/Error Handling in Python",
        "Comprehensions",
        "Python User Defined Functions",
        "Python iterator",
        "Lambda Expressions",
        "Map,filter,reduce,zip,enumerate.",
        "Python Modules: Usage and Installation",
        "Understanding the OOP of Python",
        "Classes, Objects, Methods;",
        "Inheritance: Its types",
        "Polymorphism",
        "Encapsulation"
      ]
    },
    {
      heading: "Data in Python",
      subtopics: [
        "Types of DATA?",
        "Numpy Arrays: Creating, Accessing, Manipulating",
        "Array Attributes; Data Operations",
        "The file handling in python",
        "Dealing with Excel/CSV/txt files"
      ]
    },
    {
      heading: "Data Visualization",
      subtopics: [
        "Data is Beautiful…!!!",
        "Visualization Libraries in Python",
        "MATPLOTLIB PYPLOT: line, scatter, pie, box, area etc",
        "Decorating the plots using Matplotlib (labels, colors, markers, legend, grids, figure sizes etc)",
        "The Subplots and axes in matplotlib; Showing Images",
        "Pandas Visualization: Basic Plots",
        "bar, barh, hist, box, kde, density, area, scatter, hexbin, pie plots",
        "Plotting with Missing Data",
        "Easy and advanced Data Visualization from Seaborn",
        "Categorical, Distributive, Regression, Matrix, Grid Plots"
      ]
    },
    {
      heading: "Introduction with Machine Learning",
      subtopics: [
        "Introduction of machine learning",
        "Supervised and unsupervised machine learning.",
        "Regression and classification and clustering"
      ]
    },
    {
      heading: "Machine Learning – Regression",
      subtopics: [
        "LinearRegression , Polynomial Regression: The Non-linearity in Data",
        "Performance Evaluation of Regression Mode"
      ]
    },
    {
      heading: "Supervised ML – Classification",
      subtopics: [
        "Logistic Regression: Concept & Need",
        "Performance Evaluation of Classifications Models",
        "Support Vector Machines (SVM)",
        "Kernel Nearest Neighbors (KNN)",
        "Decision Trees Classifier",
        "Random Forest Classifier",
        "Biases versus variances",
        "Data Overfitting & Underfitting",
        "The Concept of Cross-validation",
        "The Bayes Theorem",
        "Naïve Bayes Algorithm for Machine Learning"
      ]
    },
    {
      heading: "Unsupervised Machine Learning",
      subtopics: [
        "K-Means Clustering",
        "Performance metrics for clustering techniques",
        "Hierarchical clustering analysis"
      ]
    },
    {
      heading: "Deep learning & Artificial Neural Network",
      subtopics: [
        "Concept of Deep Learning & Neural Network",
        "What is ANN?",
        "The basic terminology – Layers, weights, biases, activation functions, losses, optimizers, learning rate",
        "The Concept of Forward & Backward Propagation",
        "Using Keras Library for ANN",
        "Building and Compiling Sequential Neural Network Mode"
      ]
    },
    {
      heading: "Web Scrapping",
      subtopics: [
        "What are web servers and how HTML look-like?",
        "Scrapping the Live Data"
      ]
    },
    {
      heading: "Advance model DL model evaluation & model optimization techniques",
      subtopics: [
        "Hyperparameter Tuning",
        "Regularization L1/L2 regularization",
        "Drop out layer",
        "earlystoping"
      ]
    },
    {
      heading: "ANN implementation for regression",
      subtopics: [
        "Learn ANN implementation for regression",
        "Understand ANN working for ANN",
        "Implement ANN with real world dataset"
      ]
    },
    {
      heading: "Convolutional Neural Network – Keras",
      subtopics: [
        "Image processing, image formation, learn about pixels",
        "The Convolution Theory – Filters, Pools, Averaging etc.",
        "Generating Convolution Neural Network Models",
        "Image Data Augmentation."
      ]
    },
    {
      heading: "Transfer Learning",
      subtopics: [
        "Understand the transfer learning techniques",
        "How transfer learning techniques getting popular",
        "Learn implementation of transfer learning."
      ]
    },
    {
      heading: "Natural Language Processing",
      subtopics: [
        "What is NLP? Linguistic to Natural Language!",
        "NLU and NLG component of NLP.",
        "NLTK in Python for Text Processing",
        "Text to Speech and Speech to Text Modules in Python",
        "Morphological Analysis; Syntactic Analysis",
        "Generating Word Clouds"
      ]
    },
    {
      heading: "RecurrentNeural Network",
      subtopics: [
        "What is RNN",
        "How RNN is different from ANN",
        "Understand the working process of RNN.",
        "The Concept of Long-Short-Term Memory (LSTM)",
        "LSTM based Neural Networks for Future Prediction!!"
      ]
    },
    {
      heading: "Project Deployment",
      subtopics: [
        "Introduction of deployment process",
        "Various platform to deploy the project.(aws, gcp, azure )",
        "Manual Deployment and deployment with automation understanding",
        "Lab on deployment process of project."
      ]
    }
  ];

  return (
    <>
      <Syllabus topics={topics} courseHeading="Data Science and Machine learning with AI Course" />
    </>
  );
};

export default DataScienceSyllabus
// ===== MOCK DATA FOR NOVELTYRADAR AI FRONTEND =====
// This file contains sample data for demonstration purposes.
// The backend team will replace this with real API responses.

const mockData = {
    // Sample project evaluation results
    projectEvaluation: {
        projectTitle: "AI-Powered Plant Disease Detection Using Deep Learning",
        projectSummary: "This project aims to develop a deep learning model for automatic detection and classification of plant diseases from leaf images. The system will use convolutional neural networks (CNNs) to identify various diseases affecting crops, providing early warning to farmers.",
        noveltyScore: 72,
        feasibilityScore: 78,
        overallStatus: "Promising",
        keyFindings: [
            "The project combines computer vision with agricultural applications, which has growing research interest",
            "Existing research shows high accuracy in disease detection for specific crops, but generalization across multiple crops remains challenging",
            "The approach is technically feasible with available datasets, but requires substantial training data",
            "Novelty potential exists in multi-crop generalization and real-time deployment optimization"
        ]
    },

    // Sample research papers
    papers: [
        {
            id: 1,
            title: "Deep Learning for Plant Disease Detection: A Comprehensive Review",
            abstract: "This paper provides a comprehensive review of deep learning techniques applied to plant disease detection. It covers various CNN architectures, datasets, and performance metrics. The authors identify gaps in current research and suggest future directions.",
            authors: ["Zhang, Y.", "Wang, S.", "Li, J."],
            venue: "Computers and Electronics in Agriculture",
            year: 2023,
            citations: 156,
            url: "https://example.com/paper1"
        },
        {
            id: 2,
            title: "Automated Detection of Apple Leaf Diseases Using Convolutional Neural Networks",
            abstract: "We propose a CNN-based approach for detecting three common apple leaf diseases. Our model achieves 95.2% accuracy on a dataset of 15,000 images. The system demonstrates robust performance across different lighting conditions.",
            authors: ["Kumar, A.", "Singh, R.", "Patel, M."],
            venue: "IEEE Transactions on Image Processing",
            year: 2022,
            citations: 89,
            url: "https://example.com/paper2"
        },
        {
            id: 3,
            title: "Transfer Learning for Multi-Crop Disease Classification",
            abstract: "This study explores transfer learning techniques for classifying diseases across multiple crop types. Using pre-trained models, we achieve competitive results with limited training data, suggesting potential for resource-constrained applications.",
            authors: ["Chen, L.", "Brown, D.", "Miller, K."],
            venue: "Remote Sensing",
            year: 2023,
            citations: 67,
            url: "https://example.com/paper3"
        },
        {
            id: 4,
            title: "Real-Time Plant Disease Detection on Mobile Devices",
            abstract: "We present a lightweight CNN architecture optimized for mobile deployment. The model runs at 30 FPS on smartphones while maintaining 88% accuracy, enabling real-time field diagnosis.",
            authors: ["Garcia, M.", "Rodriguez, P.", "Martinez, A."],
            venue: "Mobile Networks and Applications",
            year: 2021,
            citations: 124,
            url: "https://example.com/paper4"
        },
        {
            id: 5,
            title: "Explainable AI for Plant Disease Diagnosis",
            abstract: "This paper introduces an explainable AI framework for plant disease detection. Using attention mechanisms and Grad-CAM visualizations, we provide interpretable explanations for model predictions, increasing trust among agricultural practitioners.",
            authors: ["Smith, J.", "Johnson, E.", "Williams, R."],
            venue: "Expert Systems with Applications",
            year: 2024,
            citations: 45,
            url: "https://example.com/paper5"
        }
    ],

    // Sample claim-wise gap analysis
    gapAnalysis: [
        {
            claim: "Deep learning can accurately detect plant diseases from leaf images",
            similarPapers: 5,
            similarityLevel: "high",
            gapDescription: "While CNN-based detection is well-established for single crops, multi-crop generalization remains limited",
            riskOpportunity: "opportunity"
        },
        {
            claim: "Real-time detection is feasible on mobile devices",
            similarPapers: 3,
            similarityLevel: "medium",
            gapDescription: "Mobile deployment exists but accuracy-speed trade-offs require optimization",
            riskOpportunity: "opportunity"
        },
        {
            claim: "System can identify rare diseases with limited training data",
            similarPapers: 2,
            similarityLevel: "low",
            gapDescription: "Few-shot learning for rare diseases is an under-explored area with high potential",
            riskOpportunity: "opportunity"
        },
        {
            claim: "Model explanations can help farmers understand diagnoses",
            similarPapers: 4,
            similarityLevel: "medium",
            gapDescription: "Explainable AI is emerging but needs simplification for non-technical users",
            riskOpportunity: "opportunity"
        },
        {
            claim: "System can work with low-quality smartphone images",
            similarPapers: 2,
            similarityLevel: "low",
            gapDescription: "Robustness to varying image quality and lighting conditions needs improvement",
            riskOpportunity: "risk"
        }
    ],

    // Novelty score breakdown
    noveltyDetails: {
        score: 72,
        explanation: "The project shows moderate novelty by combining established techniques in a multi-crop context. While individual components (CNNs, disease detection) are well-researched, the focus on generalization and real-time deployment across multiple crop types provides novelty.",
        factors: {
            avgClaimSimilarity: 0.65,
            avgGapStrength: 0.78,
            domainSaturation: 0.72
        },
        formula: "Novelty = 100 × [0.5×(1 - 0.65) + 0.4×0.78 - 0.1×0.72] = 72",
        interpretation: "A novelty score of 72 indicates a promising project with moderate innovation. The project builds on solid research foundations while introducing meaningful advances in multi-crop generalization and practical deployment."
    },

    // Feasibility score breakdown
    feasibilityDetails: {
        score: 78,
        explanation: "The project is highly feasible given available resources. CNNs for image classification are well-understood, public datasets exist, and the required skills are learnable within the timeframe.",
        breakdown: {
            timeFeasibility: 0.85,
            skillsFeasibility: 0.75,
            dataFeasibility: 0.80,
            budgetFeasibility: 0.70
        },
        formula: "Feasibility = 100 × (0.3×0.85 + 0.3×0.75 + 0.2×0.80 + 0.2×0.70) = 78",
        interpretation: "A feasibility score of 78 indicates high feasibility. The project can realistically be completed within the proposed timeline with appropriate effort in data collection and model training."
    },

    // Improved project directions
    improvedDirections: [
        {
            title: "Multi-Crop Disease Detection with Few-Shot Learning",
            problemFocus: "Limited training data for rare diseases",
            proposedImprovement: "Implement few-shot learning techniques to handle rare diseases with minimal training examples",
            whyBetter: "Addresses the data scarcity problem while maintaining high accuracy across multiple crop types",
            expectedBenefit: "Reduces data collection requirements by 60% while maintaining >85% accuracy"
        },
        {
            title: "Edge-Optimized Real-Time Detection System",
            problemFocus: "Mobile deployment efficiency",
            proposedImprovement: "Develop model compression techniques for edge deployment with real-time inference",
            whyBetter: "Enables offline operation in rural areas with poor connectivity",
            expectedBenefit: "Achieves 30 FPS on mobile devices with <50MB model size"
        },
        {
            title: "Explainable AI for Farmer Decision Support",
            problemFocus: "Model interpretability for non-technical users",
            proposedImprovement: "Create simplified visual explanations and actionable recommendations for farmers",
            whyBetter: "Increases adoption by making AI predictions understandable and trustworthy",
            expectedBenefit: "Improves user trust and adoption rates by 40%"
        }
    ],

    // Risks and recommendations
    risksRecommendations: {
        projectRisks: [
            {
                type: "Data Availability",
                description: "Comprehensive multi-crop datasets may be limited or inconsistent",
                severity: "medium",
                recommendation: "Plan for data augmentation and consider transfer learning from single-crop datasets"
            },
            {
                type: "Model Generalization",
                description: "Model may not generalize well to new disease strains or environmental conditions",
                severity: "high",
                recommendation: "Implement robust testing protocols and continuous learning mechanisms"
            }
        ],
        technicalRisks: [
            {
                type: "Computational Resources",
                description: "Training deep CNNs requires significant computational power",
                severity: "medium",
                recommendation: "Use cloud GPU services or pre-trained models to reduce training time"
            },
            {
                type: "Mobile Performance",
                description: "Real-time inference on mobile devices may be challenging with complex models",
                severity: "medium",
                recommendation: "Optimize model architecture and consider model quantization"
            }
        ],
        feasibilityConcerns: [
            {
                type: "Timeline",
                description: "8 weeks may be tight for comprehensive model development and testing",
                severity: "medium",
                recommendation: "Focus on a subset of crops initially, then expand"
            },
            {
                type: "Skill Gap",
                description: "Deep learning expertise may require additional learning time",
                severity: "low",
                recommendation: "Leverage existing tutorials and pre-trained models"
            }
        ],
        recommendations: [
            "Start with a well-established CNN architecture (e.g., ResNet, EfficientNet)",
            "Use transfer learning from ImageNet or agricultural datasets",
            "Focus on 2-3 crop types initially for proof of concept",
            "Implement early stopping to prevent overfitting",
            "Create a clear evaluation metric framework before training",
            "Plan for user testing with actual farmers or agricultural experts",
            "Document model architecture and hyperparameters thoroughly",
            "Consider open-sourcing the dataset to contribute to the research community"
        ]
    }
};

// ===== API SERVICE LAYER (Placeholders for Backend Integration) =====
// These functions are placeholders where backend API calls will be added.

const apiService = {
    // Submit project for evaluation
    submitProject: async (projectData) => {
        // TODO: Replace with actual API call
        // const response = await fetch('/api/evaluate', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(projectData)
        // });
        // return response.json();
        
        // Mock implementation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockData.projectEvaluation);
            }, 5000);
        });
    },

    // Get research papers
    getPapers: async (projectId) => {
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/papers/${projectId}`);
        // return response.json();
        
        // Mock implementation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockData.papers);
            }, 1000);
        });
    },

    // Get gap analysis
    getGapAnalysis: async (projectId) => {
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/gap-analysis/${projectId}`);
        // return response.json();
        
        // Mock implementation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockData.gapAnalysis);
            }, 1000);
        });
    },

    // Get novelty details
    getNoveltyDetails: async (projectId) => {
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/novelty/${projectId}`);
        // return response.json();
        
        // Mock implementation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockData.noveltyDetails);
            }, 1000);
        });
    },

    // Get feasibility details
    getFeasibilityDetails: async (projectId) => {
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/feasibility/${projectId}`);
        // return response.json();
        
        // Mock implementation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockData.feasibilityDetails);
            }, 1000);
        });
    },

    // Get improved directions
    getImprovedDirections: async (projectId) => {
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/directions/${projectId}`);
        // return response.json();
        
        // Mock implementation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockData.improvedDirections);
            }, 1000);
        });
    },

    // Get risks and recommendations
    getRisksRecommendations: async (projectId) => {
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/risks/${projectId}`);
        // return response.json();
        
        // Mock implementation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockData.risksRecommendations);
            }, 1000);
        });
    },

    // Generate report
    generateReport: async (projectId) => {
        // TODO: Replace with actual API call
        // const response = await fetch(`/api/report/${projectId}`);
        // return response.json();
        
        // Mock implementation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    ...mockData.projectEvaluation,
                    papers: mockData.papers,
                    gapAnalysis: mockData.gapAnalysis,
                    noveltyDetails: mockData.noveltyDetails,
                    feasibilityDetails: mockData.feasibilityDetails,
                    improvedDirections: mockData.improvedDirections,
                    risksRecommendations: mockData.risksRecommendations
                });
            }, 1500);
        });
    }
};

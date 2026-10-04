// ===== MAIN JAVASCRIPT FOR NOVELTYRADAR AI FRONTEND =====

// State management
let currentProjectData = null;
let currentResults = null;

// ===== NAVIGATION =====
function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

// ===== FORM HANDLING =====
document.getElementById('project-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
        title: document.getElementById('project-title').value,
        description: document.getElementById('project-description').value,
        domain: document.getElementById('project-domain').value,
        timeAvailable: document.getElementById('time-available').value,
        budget: document.getElementById('budget').value,
        skills: document.getElementById('skills').value,
        constraints: document.getElementById('constraints').value
    };

    // Store project data
    currentProjectData = formData;

    // Navigate to loading page
    navigateTo('loading');

    // Simulate analysis process
    await simulateAnalysis();

    // Get results (using mock data for now)
    currentResults = mockData.projectEvaluation;

    // Update results page with project title
    document.getElementById('results-project-title').textContent = `Project: ${formData.title}`;

    // Populate results
    populateResults();

    // Navigate to results page
    navigateTo('results');
});

// Form reset
document.getElementById('project-form').addEventListener('reset', () => {
    currentProjectData = null;
});

// ===== ANALYSIS SIMULATION =====
async function simulateAnalysis() {
    const steps = document.querySelectorAll('.loading-step');
    const totalSteps = steps.length;

    for (let i = 0; i < totalSteps; i++) {
        // Mark current step as active
        steps[i].classList.add('active');
        
        // Mark previous steps as completed
        for (let j = 0; j < i; j++) {
            steps[j].classList.remove('active');
            steps[j].classList.add('completed');
        }

        // Wait for each step (simulate processing time)
        await new Promise(resolve => setTimeout(resolve, 800));
    }

    // Mark all steps as completed
    steps.forEach(step => {
        step.classList.remove('active');
        step.classList.add('completed');
    });
}

// ===== POPULATE RESULTS =====
function populateResults() {
    if (!currentResults) return;

    // Update scores
    const noveltyScore = currentResults.noveltyScore;
    const feasibilityScore = currentResults.feasibilityScore;

    document.getElementById('novelty-score').textContent = noveltyScore;
    document.getElementById('feasibility-score').textContent = feasibilityScore;

    // Update score bars
    document.getElementById('novelty-bar').style.width = `${noveltyScore}%`;
    document.getElementById('feasibility-bar').style.width = `${feasibilityScore}%`;

    // Color code scores
    document.getElementById('novelty-bar').style.backgroundColor = getScoreColor(noveltyScore);
    document.getElementById('feasibility-bar').style.backgroundColor = getScoreColor(feasibilityScore);

    // Update key findings
    const findingsContent = document.getElementById('key-findings-content');
    findingsContent.innerHTML = currentResults.keyFindings.map(finding => 
        `<p>• ${finding}</p>`
    ).join('');

    // Populate tabs
    populatePapers();
    populateGapAnalysis();
    populateNoveltyDetails();
    populateFeasibilityDetails();
    populateImprovedDirections();
    populateRisksRecommendations();
}

function getScoreColor(score) {
    if (score >= 80) return '#10b981'; // green
    if (score >= 60) return '#3b82f6'; // blue
    if (score >= 40) return '#f59e0b'; // orange
    return '#ef4444'; // red
}

// ===== POPULATE PAPERS =====
function populatePapers() {
    const papersList = document.getElementById('papers-list');
    const papers = mockData.papers;

    papersList.innerHTML = papers.map(paper => `
        <div class="paper-card">
            <h3 class="paper-title">${paper.title}</h3>
            <p class="paper-abstract">${paper.abstract}</p>
            <div class="paper-meta">
                <span>👤 ${paper.authors.join(', ')}</span>
                <span>📚 ${paper.venue}</span>
                <span>📅 ${paper.year}</span>
                <span>📊 ${paper.citations} citations</span>
            </div>
            <a href="${paper.url}" target="_blank" class="paper-link">
                View Paper →
            </a>
        </div>
    `).join('');
}

// Paper search functionality
document.getElementById('paper-search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const papers = mockData.papers;
    const filteredPapers = papers.filter(paper => 
        paper.title.toLowerCase().includes(searchTerm) ||
        paper.abstract.toLowerCase().includes(searchTerm) ||
        paper.authors.some(author => author.toLowerCase().includes(searchTerm))
    );
    
    const papersList = document.getElementById('papers-list');
    papersList.innerHTML = filteredPapers.map(paper => `
        <div class="paper-card">
            <h3 class="paper-title">${paper.title}</h3>
            <p class="paper-abstract">${paper.abstract}</p>
            <div class="paper-meta">
                <span>👤 ${paper.authors.join(', ')}</span>
                <span>📚 ${paper.venue}</span>
                <span>📅 ${paper.year}</span>
                <span>📊 ${paper.citations} citations</span>
            </div>
            <a href="${paper.url}" target="_blank" class="paper-link">
                View Paper →
            </a>
        </div>
    `).join('');
});

// ===== POPULATE GAP ANALYSIS =====
function populateGapAnalysis() {
    const gapTableBody = document.getElementById('gap-table-body');
    const gapAnalysis = mockData.gapAnalysis;

    gapTableBody.innerHTML = gapAnalysis.map(gap => `
        <tr>
            <td>${gap.claim}</td>
            <td>${gap.similarPapers}</td>
            <td><span class="badge badge-${gap.similarityLevel}">${gap.similarityLevel}</span></td>
            <td>${gap.gapDescription}</td>
            <td><span class="badge badge-${gap.riskOpportunity}">${gap.riskOpportunity}</span></td>
        </tr>
    `).join('');
}

// ===== POPULATE NOVELTY DETAILS =====
function populateNoveltyDetails() {
    const noveltyDetails = document.getElementById('novelty-details');
    const data = mockData.noveltyDetails;

    noveltyDetails.innerHTML = `
        <div class="detail-card">
            <h3>Novelty Score: ${data.score}/100</h3>
            <p>${data.explanation}</p>
        </div>
        <div class="detail-card">
            <h3>Score Formula</h3>
            <p><code>${data.formula}</code></p>
        </div>
        <div class="detail-card">
            <h3>Score Components</h3>
            <div class="score-breakdown">
                <div class="breakdown-item">
                    <div class="breakdown-label">Avg Claim Similarity</div>
                    <div class="breakdown-value">${(data.factors.avgClaimSimilarity * 100).toFixed(0)}%</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Avg Gap Strength</div>
                    <div class="breakdown-value">${(data.factors.avgGapStrength * 100).toFixed(0)}%</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Domain Saturation</div>
                    <div class="breakdown-value">${(data.factors.domainSaturation * 100).toFixed(0)}%</div>
                </div>
            </div>
        </div>
        <div class="detail-card">
            <h3>Interpretation</h3>
            <p>${data.interpretation}</p>
        </div>
    `;
}

// ===== POPULATE FEASIBILITY DETAILS =====
function populateFeasibilityDetails() {
    const feasibilityDetails = document.getElementById('feasibility-details');
    const data = mockData.feasibilityDetails;

    feasibilityDetails.innerHTML = `
        <div class="detail-card">
            <h3>Feasibility Score: ${data.score}/100</h3>
            <p>${data.explanation}</p>
        </div>
        <div class="detail-card">
            <h3>Score Formula</h3>
            <p><code>${data.formula}</code></p>
        </div>
        <div class="detail-card">
            <h3>Feasibility Components</h3>
            <div class="score-breakdown">
                <div class="breakdown-item">
                    <div class="breakdown-label">Time Feasibility</div>
                    <div class="breakdown-value">${(data.breakdown.timeFeasibility * 100).toFixed(0)}%</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Skills Feasibility</div>
                    <div class="breakdown-value">${(data.breakdown.skillsFeasibility * 100).toFixed(0)}%</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Data Feasibility</div>
                    <div class="breakdown-value">${(data.breakdown.dataFeasibility * 100).toFixed(0)}%</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Budget Feasibility</div>
                    <div class="breakdown-value">${(data.breakdown.budgetFeasibility * 100).toFixed(0)}%</div>
                </div>
            </div>
        </div>
        <div class="detail-card">
            <h3>Interpretation</h3>
            <p>${data.interpretation}</p>
        </div>
    `;
}

// ===== POPULATE IMPROVED DIRECTIONS =====
function populateImprovedDirections() {
    const directionsGrid = document.getElementById('directions-grid');
    const directions = mockData.improvedDirections;

    directionsGrid.innerHTML = directions.map(direction => `
        <div class="direction-card">
            <h3>${direction.title}</h3>
            <p><span class="direction-label">Problem Focus:</span> ${direction.problemFocus}</p>
            <p><span class="direction-label">Proposed Improvement:</span> ${direction.proposedImprovement}</p>
            <p><span class="direction-label">Why It's Better:</span> ${direction.whyBetter}</p>
            <p><span class="direction-label">Expected Benefit:</span> ${direction.expectedBenefit}</p>
        </div>
    `).join('');
}

// ===== POPULATE RISKS AND RECOMMENDATIONS =====
function populateRisksRecommendations() {
    const risksContent = document.getElementById('risks-content');
    const data = mockData.risksRecommendations;

    let html = '';

    // Project Risks
    html += '<h3>Project Risks</h3>';
    data.projectRisks.forEach(risk => {
        html += `
            <div class="risk-card ${risk.severity === 'high' ? 'danger' : ''}">
                <h3>${risk.type}</h3>
                <p>${risk.description}</p>
                <p><strong>Recommendation:</strong> ${risk.recommendation}</p>
            </div>
        `;
    });

    // Technical Risks
    html += '<h3>Technical Risks</h3>';
    data.technicalRisks.forEach(risk => {
        html += `
            <div class="risk-card ${risk.severity === 'high' ? 'danger' : ''}">
                <h3>${risk.type}</h3>
                <p>${risk.description}</p>
                <p><strong>Recommendation:</strong> ${risk.recommendation}</p>
            </div>
        `;
    });

    // Feasibility Concerns
    html += '<h3>Feasibility Concerns</h3>';
    data.feasibilityConcerns.forEach(concern => {
        html += `
            <div class="risk-card ${concern.severity === 'high' ? 'danger' : ''}">
                <h3>${concern.type}</h3>
                <p>${concern.description}</p>
                <p><strong>Recommendation:</strong> ${concern.recommendation}</p>
            </div>
        `;
    });

    // General Recommendations
    html += '<h3>General Recommendations</h3>';
    html += '<div class="risk-card success">';
    html += '<ul>';
    data.recommendations.forEach(rec => {
        html += `<li>${rec}</li>`;
    });
    html += '</ul>';
    html += '</div>';

    risksContent.innerHTML = html;
}

// ===== TAB FUNCTIONALITY =====
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Show corresponding tab content
        const tabId = tab.dataset.tab;
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// ===== NAVIGATION LINKS =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.dataset.page;
        navigateTo(pageId);
    });
});

// ===== REPORT GENERATION =====
async function generateReport() {
    if (!currentResults) return;

    // Show loading state
    const btn = event.target;
    btn.textContent = 'Generating...';
    btn.disabled = true;

    // Simulate report generation
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Populate report content
    populateReport();

    // Navigate to report page
    navigateTo('report');

    // Reset button
    btn.textContent = 'Generate Report';
    btn.disabled = false;
}

function populateReport() {
    const reportContent = document.getElementById('report-content');
    const data = mockData;

    reportContent.innerHTML = `
        <div class="report-section">
            <h2>Project Evaluation Report</h2>
            <h3>Project Title</h3>
            <p>${currentProjectData ? currentProjectData.title : data.projectEvaluation.projectTitle}</p>
            
            <h3>Project Summary</h3>
            <p>${data.projectEvaluation.projectSummary}</p>
            
            <h3>Domain</h3>
            <p>${currentProjectData ? currentProjectData.domain : 'Computer Vision / Deep Learning'}</p>
        </div>

        <div class="report-section">
            <h2>Overall Assessment</h2>
            <h3>Novelty Score: ${data.projectEvaluation.noveltyScore}/100</h3>
            <h3>Feasibility Score: ${data.projectEvaluation.feasibilityScore}/100</h3>
            <h3>Overall Status: ${data.projectEvaluation.overallStatus}</h3>
            
            <h3>Key Findings</h3>
            <ul>
                ${data.projectEvaluation.keyFindings.map(finding => `<li>${finding}</li>`).join('')}
            </ul>
        </div>

        <div class="report-section">
            <h2>Research Papers</h2>
            ${data.papers.map(paper => `
                <h3>${paper.title}</h3>
                <p><strong>Authors:</strong> ${paper.authors.join(', ')}</p>
                <p><strong>Venue:</strong> ${paper.venue} (${paper.year})</p>
                <p><strong>Abstract:</strong> ${paper.abstract}</p>
                <p><strong>Citations:</strong> ${paper.citations}</p>
            `).join('')}
        </div>

        <div class="report-section">
            <h2>Claim-wise Gap Analysis</h2>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Claim</th>
                        <th>Similar Papers</th>
                        <th>Similarity</th>
                        <th>Gap Description</th>
                        <th>Risk/Opportunity</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.gapAnalysis.map(gap => `
                        <tr>
                            <td>${gap.claim}</td>
                            <td>${gap.similarPapers}</td>
                            <td>${gap.similarityLevel}</td>
                            <td>${gap.gapDescription}</td>
                            <td>${gap.riskOpportunity}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="report-section">
            <h2>Novelty Score Analysis</h2>
            <h3>Score: ${data.noveltyDetails.score}/100</h3>
            <p>${data.noveltyDetails.explanation}</p>
            <p><strong>Formula:</strong> ${data.noveltyDetails.formula}</p>
            <p>${data.noveltyDetails.interpretation}</p>
        </div>

        <div class="report-section">
            <h2>Feasibility Score Analysis</h2>
            <h3>Score: ${data.feasibilityDetails.score}/100</h3>
            <p>${data.feasibilityDetails.explanation}</p>
            <p><strong>Formula:</strong> ${data.feasibilityDetails.formula}</p>
            <p>${data.feasibilityDetails.interpretation}</p>
        </div>

        <div class="report-section">
            <h2>Improved Project Directions</h2>
            ${data.improvedDirections.map(direction => `
                <h3>${direction.title}</h3>
                <p><strong>Problem Focus:</strong> ${direction.problemFocus}</p>
                <p><strong>Proposed Improvement:</strong> ${direction.proposedImprovement}</p>
                <p><strong>Why It's Better:</strong> ${direction.whyBetter}</p>
                <p><strong>Expected Benefit:</strong> ${direction.expectedBenefit}</p>
            `).join('')}
        </div>

        <div class="report-section">
            <h2>Risks and Recommendations</h2>
            <h3>Project Risks</h3>
            ${data.risksRecommendations.projectRisks.map(risk => `
                <p><strong>${risk.type}:</strong> ${risk.description}</p>
                <p><em>Recommendation: ${risk.recommendation}</em></p>
            `).join('')}
            
            <h3>Technical Risks</h3>
            ${data.risksRecommendations.technicalRisks.map(risk => `
                <p><strong>${risk.type}:</strong> ${risk.description}</p>
                <p><em>Recommendation: ${risk.recommendation}</em></p>
            `).join('')}
            
            <h3>Feasibility Concerns</h3>
            ${data.risksRecommendations.feasibilityConcerns.map(concern => `
                <p><strong>${concern.type}:</strong> ${concern.description}</p>
                <p><em>Recommendation: ${concern.recommendation}</em></p>
            `).join('')}
            
            <h3>General Recommendations</h3>
            <ul>
                ${data.risksRecommendations.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        </div>
    `;
}

// ===== PRINT REPORT =====
function printReport() {
    window.print();
}

// ===== DOWNLOAD REPORT =====
function downloadReport() {
    // For demo purposes, we'll trigger print
    // In production, this would call backend API to generate PDF
    alert('Report download feature will be connected to backend PDF generation API.\n\nFor now, use Print to save as PDF.');
    printReport();
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    // Start on home page
    navigateTo('home');
});
